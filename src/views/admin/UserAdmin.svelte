<script>
	import CMSHome from "./CMSHome.svelte";
	import AdminModal from "./AdminModal.svelte";

	let rows = [];
	let total = 0;
	let loading = false;
	let error = "";

	let newOpen = false;
	let resetOpen = false;
	let createEmail = "";
	let createPassword = "";
	let resetId = 0;
	let resetEmail = "";
	let resetPassword = "";
	let saving = false;
	let modalError = "";

	async function load() {
		loading = true;
		error = "";
		try {
			const resp = await fetch(
				"/data/php/admin_user_list.php?start=0&end=100",
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

	function openCreate() {
		createEmail = "";
		createPassword = "";
		modalError = "";
		newOpen = true;
	}

	function openReset(row) {
		resetId = row.id;
		resetEmail = row.email;
		resetPassword = "";
		modalError = "";
		resetOpen = true;
	}

	async function remove(row) {
		if (!confirm(`Delete user ${row.email}?`)) return;
		const resp = await fetch("/data/php/admin_user_delete.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ id: row.id }),
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

	$: canCreate = !saving && createEmail && createPassword;
	$: canReset = !saving && resetId && resetPassword;

	async function saveCreate() {
		saving = true;
		modalError = "";
		try {
			const resp = await fetch("/data/php/admin_user_create.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					email: createEmail,
					password: createPassword,
				}),
			});
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/#admin";
				return;
			}
			const json = await resp.json();
			if (!json.ok) throw new Error(json.error || "Create failed");
			newOpen = false;
			load();
		} catch (e) {
			modalError = e?.message || "Unexpected error";
		} finally {
			saving = false;
		}
	}

	async function saveReset() {
		saving = true;
		modalError = "";
		try {
			const resp = await fetch(
				"/data/php/admin_user_reset_password.php",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						id: resetId,
						password: resetPassword,
					}),
				}
			);
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/#admin";
				return;
			}
			const json = await resp.json();
			if (!json.ok) throw new Error(json.error || "Reset failed");
			resetOpen = false;
			load();
		} catch (e) {
			modalError = e?.message || "Unexpected error";
		} finally {
			saving = false;
		}
	}
</script>

<CMSHome>
	<h1>Users</h1>
	<div class="admin-toolbar">
		<button on:click={openCreate}>New user</button>
	</div>
	{#if error}<p class="admin-error">{error}</p>{/if}
	<table class="admin-table">
		<thead
			><tr
				><th>Email</th><th>Created</th><th>Updated</th><th>Actions</th
				></tr
			></thead
		>
		<tbody>
			{#each rows as r}
				<tr>
					<td>{r.email}</td>
					<td>{r.created_at}</td>
					<td>{r.updated_at || ""}</td>
					<td>
						<button on:click={() => openReset(r)}
							>Reset password</button
						>
						<button on:click={() => remove(r)}>Delete</button>
					</td>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr><td colspan="4">No users.</td></tr>
			{/if}
		</tbody>
	</table>
	<p class="admin-meta">Showing up to {total}</p>

	<AdminModal
		bind:open={newOpen}
		title="Create user"
		hint="Create a new admin user."
		initialFocusSelector="#user-email"
		on:close={() => (newOpen = false)}
	>
		<div class="fields">
			<div class="field">
				<label for="user-email">Email</label>
				<input
					id="user-email"
					type="email"
					bind:value={createEmail}
					required
				/>
			</div>
			<div class="field">
				<label for="user-pass">Password</label>
				<input
					id="user-pass"
					type="password"
					bind:value={createPassword}
					required
				/>
			</div>
		</div>
		{#if modalError}<p class="admin-error">{modalError}</p>{/if}
		<div class="actions">
			<button class="primary" on:click={saveCreate} disabled={!canCreate}
				>{saving ? "Saving…" : "Save"}</button
			>
			<button on:click={() => (newOpen = false)} disabled={saving}
				>Cancel</button
			>
		</div>
	</AdminModal>

	<AdminModal
		bind:open={resetOpen}
		title="Reset password"
		hint={`Set a new password for ${resetEmail}. The current password is never shown.`}
		initialFocusSelector="#reset-pass"
		on:close={() => (resetOpen = false)}
	>
		<div class="fields">
			<div class="field">
				<label for="reset-pass">New password</label>
				<input
					id="reset-pass"
					type="password"
					bind:value={resetPassword}
					required
				/>
			</div>
		</div>
		{#if modalError}<p class="admin-error">{modalError}</p>{/if}
		<div class="actions">
			<button class="primary" on:click={saveReset} disabled={!canReset}
				>{saving ? "Saving…" : "Save"}</button
			>
			<button on:click={() => (resetOpen = false)} disabled={saving}
				>Cancel</button
			>
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
	input,
	label {
		box-sizing: border-box;
		max-width: 100%;
	}
</style>
