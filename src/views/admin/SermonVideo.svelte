<script>
	import CMSHome from "./CMSHome.svelte";

	let date = new Date().toISOString().slice(0, 10);
	let title = "";
	let embed = "";
	let videoFile;
	let videoInput;
	let submitting = false;
	let message = "";

	async function submit() {
		submitting = true;
		message = "";
		try {
			if (embed && embed.trim()) {
				// Save as social embed
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
			} else if (videoFile) {
				// Upload local video
				const form = new FormData();
				form.append("date", date);
				form.append("title", title);
				form.append("video", videoFile);

				const resp = await fetch(
					"/data/php/admin_sermon_upload_video.php",
					{
						method: "POST",
						body: form,
					}
				);
				if (resp.status === 401) {
					window.location.href =
						"/data/php/auth_login.php?redirect=/#admin";
					return;
				}
				const json = await resp.json();
				message = json.ok
					? "Uploaded!"
					: json.error || "Error uploading";
			} else {
				message = "Provide either an embed code or a video file.";
			}
		} catch (e) {
			message = "Network error";
		}
		submitting = false;
	}
</script>

<CMSHome>
	<h1>Update Sermon Video</h1>
	<label>Date <input type="date" bind:value={date} required /></label>
	<label>Title <input type="text" bind:value={title} /></label>
	<label
		>Embed code <textarea
			bind:value={embed}
			rows="6"
			placeholder="Paste social media embed code here; leave blank to upload a video file instead."
		></textarea></label
	>
	<div style="margin:0.5rem 0;">
		<div><strong>Or upload a video file</strong></div>
		<label
			>Video file <input
				bind:this={videoInput}
				type="file"
				accept="video/*"
				on:change={() => {
					videoFile =
						videoInput && videoInput.files
							? videoInput.files[0]
							: null;
				}}
			/></label
		>
	</div>
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
