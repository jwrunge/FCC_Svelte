<script>
	import CMSHome from "./CMSHome.svelte";
	import AdminModal from "./AdminModal.svelte";

	let rows = [];
	let total = 0;
	let loading = false;
	let error = "";
	let modalOpen = false;
	let editingId = 0;
	let m_header = "";
	let m_content = "";
	let m_file = "";
	let imageFile = null;
	let imageInput;
	let saving = false;
	let modalError = "";

	async function load() {
		loading = true;
		error = "";
		try {
			const resp = await fetch(
				"/data/php/admin_frontpage_list.php?start=0&end=25",
				{ headers: { Accept: "application/json" } }
			);
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/#admin";
				return;
			}
			const json = await resp.json();
			if (!json.ok) throw new Error(json.error || "Failed to load");
			rows = json.results || [];
			total = json.total || 0;
		} catch (e) {
			error = e?.message || "Unexpected error";
		} finally {
			loading = false;
		}
	}
	load();

	function newItem() {
		editingId = 0;
		m_header = "";
		m_content = "";
		m_file = "";
		imageFile = null;
		modalOpen = true;
	}

	function editMostRecent() {
		if (!rows || rows.length === 0) return;
		const r = rows[0]; // rows are ordered by created_at DESC
		editingId = r.id;
		m_header = r.header || "";
		m_content = r.content || "";
		m_file = r.file || "";
		imageFile = null;
		modalOpen = true;
	}
	async function deleteItem(r) {
		if (!confirm("Delete this entry?")) return;
		const resp = await fetch("/data/php/admin_frontpage_delete.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ id: r.id }),
		});
		if (resp.status === 401) {
			window.location.href = "/data/php/auth_login.php?redirect=/#admin";
			return;
		}
		const json = await resp.json();
		if (!json.ok) {
			alert(json.error || "Delete failed");
			return;
		}
		load();
	}

	function closeModal() {
		modalOpen = false;
		modalError = "";
	}
	$: canSave = !saving && !!m_header && !!m_content;

	async function saveModal() {
		saving = true;
		modalError = "";
		try {
			if (editingId > 0) {
				// Edit flow: if a new image is provided, replace the image first to get its path
				if (imageFile) {
					const fd = new FormData();
					fd.append("id", String(editingId));
					fd.append("image", imageFile);
					const r1 = await fetch(
						"/data/php/admin_frontpage_replace_image.php",
						{ method: "POST", body: fd }
					);
					if (r1.status === 401) {
						window.location.href =
							"/data/php/auth_login.php?redirect=/#admin";
						return;
					}
					const j1 = await r1.json();
					if (!j1.ok)
						throw new Error(j1.error || "Image upload failed");
					m_file = j1.file || m_file;
				}

				// Then update header/content (and file path, whether replaced or kept)
				const resp = await fetch(
					"/data/php/admin_frontpage_update.php",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JSON.stringify({
							id: editingId,
							header: m_header,
							content: m_content,
							file: m_file,
						}),
					}
				);
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				if (!json.ok) throw new Error(json.error || "Save failed");
			} else {
				// New entry: prefer upload if an image file is provided
				if (imageFile) {
					const fd = new FormData();
					fd.append("header", m_header);
					fd.append("content", m_content);
					fd.append("image", imageFile);
					const resp = await fetch(
						"/data/php/admin_frontpage_upload.php",
						{ method: "POST", body: fd }
					);
					if (resp.status === 401) {
						window.location.href =
							"/data/php/auth_login.php?redirect=/#admin";
						return;
					}
					const json = await resp.json();
					if (!json.ok)
						throw new Error(json.error || "Upload failed");
				} else {
					// No image file: fall back to JSON POST with optional file path
					const resp = await fetch(
						"/data/php/admin_frontpage_set.php",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Accept: "application/json",
							},
							body: JSON.stringify({
								header: m_header,
								content: m_content,
								file: m_file,
							}),
						}
					);
					if (resp.status === 401) {
						window.location.href =
							"/data/php/auth_login.php?redirect=/#admin";
						return;
					}
					const json = await resp.json();
					if (!json.ok)
						throw new Error(json.error || "Save failed");
				}
			}

			closeModal();
			load();
		} catch (e) {
			modalError = e?.message || "Unexpected error";
		} finally {
			saving = false;
		}
	}
</script>

<CMSHome>
	<h1>Front page</h1>
	<p class="admin-meta">
		Note: Only the most recent entry will show on the front page.
	</p>
	<div class="admin-toolbar">
		<button on:click={newItem}>New</button>
		<button on:click={editMostRecent} disabled={!rows.length}
			>Edit most recent</button
		>
	</div>
	{#if error}<p class="admin-error">{error}</p>{/if}
	<table class="admin-table">
		<thead
			><tr
				><th>Created</th><th>Header</th><th>Image</th><th>Actions</th
				></tr
			></thead
		>
		<tbody>
			{#each rows as r}
				<tr>
					<td>{new Date(r.created_at).toLocaleString()}</td>
					<td>{r.header}</td>
					<td>{r.file}</td>
					<td
						><button on:click={() => deleteItem(r)}>Delete</button
						></td
					>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr><td colspan="4">No entries yet</td></tr>
			{/if}
		</tbody>
	</table>
	<p class="admin-meta">Showing up to 25 of {total}</p>

	<AdminModal
		bind:open={modalOpen}
		title={editingId ? "Edit frontpage entry" : "New frontpage entry"}
		hint={editingId
			? "Update the current frontpage message. Only the most recent will be used."
			: "Add a new frontpage message. Only the most recent will be used."}
		initialFocusSelector="#fp-header"
		on:close={closeModal}
	>
		<div class="fields">
			<div class="field">
				<label for="fp-header">Header</label>
				<input
					id="fp-header"
					type="text"
					bind:value={m_header}
					required
				/>
			</div>
			<div class="field span-2">
				<label for="fp-content">Content</label>
				<textarea
					id="fp-content"
					rows="6"
					bind:value={m_content}
					required
				></textarea>
			</div>
			<div class="field">
				<label for="fp-image">Upload image (optional)</label>
				<input
					id="fp-image"
					type="file"
					accept="image/*"
					bind:this={imageInput}
					on:change={() => {
						imageFile = imageInput?.files?.[0] || null;
					}}
				/>
			</div>
			<div class="field">
				<label for="fp-file">Image path (optional)</label>
				<input
					id="fp-file"
					type="text"
					placeholder="/uploads/xxx.jpg"
					bind:value={m_file}
				/>
			</div>
		</div>
		{#if modalError}<p class="admin-error">{modalError}</p>{/if}
		<div class="actions">
			<button class="primary" on:click={saveModal} disabled={!canSave}
				>{saving ? "Saving…" : "Save"}</button
			>
			<button on:click={closeModal} disabled={saving}>Cancel</button>
		</div>
	</AdminModal>
</CMSHome>

<style>
	.fields {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.8rem;
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.field.span-2 {
		grid-column: 1 / -1;
	}
	textarea {
		resize: vertical;
	}
	input,
	textarea,
	label {
		box-sizing: border-box;
	}
</style>
