<script>
	import CMSHome from "./CMSHome.svelte";

	let header = "";
	let content = "";
	let file = "";
	let message = "";
	let submitting = false;
	async function submit() {
		submitting = true;
		message = "";
		try {
			const resp = await fetch("/data/php/admin_frontpage_set.php", {
				method: "POST",
				body: JSON.stringify({ header, content, file }),
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
	<h1>Update Front Page</h1>
	<label>Header <input type="text" bind:value={header} /></label>
	<label>Content <textarea rows="6" bind:value={content}></textarea></label>
	<label
		>Image path (optional) <input
			type="text"
			bind:value={file}
			placeholder="/uploads/xxx.jpg"
		/></label
	>
	<button on:click={submit} disabled={submitting}>Save</button>
	<p>{message}</p>
</CMSHome>

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
