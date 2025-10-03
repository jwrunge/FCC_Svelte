<script>
	import { createEventDispatcher } from "svelte";
	import AdminModal from "./AdminModal.svelte";
	const dispatch = createEventDispatcher();

	export let open = false;

	function close() {
		dispatch("close");
	}
</script>

<AdminModal
	{open}
	title="How to embed a Facebook video"
	hint="Use Facebook's Embed action to copy an iframe, then paste it into the Sermon 'Embed code' box. Or upload a video file instead."
	on:close={close}
>
	<div class="content">
		<p>You can add a sermon video in two ways:</p>
		<ul>
			<li>
				<strong>Paste an embed code</strong> from Facebook (or YouTube,
				etc.) into the <em>Embed code</em> box.
			</li>
			<li>
				<strong>Upload a video file</strong> (MP4 or similar) using the
				<em>Video file</em> field instead.
			</li>
		</ul>

		<h3>Get the Facebook embed code</h3>
		<ol class="steps">
			<li>
				Open the church's Facebook page and find the Sunday service
				video post.
				<div class="figure">
					<img
						src="/icons/howto/fb-page-heading.jpg"
						alt="Facebook page header showing the church page where posts, including the live video, appear"
					/>
				</div>
			</li>
			<li>
				On the video post, click the three dots menu in the corner and
				choose <strong>Embed</strong>.
				<div class="figure">
					<img
						src="/icons/howto/fb-embed-menu.jpg"
						alt="The post action menu open on a Facebook video with the Embed option highlighted"
					/>
				</div>
			</li>
			<li>
				In the "Embed Video" dialog, click <strong>Copy Code</strong>.
				You can optionally set a start time. Then paste the code into
				the <em>Embed code</em> box in the Sermon form.
				<div class="figure">
					<img
						src="/icons/howto/fb-embed-dialog.jpg"
						alt="Facebook Embed Video dialog showing the Copy Code button and the iframe snippet"
					/>
				</div>
			</li>
		</ol>

		<div class="note">
			Tip: We accept either the full iframe embed code or a direct video
			URL. If the embed is blocked by Facebook for any reason, you can
			always upload the video file instead.
		</div>
	</div>

	<div class="actions">
		<button class="primary" on:click={close}>Got it</button>
	</div>
</AdminModal>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.steps {
		padding-left: 1.25rem;
	}
	.figure {
		margin-top: 0.5rem;
	}
	.figure img {
		display: block;
		max-width: 100%;
		height: auto;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(16, 24, 40, 0.08);
	}
	.note {
		background: #f8fafc;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		padding: 0.75rem;
		color: #334155;
		font-size: 0.95rem;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.75rem;
		gap: 0.5rem;
	}
	.actions .primary {
		background: #0d6efd;
		color: #fff;
		border: 1px solid #0b5ed7;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
	}
</style>
