<script>
	import CMSHome from "./CMSHome.svelte";
	import NewsletterModal from "./NewsletterModal.svelte";

	let rows = [];
	let total = 0;
	let loading = false;
	let error = "";
	let modalOpen = false;
	let modalInitial = {
		id: 0,
		date: new Date().toISOString().slice(0, 10),
		file_name: "",
	};

	async function load() {
		loading = true;
		error = "";
		try {
			const resp = await fetch(
				"/data/php/admin_newsletter_list.php?start=0&end=25",
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
			file_name: "",
		};
		modalOpen = true;
	}
	function editItem(row) {
		modalInitial = {
			id: row.id,
			date: (row.date || "").slice(0, 10),
			file_name: row.file_name || "",
		};
		modalOpen = true;
	}
	async function deleteItem(row) {
		if (!confirm("Delete this newsletter?")) return;
		const fd = new FormData();
		fd.append("id", String(row.id));
		const resp = await fetch("/data/php/admin_newsletter_delete.php", {
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
	<h1>Newsletters</h1>
	<div class="admin-toolbar">
		<button on:click={newItem}>New</button>
	</div>
	{#if error}<p class="admin-error">{error}</p>{/if}
	<table class="admin-table">
		<thead><tr><th>Date</th><th>File</th><th>Actions</th></tr></thead>
		<tbody>
			{#each rows as r}
				<tr>
					<td>{r.date}</td>
					<td>{r.file_name}</td>
					<td>
						<button on:click={() => editItem(r)}>Edit</button>
						<button on:click={() => deleteItem(r)}>Delete</button>
					</td>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr><td colspan="3">No newsletters found</td></tr>
			{/if}
		</tbody>
	</table>
	<p class="admin-meta">Showing up to 25 of {total}</p>
	<NewsletterModal
		bind:open={modalOpen}
		initial={modalInitial}
		on:saved={load}
		on:close={() => (modalOpen = false)}
	/>
</CMSHome>
