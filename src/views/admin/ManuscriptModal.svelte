<script>
	import { createEventDispatcher } from "svelte";
	import AdminModal from "./AdminModal.svelte";
	const dispatch = createEventDispatcher();
	export let open = false;
	export let initial = {
		id: 0,
		date: new Date().toISOString().slice(0, 10),
		title: "",
		series: "",
		file_name: "",
	};
	let date = initial.date;
	let title = initial.title || "";
	let series = initial.series || "";
	let file;
	let fileInput;
	let initialized = false;
	let saving = false;
	let error = "";
	let lastKey = "";

	function resetOnce() {
		date = initial.date || new Date().toISOString().slice(0, 10);
		title = initial.title || "";
		series = initial.series || "";
		file = null;
	}

	function keyFromInitial() {
		return `${initial?.id || 0}|${initial?.date || ""}|${initial?.title || ""}|${initial?.series || ""}|${initial?.file_name || ""}`;
	}

	$: if (open && !initialized) {
		initialized = true;
		resetOnce();
		lastKey = keyFromInitial();
	}

	$: if (open && initialized) {
		const k = keyFromInitial();
		if (k !== lastKey) {
			resetOnce();
			lastKey = k;
		}
	}

	function close() {
		dispatch("close");
		initialized = false;
	}

	$: isNew = !initial?.id;
	$: canSave =
		!saving && !!date && title.trim().length > 0 && (isNew ? !!file : true);

	async function save() {
		saving = true;
		error = "";
		try {
			if (file) {
				const fd = new FormData();
				if (initial.id) fd.append("id", String(initial.id));
				fd.append("date", date);
				fd.append("title", title);
				fd.append("series", series);
				fd.append("manuscript", file);
				const resp = await fetch(
					"/data/php/admin_manuscript_upload.php",
					{
						method: "POST",
						body: fd,
						headers: { Accept: "application/json" },
					}
				);
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				if (!json.ok) throw new Error(json.error || "Upload failed");
			} else if (initial?.id) {
				const body = { id: initial.id, date, title, series };
				const resp = await fetch(
					"/data/php/admin_manuscript_update.php",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JSON.stringify(body),
					}
				);
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				if (!json.ok) throw new Error(json.error || "Update failed");
			} else {
				throw new Error("Choose a PDF file to upload");
			}
			dispatch("saved");
			close();
		} catch (e) {
			error = e?.message || "Unexpected error";
		} finally {
			saving = false;
		}
	}
</script>

<AdminModal
	{open}
	title={initial.id ? "Edit Manuscript" : "New Manuscript"}
	hint="Set the date, title, and series, and optionally replace the PDF."
	initialFocusSelector="#manuscript-title"
	on:close={close}
>
	<div class="fields">
		<div class="field">
			<label for="manuscript-date">Date</label><input
				id="manuscript-date"
				type="date"
				bind:value={date}
				required
			/>
		</div>
		<div class="field">
			<label for="manuscript-title">Title</label><input
				id="manuscript-title"
				type="text"
				bind:value={title}
				placeholder="Title"
				required
			/>
		</div>
		<div class="field">
			<label for="manuscript-series">Series</label><input
				id="manuscript-series"
				type="text"
				bind:value={series}
				placeholder="Series"
			/>
		</div>
		<div class="field">
			<label for="manuscript-file">PDF</label><input
				id="manuscript-file"
				type="file"
				accept="application/pdf"
				bind:this={fileInput}
				on:change={() => {
					file = fileInput?.files?.[0] || null;
				}}
			/>
		</div>
	</div>
	{#if error}<p class="error">{error}</p>{/if}
	<div class="actions">
		<button class="primary" on:click={save} disabled={!canSave}
			>{saving ? "Saving…" : "Save"}</button
		>
		<button on:click={close} disabled={saving}>Cancel</button>
	</div>
</AdminModal>

<style>
	.fields {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		margin-top: 0.5rem;
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.actions {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
		justify-content: flex-end;
	}
	.actions .primary {
		background: #0d6efd;
		color: #fff;
		border: 1px solid #0b5ed7;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
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
</style>
