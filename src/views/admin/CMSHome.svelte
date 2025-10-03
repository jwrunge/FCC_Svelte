<script>
	// Simple admin landing with links to individual tools

	import SermonVideo from "./SermonVideo.svelte";
</script>

<div class="cms">
	<div class="admin-nav">
		<h1>FCC Admin</h1>
		<ul>
			<li><a href="#admin/sermon">Sermon video</a></li>
			<li><a href="#admin/manuscript">Sermon manuscript</a></li>
			<li><a href="#admin/newsletter">Newsletter</a></li>
			<li><a href="#admin/event">Event</a></li>
			<li><a href="#admin/frontpage">Front page</a></li>
			<li><a href="/data/php/auth_logout.php">Logout</a></li>
		</ul>
	</div>

	<div>
		<slot></slot>
	</div>
</div>

<style>
	.cms {
		display: grid;
		gap: 3rem;
		max-width: 2000px;
		margin: 3rem auto;
		padding: 0 1rem;

		@media screen and (min-width: 600px) {
			grid-template-columns: auto 1fr;
		}
	}

	.admin-nav {
		padding: 2rem;
		border-radius: 15px;
		background: rgba(0, 0, 0, 0.15);
	}
</style>
