<script>
	import { createEventDispatcher, tick } from "svelte";
	const dispatch = createEventDispatcher();

	export let open = false;
	export let initial = {
		id: 0,
		date: new Date().toISOString().slice(0, 10),
		title: "",
		src: "",
	};

	let date = initial.date;
	let title = initial.title;
	let embed =
		initial.src && !initial.src.startsWith("/uploads/videos/")
			? initial.src
			: "";
	let videoFile;
	let videoInput;
	let saving = false;
	let error = "";
	let initialized = false; // ensure we only init fields once per open
	let titleInput;
	let hasAutofocused = false;
	let modalEl; // for focus trapping
	let previouslyFocusedEl; // to restore focus on close
	let canSave = false;

	function handleKeydown(e) {
		if (!open) return;
		if (e.key === "Escape") {
			close();
			return;
		}
		// Focus trap for Tab
		if (e.key === "Tab") {
			if (!modalEl) return;
			const focusable = Array.from(
				modalEl.querySelectorAll(
					'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex="-1"])'
				)
			).filter(
				(el) => el instanceof HTMLElement && el.offsetParent !== null
			);
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const active = document.activeElement;
			if (e.shiftKey) {
				if (active === first || !modalEl.contains(active)) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (active === last || !modalEl.contains(active)) {
					e.preventDefault();
					first.focus();
				}
			}
		}
	}

	$: if (open && !initialized) {
		initialized = true;
		date = initial.date || new Date().toISOString().slice(0, 10);
		title = initial.title || "";
		embed = initial.src && !initial.src.startsWith("/uploads/videos/") ? initial.src : "";
		videoFile = null;
		tick().then(() => { if (titleInput) titleInput.focus(); });
	}

	// Track opener to restore focus after closing
	$: if (open && !previouslyFocusedEl) {
		// capture only once per open
		previouslyFocusedEl =
			document.activeElement instanceof HTMLElement
				? document.activeElement
				: null;
	}

	// Derived state: canSave when title/date set and either:
	// - new item: embed or file provided
	// - editing: embed or file provided OR keep existing src
	$: hasExistingSrc = !!(initial?.id && initial?.src);
	$: isNew = !initial?.id;
	$: canSave =
		!saving &&
		!!date &&
		title?.trim().length > 0 &&
		(embed?.trim().length > 0 || !!videoFile || (!isNew && hasExistingSrc));

	function close() {
		dispatch("close");
		initialized = false;
		// restore focus to the element that opened the modal, if any
		const toFocus = previouslyFocusedEl;
		previouslyFocusedEl = null;
		// next microtask to let DOM update
		setTimeout(() => {
			if (toFocus && document.contains(toFocus)) {
				try {
					toFocus.focus();
				} catch {}
			}
		}, 0);
	}

	async function save() {
		saving = true;
		error = "";
		try {
			if (embed && embed.trim()) {
				const body = { id: initial.id || 0, date, title, embed };
				const resp = await fetch("/data/php/admin_sermon_upsert.php", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(body),
				});
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				if (!json.ok) throw new Error(json.error || "Save failed");
			} else if (videoFile) {
				const form = new FormData();
				form.append("id", String(initial.id || 0));
				form.append("date", date);
				form.append("title", title);
				form.append("video", videoFile);
				const resp = await fetch(
					"/data/php/admin_sermon_upload_video.php",
					{ method: "POST", body: form }
				);
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				if (!json.ok) throw new Error(json.error || "Upload failed");
			} else if (initial?.id) {
				// Editing existing without changing src: update title/date only
				const resp = await fetch("/data/php/admin_sermon_update.php", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({ id: initial.id, date, title }),
				});
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				if (!json.ok) throw new Error(json.error || "Update failed");
			} else {
				throw new Error(
					"Provide either an embed code or a video file."
				);
			}
			dispatch("saved");
			dispatch("close");
		} catch (e) {
			error = e?.message || "Unexpected error";
		} finally {
			saving = false;
		}
	}
	// Listen for Escape to close
	// Note: This runs while component is mounted. We only act when open.
	// It won't interfere elsewhere.

	// Focus trap handled in handleKeydown via svelte:window
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<div
		class="modal-root"
		role="dialog"
		aria-modal="true"
		aria-labelledby="sermon-modal-title"
		aria-describedby="sermon-modal-hint"
	>
		<button
			type="button"
			class="modal-backdrop"
			aria-label="Close dialog"
			on:click={close}
		></button>
		<div class="modal" role="document" bind:this={modalEl}>
			<button
				class="close-x"
				type="button"
				aria-label="Close"
				on:click={close}>&times;</button
			>
			<h2 id="sermon-modal-title">
				{initial.id ? "Edit Sermon" : "New Sermon"}
			</h2>
			<p id="sermon-modal-hint" class="hint">
				Add a social media embed, or upload a video file. One of the two
				is required.
			</p>
			<div class="fields">
				<div class="field">
					<label class="form-label" for="sermon-date">Date</label>
					<input
						id="sermon-date"
						type="date"
						bind:value={date}
						required
					/>
				</div>
				<div class="field">
					<label class="form-label" for="sermon-title">Title</label>
					<input
						id="sermon-title"
						bind:this={titleInput}
						type="text"
						bind:value={title}
						placeholder="Sermon title"
						required
					/>
				</div>
				<div class="field span-2">
					<label class="form-label" for="sermon-embed"
						>Embed code</label
					>
					<textarea
						id="sermon-embed"
						bind:value={embed}
						rows="6"
						placeholder="Paste the full embed code or a direct URL (YouTube, Facebook, etc.)."
					></textarea>
				</div>
				<div class="divider span-2"><span>or</span></div>
				<div class="field span-2">
					<label class="form-label" for="sermon-video-file"
						>Video file</label
					>
					<input
						id="sermon-video-file"
						bind:this={videoInput}
						type="file"
						accept="video/*"
						on:change={() => {
							videoFile =
								videoInput && videoInput.files
									? videoInput.files[0]
									: null;
						}}
					/>
					{#if videoFile}
						<div class="file-name">{videoFile.name}</div>
					{/if}
				</div>
			</div>
			{#if error}<p class="error">{error}</p>{/if}
			<div class="actions">
				<button class="primary" on:click={save} disabled={!canSave}
					>{saving ? "Saving…" : "Save"}</button
				>
				<button on:click={close} disabled={saving}>Cancel</button>
			</div>
			<p class="helper" aria-live="polite">
				{canSave
					? ""
					: isNew
						? "Enter a title and date, and provide either an embed or a video file to enable Save."
						: "Enter a title and date, or change the source (embed/video) to enable Save."}
			</p>
		</div>
	</div>
{/if}

<style>
	.modal-root {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: grid;
		place-items: center;
	}
	.modal-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		border: 0;
		padding: 0;
		margin: 0;
		z-index: 0;
	}
	.modal {
		position: relative;
		background: #fff;
		padding: 1rem 1.25rem 1.25rem;
		border-radius: 12px;
		width: min(95vw, 640px);
		max-height: 85vh;
		overflow: auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}
	.modal * {
		box-sizing: border-box;
	}
	.modal label {
		float: none;
		display: inline-block;
		width: auto;
		margin: 0 0 0.25rem 0;
	}
	.modal input,
	.modal textarea {
		display: block;
	}
	.modal button {
		float: none;
		position: static;
	}
	.modal p,
	.modal div,
	.modal label {
		overflow: visible;
	}
	.modal textarea {
		resize: vertical;
		min-height: 140px;
	}
	.close-x {
		position: absolute;
		top: 8px;
		right: 8px;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		line-height: 1;
		cursor: pointer;
	}
	h2 {
		margin: 0 0 0.25rem 0;
	}
	.hint {
		margin: 0 0 0.75rem 0;
		color: #555;
		font-size: 0.9rem;
	}

	.fields {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		margin-top: 0.5rem;
		width: 100%;
		min-width: 0;
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.form-label {
		font-weight: 600;
		color: #222;
	}
	textarea,
	input[type="text"],
	input[type="date"] {
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
	}
	.field.span-2 {
		grid-column: 1 / -1;
	}
	.divider {
		text-align: center;
		color: #888;
		font-size: 0.9rem;
	}
	.divider span {
		background: #fff;
		padding: 0 0.5rem;
	}
	.file-name {
		font-size: 0.85rem;
		color: #555;
		margin-top: 0.25rem;
	}
	.actions {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
		justify-content: flex-end;
		clear: both;
	}
	.actions .primary {
		background: #0d6efd;
		color: #fff;
		border: 1px solid #0b5ed7;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}
	.actions button:not(.primary) {
		background: #f2f4f7;
		color: #111;
		border: 1px solid #d0d5dd;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
	}
	.error {
		color: #b00020;
	}

	/* Single-column layout even on large screens keeps things simple and avoids cramped labels */
</style>
