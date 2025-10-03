<script>
	import { flyModified } from "../flyModified.js";
	import { onMount } from "svelte";

	let results = 25;
	let showing = 0;
	let totalResultsPossible = 0;

	export let getPageData;
	let newsletters = [];

	function formatDateFromUrl(url) {
		const m = url.match(/(\d{1,2})\.(\d{1,2})\.(\d{2})(?=[^\d]|$)/);
		if (!m) return "";
		const mm = parseInt(m[1], 10);
		const dd = parseInt(m[2], 10);
		const yy = parseInt(m[3], 10);
		const year = 2000 + yy;
		const dt = new Date(year, mm - 1, dd);
		return isNaN(dt.getTime()) ? "" : dt.toLocaleDateString();
	}

	function getMoreNewsletters() {
		fetch(
			"data/php/getNewsletters.php?start=" +
				showing +
				"&end=" +
				(showing + results) +
				"&direction=desc"
		)
			.then((data) => data.json())
			.then((ns) => {
				newsletters = ns.results;
				showing += results;
				totalResultsPossible = ns.files;
			});
	}

	onMount(() => {
		getMoreNewsletters();
	});

	let bgImages = [
		"/primary-images/ns1.JPG",
		"/primary-images/ns2.JPG",
		"/primary-images/ns3.JPG",
	];
</script>

<div class="page">
	<slot></slot>
	<div
		in:flyModified={{ y: 300, duration: 300, delay: 500 }}
		out:flyModified={{ y: -300, duration: 300 }}
	>
		<div class="content">
			<h1>Newsletters</h1>

			{#if !newsletters.length}
				<div class="loader">
					<img src="/icons/loading.svg" alt="loading content" />
				</div>
			{:else}
				<div class="news-grid">
					{#each newsletters as newsletter}
						<a href={newsletter} class="newsletter" download>
							<img
								src={bgImages[
									Math.floor(Math.random() * bgImages.length)
								]}
								alt=""
							/>
							<span>{formatDateFromUrl(newsletter)}</span>
						</a>
					{/each}
				</div>
			{/if}

			<!-- <div class="centered mt2">
                {#if showing <= totalResultsPossible}
                    <a href="#moreNls" on:click|preventDefault={getMoreNewsletters}>More newsletters</a>
                {:else}
                    No more newsletters
                {/if}
            </div> -->
		</div>
	</div>
</div>

<style lang="scss">
	@import "../style/variables.scss";

	.news-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
		justify-content: stretch;
		grid-gap: 1em;
		margin: 1em auto;

		@media screen and (min-width: 500px) {
			grid-template-columns: 1fr 1fr 1fr;
		}

		@media screen and (min-width: 800px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		@media screen and (min-width: 1000px) {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}

	.newsletter {
		height: 10em;
		border-width: 2px;
		border-style: solid;
		border-color: $gray;
		position: relative;
		overflow: hidden;

		img {
			object-fit: cover;
			min-width: 100%;
			height: 100%;
			margin: 0;
		}

		span {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			text-align: center;
			padding: 0.5em;
			background-color: rgba(0, 0, 0, 0.6);
			color: white;
			box-sizing: border-box;
		}

		&:hover {
			border-color: $red;
			filter: brightness(1.2);
			cursor: pointer;
			box-shadow: $box-shadow;
		}
	}
</style>
