<script>
	// Simple admin landing with links to individual tools

	import SermonVideo from "./SermonVideo.svelte";
</script>

<div class="cms">
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

<slot></slot>

<style>
	.cms {
		max-width: 42rem;
		margin: 2rem auto;
		padding: 1rem;
	}
	ul {
		line-height: 2;
	}
</style>
