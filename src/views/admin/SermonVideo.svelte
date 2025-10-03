<script>
	let date = new Date().toISOString().slice(0, 10);
	let title = "";
	let embed = "";
	let submitting = false;
	let message = "";
	async function submit() {
		submitting = true;
		message = "";
		try {
			const resp = await fetch("/data/php/admin_sermon_upsert.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({ date, title, embed }),
			});
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/#admin";
				return;
			}
			const json = await resp.json();
			message = json.ok ? "Saved!" : json.error || "Error saving";
		} catch (e) {
			message = "Network error";
		}
		submitting = false;
	}
</script>

<h1>Update Sermon Video</h1>
<label>Date <input type="date" bind:value={date} required /></label>
<label>Title <input type="text" bind:value={title} /></label>
<label>Embed code <textarea bind:value={embed} rows="6"></textarea></label>
<button on:click={submit} disabled={submitting}>Save</button>
<p>{message}</p>

<style>
	label {
		display: block;
		margin: 0.5rem 0;
	}
	textarea,
	input {
		width: 100%;
		max-width: 40rem;
	}
</style>
