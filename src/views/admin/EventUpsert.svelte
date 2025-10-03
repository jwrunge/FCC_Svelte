<script>
	import CMSHome from "./CMSHome.svelte";

	let name = "";
	let description = "";
	let duration = 60;
	let location = "FCC";
	let date = new Date().toISOString().slice(0, 16);
	let message = "";
	let submitting = false;
	async function submit() {
		submitting = true;
		message = "";
		const payload = {
			name,
			description,
			duration: Number(duration),
			location,
			date: new Date(date).toISOString(),
		};
		try {
			const resp = await fetch("/data/php/admin_event_upsert.php", {
				method: "POST",
				body: JSON.stringify(payload),
			});
			const json = await resp.json();
			message = json.ok ? "Saved!" : json.error || "Error saving";
		} catch (e) {
			message = "Network error";
		}
		submitting = false;
	}
</script>

<CMSHome>
	<h1>Add/Update Event</h1>
	<label>Name <input type="text" bind:value={name} /></label>
	<label>Description <input type="text" bind:value={description} /></label>
	<label
		>Duration (minutes) <input type="number" bind:value={duration} /></label
	>
	<label>Location <input type="text" bind:value={location} /></label>
	<label>Date <input type="datetime-local" bind:value={date} /></label>
	<button on:click={submit} disabled={submitting}>Save</button>
	<p>{message}</p>
</CMSHome>

<style>
	label {
		display: block;
		margin: 0.5rem 0;
	}
	input {
		width: 100%;
		max-width: 40rem;
	}
</style>
