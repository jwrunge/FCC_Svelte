<script>
	import { fly } from "svelte/transition";
	import { onMount, onDestroy } from "svelte";

	export let mobileOpen;
	export let subpageStyle = false;
	export let scrollTop;
	export let subpageOpen;
	export let isAdminRoute = false;
	export let main;
	export let curPage;

	let forceOpen = false;

	function scrollListener() {
		if (scrollTop > 50) {
			forceOpen = false;
		}
	}

	onMount(() => {
		if (!subpageStyle)
			document
				.getElementsByClassName("main")[0]
				.addEventListener("scroll", scrollListener);
	});

	onDestroy(() => {
		if (!subpageStyle)
			document
				.getElementsByClassName("main")[0]
				.removeEventListener("scroll", scrollListener);
	});
</script>

{#if !isAdminRoute}
	<nav
		class:subpageStyle
		class:mobileOpen
		class:hidden={scrollTop > 50 && !subpageStyle && !forceOpen}
		class:onTop={scrollTop > 500}
	>
		<span class="nav-links" class:shown={mobileOpen}>
			<a class:inactive={!curPage || curPage == "#home"} href="#home"
				>Home</a
			>
			<a class:inactive={curPage == "#about"} href="#about">About Us</a>
			<a class:inactive={curPage == "#worship"} href="#worship">Worship</a
			>
			<a class:inactive={curPage == "#ministries"} href="#ministries"
				>Ministries</a
			>
			<a class:inactive={curPage == "#links"} href="#links">Resources</a>
		</span>
		{#if mobileOpen}
			<div
				class="mobile-menu-close"
				on:click={() => {
					mobileOpen = false;
				}}
			>
				&#x2716;
			</div>
		{:else}
			<div
				class="mobile-menu-open"
				on:click={() => {
					mobileOpen = true;
				}}
			>
				&#9776;
			</div>
		{/if}
	</nav>

	{#if scrollTop > 50 && !forceOpen && !subpageOpen}
		<div
			class="forceOpen"
			class:onTop={scrollTop > 500}
			on:click={() => {
				forceOpen = true;
			}}
			transition:fly={{ y: -50 }}
		>
			&#9776;
		</div>
	{/if}
{/if}

<style lang="scss">
	@import "../style/variables.scss";

	.forceOpen {
		display: none;

		@media #{$notMobile} {
			width: 1.5em;
			height: 1.5em;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			right: 2em;
			top: 0.5em;
			font-size: 1em;
			z-index: 2;
			background-color: $accent-color;
			padding: 0.25em;
			box-shadow: $box-shadow;
			cursor: pointer;
		}
	}

	.mobile-menu-open,
	.mobile-menu-close {
		@media screen and (min-width: 631px) {
			display: none;
		}
	}

	.mobile-menu-open,
	.mobile-menu-close {
		font-size: 1.5em;
		margin-bottom: 0.25em;
		z-index: 10;
	}

	.mobile-menu-close {
		color: white;
	}

	nav {
		position: fixed;
		padding: 0;
		width: 100%;
		background-color: $accent-color;
		box-shadow: $box-shadow;
		bottom: 0;
		right: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: space-between;
		z-index: 2;
		box-sizing: border-box;

		&.mobileOpen {
			z-index: 3;

			@media #{$notMobile} {
				z-index: 2;
			}
		}

		a {
			color: black;
			font-weight: bold;
			text-decoration: none;
			z-index: 6;
			line-height: 2em;

			&:hover {
				filter: brightness(1.3);
			}

			&.inactive {
				cursor: default;
				opacity: 0.5;
			}
		}

		a + a {
			@media screen and (min-width: 631px) {
				margin-left: 1.25em;
			}
		}

		@media #{$notMobile} {
			position: sticky;
			transition: transform 0.5s ease-in-out;

			align-content: center;
			top: 0;
			bottom: auto;
			padding: 0 2% 0 0;
			text-align: right;
			justify-content: flex-end;

			&.sub {
				position: absolute;
			}

			a {
				margin-bottom: 0;
			}

			.nav-links {
				border: none;
				display: flex;
			}

			&.hidden {
				transform: translateY(-5em);
			}
		}
	}

	.nav-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: space-between;
		padding: 0.5em;
		border-width: 2px;
		border-style: solid;
		border-color: transparent;
		box-sizing: border-box;

		@media screen and (max-width: 630px) {
			padding: 0;
			display: flex;
			flex-direction: column;
			align-content: center;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			opacity: 0;
			pointer-events: none;
			z-index: 10;
			height: 100vh;
			transition: opacity 0.5s ease-in-out;

			a {
				font-size: 1.5em;
				color: white;
			}

			&.shown {
				opacity: 1;
				background-color: rgba(0, 0, 0, 0.9);
				pointer-events: auto;
			}
		}
	}

	@media #{$notMobile} {
		nav.subpageStyle {
			background: transparent;
			z-index: 6;
			box-shadow: none;

			.nav-links {
				background-color: white;
			}
		}

		nav.onTop,
		.forceOpen.onTop {
			z-index: 3;
		}
	}
</style>
