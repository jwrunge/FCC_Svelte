<script>
	import CMSHome from "./CMSHome.svelte";
	import ManuscriptModal from "./ManuscriptModal.svelte";

	let rows = [];
	let total = 0;
	let loading = false;
	let error = "";
	let modalOpen = false;
	let modalInitial = {
		id: 0,
		date: new Date().toISOString().slice(0, 10),
		title: "",
		series: "",
	};

	async function load() {
		loading = true;
		error = "";
		try {
			const resp = await fetch(
				"/data/php/admin_manuscript_list.php?start=0&end=25",
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
		modalInitial = {
			id: 0,
			date: new Date().toISOString().slice(0, 10),
			title: "",
			series: "",
		};
		modalOpen = true;
	}
	function editItem(r) {
		modalInitial = {
			id: r.id,
			date: r.date,
			title: r.title || "",
			series: r.series || "",
			file_name: r.file_name,
		};
		modalOpen = true;
	}
	async function deleteItem(r) {
		if (!confirm("Delete this manuscript?")) return;
		const fd = new FormData();
		fd.append("id", String(r.id));
		const resp = await fetch("/data/php/admin_manuscript_delete.php", {
			method: "POST",
			body: fd,
			headers: { Accept: "application/json" },
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
</script>

<CMSHome>
	<h1>Manuscripts</h1>
	<div class="toolbar">
		<button on:click={newItem}>New</button>
		<button on:click={load} disabled={loading}>Reload</button>
	</div>
	{#if error}<p class="error">{error}</p>{/if}
	<table class="admin-table">
		<thead
			><tr
				><th>Date</th><th>Title</th><th>Series</th><th>File</th><th
					>Actions</th
				></tr
			></thead
		>
		<tbody>
			{#each rows as r}
				<tr>
					<td>{r.date}</td>
					<td>{r.title}</td>
					<td>{r.series}</td>
					<td>{r.file_name}</td>
					<td>
						<button on:click={() => editItem(r)}>Edit</button>
						<button on:click={() => deleteItem(r)}>Delete</button>
					</td>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr><td colspan="5">No manuscripts found</td></tr>
			{/if}
		</tbody>
	</table>
	<p class="meta">Showing up to 25 of {total}</p>
	<ManuscriptModal
		bind:open={modalOpen}
		initial={modalInitial}
		on:saved={load}
		on:close={() => (modalOpen = false)}
	/>
</CMSHome>

<style>
	.toolbar {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
	table.admin-table {
		width: 100%;
		border-collapse: collapse;
	}
	table.admin-table th,
	table.admin-table td {
		border-bottom: 1px solid #eee;
		padding: 0.4rem 0.5rem;
		text-align: left;
	}
	.error {
		color: #b00020;
	}
	.meta {
		color: #555;
		font-size: 0.9rem;
	}
</style>
