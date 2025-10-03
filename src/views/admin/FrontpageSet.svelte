<script>
	import CMSHome from "./CMSHome.svelte";
	import AdminModal from "./AdminModal.svelte";

	let rows = [];
	let total = 0;
	let loading = false;
	let error = "";
	let modalOpen = false;
	let m_header = "";
	let m_content = "";
	let m_file = "";
	let saving = false;
	let modalError = "";

	async function load() {
		loading = true;
		error = "";
		try {
			const resp = await fetch("/data/php/admin_frontpage_list.php?start=0&end=25", { headers: { Accept: "application/json" } });
			if (resp.status === 401) {
				window.location.href = "/data/php/auth_login.php?redirect=/#admin";
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
		m_header = "";
		m_content = "";
		m_file = "";
		modalOpen = true;
	}
	async function deleteItem(r) {
		if (!confirm("Delete this entry?")) return;
		const resp = await fetch("/data/php/admin_frontpage_delete.php", {
			method: "POST",
			headers: { "Content-Type": "application/json", Accept: "application/json" },
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
			const resp = await fetch("/data/php/admin_frontpage_set.php", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({ header: m_header, content: m_content, file: m_file }),
			});
			if (resp.status === 401) {
				window.location.href = "/data/php/auth_login.php?redirect=/#admin";
				return;
			}
			const json = await resp.json();
			if (!json.ok) throw new Error(json.error || "Save failed");
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
	<p class="admin-meta">Note: Only the most recent entry will show on the front page.</p>
	<div class="admin-toolbar">
		<button on:click={newItem}>New</button>
	</div>
	{#if error}<p class="admin-error">{error}</p>{/if}
	<table class="admin-table">
		<thead><tr><th>Created</th><th>Header</th><th>Image</th><th>Actions</th></tr></thead>
		<tbody>
			{#each rows as r}
				<tr>
					<td>{new Date(r.created_at).toLocaleString()}</td>
					<td>{r.header}</td>
					<td>{r.file}</td>
					<td><button on:click={() => deleteItem(r)}>Delete</button></td>
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
		title="New frontpage entry"
		hint="Add a new frontpage message. Only the most recent will be used."
		initialFocusSelector="#fp-header"
		on:close={closeModal}
	>
		<div class="fields">
			<div class="field">
				<label for="fp-header">Header</label>
				<input id="fp-header" type="text" bind:value={m_header} required />
			</div>
			<div class="field span-2">
				<label for="fp-content">Content</label>
				<textarea id="fp-content" rows="6" bind:value={m_content} required></textarea>
			</div>
			<div class="field">
				<label for="fp-file">Image path (optional)</label>
				<input id="fp-file" type="text" placeholder="/uploads/xxx.jpg" bind:value={m_file} />
			</div>
		</div>
		{#if modalError}<p class="admin-error">{modalError}</p>{/if}
		<div class="actions">
			<button class="primary" on:click={saveModal} disabled={!canSave}>{saving ? "Saving…" : "Save"}</button>
			<button on:click={closeModal} disabled={saving}>Cancel</button>
		</div>
	</AdminModal>
</CMSHome>

<style>
	.fields { display: grid; grid-template-columns: 1fr; gap: 0.8rem; }
	.field { display: flex; flex-direction: column; gap: 0.4rem; }
	.field.span-2 { grid-column: 1 / -1; }
	textarea { resize: vertical; }
	input, textarea, label { box-sizing: border-box; }
</style>
