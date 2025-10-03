<script>
	import CMSHome from "./CMSHome.svelte";
	import AdminModal from "./AdminModal.svelte";

	let rows = [];
	let total = 0;
	let loading = false;
	let error = "";
	let modalOpen = false;
	let initial = emptyInitial();
	let saving = false;
	let modalError = "";

	function emptyInitial() {
		return {
			id: 0,
			name: "",
			description: "",
			duration: 60,
			location: "FCC",
			date: new Date().toISOString().slice(0, 16), // datetime-local
		};
	}

	function normalizeDateTimeLocal(v) {
		if (!v) return new Date().toISOString().slice(0, 16);
		// if already an ISO string, slice
		if (typeof v === "string" && v.length >= 16) return v.slice(0, 16);
		try {
			return new Date(v).toISOString().slice(0, 16);
		} catch {
			return new Date().toISOString().slice(0, 16);
		}
	}

	async function load() {
		loading = true;
		error = "";
		try {
			const resp = await fetch(
				"/data/php/admin_event_list.php?start=0&end=50",
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
		initial = emptyInitial();
		modalOpen = true;
	}
	function editItem(r) {
		initial = {
			id: r.id,
			name: r.name || "",
			description: r.description || "",
			duration: r.duration || 60,
			location: r.location || "FCC",
			date: normalizeDateTimeLocal(r.date),
		};
		modalOpen = true;
	}
	async function deleteItem(r) {
		if (!confirm("Delete this event?")) return;
		const resp = await fetch("/data/php/admin_event_delete.php", {
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

	// Modal form state
	let m_id = 0,
		m_name = "",
		m_description = "",
		m_duration = 60,
		m_location = "FCC",
		m_date = new Date().toISOString().slice(0, 16);
	let initialized = false;
	let lastKey = "";

	function keyFromInitial() {
		return `${initial?.id || 0}|${initial?.name || ""}|${initial?.date || ""}`;
	}
	$: if (modalOpen && !initialized) {
		initialized = true;
		m_id = initial.id || 0;
		m_name = initial.name || "";
		m_description = initial.description || "";
		m_duration = initial.duration || 60;
		m_location = initial.location || "FCC";
		m_date = normalizeDateTimeLocal(initial.date);
		lastKey = keyFromInitial();
	}
	$: if (modalOpen && initialized) {
		const k = keyFromInitial();
		if (k !== lastKey) {
			m_id = initial.id || 0;
			m_name = initial.name || "";
			m_description = initial.description || "";
			m_duration = initial.duration || 60;
			m_location = initial.location || "FCC";
			m_date = normalizeDateTimeLocal(initial.date);
			lastKey = k;
		}
	}
	function closeModal() {
		modalOpen = false;
		initialized = false;
		modalError = "";
	}
	$: canSave = !saving && !!m_name && !!m_date;

	async function saveModal() {
		saving = true;
		modalError = "";
		try {
			const payload = {
				name: m_name,
				description: m_description,
				duration: Number(m_duration) || null,
				location: m_location,
				date: new Date(m_date).toISOString(),
			};
			const isEdit = !!m_id;
			const url = isEdit
				? "/data/php/admin_event_update.php"
				: "/data/php/admin_event_upsert.php";
			const resp = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(
					isEdit ? { id: m_id, ...payload } : payload
				),
			});
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/#admin";
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
	<h1>Events</h1>
	<div class="admin-toolbar">
		<button on:click={newItem}>New</button>
	</div>
	{#if error}<p class="admin-error">{error}</p>{/if}
	<table class="admin-table">
		<thead>
			<tr><th>Date</th><th>Name</th><th>Location</th><th>Actions</th></tr>
		</thead>
		<tbody>
			{#each rows as r}
				<tr>
					<td
						>{new Date(r.date).toLocaleString("en-US", {
							dateStyle: "short",
							timeStyle: "short",
						})}</td
					>
					<td>{r.name}</td>
					<td>{r.location}</td>
					<td>
						<button on:click={() => editItem(r)}>Edit</button>
						<button on:click={() => deleteItem(r)}>Delete</button>
					</td>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr><td colspan="4">No events found</td></tr>
			{/if}
		</tbody>
	</table>
	<p class="admin-meta">Showing up to 50 of {total}</p>

	<AdminModal
		bind:open={modalOpen}
		title={m_id ? "Edit Event" : "New Event"}
		hint="Only future, non-deleted events are shown publicly."
		initialFocusSelector="#event-name"
		on:close={closeModal}
	>
		<div class="fields">
			<div class="field">
				<label for="event-name">Name</label>
				<input
					id="event-name"
					type="text"
					bind:value={m_name}
					required
				/>
			</div>
			<div class="field">
				<label for="event-date">Date/time</label>
				<input
					id="event-date"
					type="datetime-local"
					bind:value={m_date}
					required
				/>
			</div>
			<div class="field">
				<label for="event-duration">Duration (minutes)</label>
				<input
					id="event-duration"
					type="number"
					bind:value={m_duration}
					min="0"
				/>
			</div>
			<div class="field">
				<label for="event-location">Location</label>
				<input
					id="event-location"
					type="text"
					bind:value={m_location}
				/>
			</div>
			<div class="field span-2">
				<label for="event-description">Description</label>
				<textarea
					id="event-description"
					rows="4"
					bind:value={m_description}
				></textarea>
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
	input,
	textarea,
	label {
		box-sizing: border-box;
		max-width: 100%;
	}
	textarea {
		resize: vertical;
	}
</style>
