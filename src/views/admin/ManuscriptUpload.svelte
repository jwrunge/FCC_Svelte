<script>
	let date = new Date().toISOString().slice(0, 10);
	let title = "";
	let series = "";
	let files;
	let file;
	let submitting = false;
	let message = "";
	async function submit() {
		if (!file) {
			message = "Please choose a PDF";
			return;
		}
		const fd = new FormData();
		fd.append("date", date);
		fd.append("title", title);
		fd.append("series", series);
		fd.append("manuscript", file);
		submitting = true;
		message = "";
		try {
			const resp = await fetch("/data/php/admin_manuscript_upload.php", {
				method: "POST",
				body: fd,
				headers: { Accept: "application/json" },
			});
			if (resp.status === 401) {
				window.location.href =
					"/data/php/auth_login.php?redirect=/cms.php";
				return;
			}
			const json = await resp.json();
			message = json.ok ? "Uploaded!" : json.error || "Error uploading";
		} catch (e) {
			message = "Network error";
		}
		submitting = false;
	}
</script>

<h1>Upload Manuscript</h1>
<label>Date <input type="date" bind:value={date} required /></label>
<label>Title <input type="text" bind:value={title} /></label>
<label>Series <input type="text" bind:value={series} /></label>
<label>PDF <input type="file" accept="application/pdf" bind:files /></label>
<button on:click={submit} disabled={submitting}>Upload</button>
<p>{message}</p>

<style>
	label {
		display: block;
		margin: 0.5rem 0;
	}
	input[type="file"],
	input {
		width: 100%;
		max-width: 40rem;
	}
</style>
