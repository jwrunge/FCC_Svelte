<script>
	import { flyModified } from "../flyModified.js";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	let results = 5;
	let showing = 0;
	let show = "videos";
	let totalResultsPossible = 0;

	let embeds = [];
	export let getPageData;

	function getMoreVideos() {
		fetch(
			"data/php/getSermons.php?start=" +
				showing +
				"&end=" +
				(showing + results) +
				"&direction=desc"
		)
			.then((data) => data.json())
			.then((videos) => {
				videos.results.forEach((video) => {
					embeds.push(JSON.parse(video));
				});
				embeds = embeds;
				showing += results;
				totalResultsPossible = videos.files;
			});
	}

	onMount(() => {
		getMoreVideos();
	});
</script>

<div class="page">
	<slot></slot>
	<div
		in:flyModified={{ y: 300, duration: 300, delay: 500 }}
		out:flyModified={{ y: -300, duration: 300 }}
	>
		<div class="content">
			<h1>Worship Services</h1>
			<div class="attention-box centered">
				<h3>Join Us for Worship!</h3>
				<div>Worshipping in-person Sundays at 10am</div>
				<div>
					Live worship streamed on <a
						href="https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/"
						>Facebook</a
					>
				</div>
				<!-- <hr>
                <div>Worshipping outside Sundays at 9:30am, weather permitting... or join us online &mdash; worship videos are below!</div> -->
				<!-- <p class='centered'>
                    <span class="underline">Sunday Mornings</span><br>
                    <strong>Contemporary Service</strong> - 8:30 AM<br>
                    <strong>Traditional Service</strong> - 11 AM
                </p>
                <p class='centered'>Sunday school is available for all ages between services</p> -->
			</div>
			<div class="switcher">
				<button
					class:selected={show == "videos"}
					on:click={() => {
						show = "videos";
					}}>Videos</button
				>
				<button
					class:selected={show == "manuscripts"}
					on:click={() => {
						show = "manuscripts";
					}}>Manuscripts</button
				>
			</div>
			{#if show == "videos"}
				{#if !embeds.length}
					<div class="loader">
						<img src="/icons/loading.svg" alt="loading content" />
					</div>
				{:else}
					<div class="video-list" in:fade={{ delay: 800 }} out:fade>
						{#each embeds as embed}
							<div class="video-container">
								<h3>{embed.title}</h3>
								<div class="embed-container">
									{#if embed.type && embed.type == "onsite"}
										<video controls poster={embed.poster}>
											<source
												src={embed.src}
												type="video/mp4"
											/>
											<track kind="captions" />
										</video>
									{:else}
										<iframe
											title={embed.title}
											src={embed.src}
											width="560"
											height="487"
											style="border:none;overflow:hidden"
											scrolling="no"
											frameborder="0"
											allowtransparency
											allow="encrypted-media"
											allowfullscreen
										></iframe>
									{/if}
								</div>
							</div>
						{/each}
						<div class="centered">
							{#if showing <= totalResultsPossible}
								<a
									href="#moreVids"
									on:click|preventDefault={getMoreVideos}
									>More videos</a
								>
							{:else}
								No more videos
							{/if}
						</div>
					</div>
				{/if}
			{:else}
				{#await getPageData("data/php/getManuscripts.php")}
					<div class="loader">
						<img src="/icons/loading.svg" alt="loading content" />
					</div>
				{:then mans}
					<div
						class="manuscript-list"
						in:fade={{ delay: 500 }}
						out:fade
					>
						<ul>
							{#each mans.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as man}
								<li>
									<a
										target="_blank"
										href="data/manuscripts/{man.file}"
										><strong>{man.title}</strong> - {man.series}
										- {(() => {
											let parts = man.date.split("-");
											parts[2] = parts[2].replace(
												/ .*?$/,
												""
											); //Remove timezone
											return `${parts[1]}/${parts[2]}/${parts[0]}`;
										})()}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{/await}
			{/if}
		</div>
	</div>
</div>

<style>
	.video-container {
		margin: 1em auto 3em auto;
	}

	.switcher button {
		display: inline;
		text-align: center;
	}

	.switcher {
		text-align: center;
	}

	/* .underline { text-decoration: underline; } */
</style>
