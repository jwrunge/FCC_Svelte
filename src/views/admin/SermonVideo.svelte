<script>
	import CMSHome from "./CMSHome.svelte";
	import { onMount } from "svelte";
	import SermonModal from "./SermonModal.svelte";

	let items = [];
	let loading = false;
	let message = "";

	let modalOpen = false;
	let modalInitial = {
		id: 0,
		date: new Date().toISOString().slice(0, 10),
		title: "",
		src: "",
	};

	async function loadList() {
		loading = true;
		try {
			const resp = await fetch("/data/php/admin_sermon_list.php", {
				headers: { Accept: "application/json" },
			});
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/#admin";
				return;
			}
			const json = await resp.json();
			items = json.items || [];
		} catch (e) {
			// ignore
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadList();
	});

	function newSermon() {
		modalInitial = {
			id: 0,
			date: new Date().toISOString().slice(0, 10),
			title: "",
			src: "",
		};
		modalOpen = true;
	}

	function editRow(row) {
		modalInitial = {
			id: row.id,
			date: row.date,
			title: row.title,
			src: row.src,
		};
		modalOpen = true;
	}

	async function deleteRow(id) {
		if (!confirm("Delete this sermon?")) return;
		const resp = await fetch(
			`/data/php/admin_sermon_delete.php?id=${encodeURIComponent(id)}`
		);
		if (resp.status === 401) {
			window.location.href = "/data/php/auth_login.php?redirect=/#admin";
			return;
		}
		const json = await resp.json();
		if (json.ok) {
			message = "Row deleted";
			await loadList();
		} else {
			message = json.error || "Delete failed";
		}
	}
</script>

<CMSHome>
	<h1>Sermon Videos</h1>
	<div style="display:flex; gap:0.5rem; margin-bottom:0.5rem;">
		<button on:click={newSermon}>New Sermon Video</button>
	</div>
	{#if message}<p>{message}</p>{/if}

	<h2>Recent Sermons</h2>
	{#if loading}
		<p>Loading…</p>
	{:else}
		<table border="1" cellspacing="0" cellpadding="6">
			<thead>
				<tr>
					<th>ID</th>
					<th>Date</th>
					<th>Title</th>
					<th>Source</th>
					<th>Type</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each items as row (row.id)}
					<tr>
						<td>{row.id}</td>
						<td>{row.date}</td>
						<td>{row.title}</td>
						<td
							style="max-width:28rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"
							title={row.src}>{row.src}</td
						>
						<td>{row.type}</td>
						<td>
							<button on:click={() => editRow(row)}>Edit</button>
							<button on:click={() => deleteRow(row.id)}
								>Delete</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}

	<SermonModal
		bind:open={modalOpen}
		initial={modalInitial}
		on:saved={loadList}
		on:close={() => (modalOpen = false)}
	/>
</CMSHome>

<style>
	table {
		width: 100%;
		max-width: 100%;
	}
</style>
