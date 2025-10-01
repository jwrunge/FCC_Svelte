<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let scrollTop;
	let showCaptions = true;
	let showImg = true;
	let goBack = false;
	let interval;
	let paused = false;
	let slideShowTime = 10000;
	let timeLeft = slideShowTime;
	let winWidth;
	let winHeight;
	export let header;
	export let subpageOpen;
	export let getPageData;

	function preload(images) {
		return new Promise((resolve, reject) => {
			for (let image of images) {
				let img = new Image();
				img.src = image.src;
			}
			resolve(images);
		});
	}

	function getImages(loc) {
		return new Promise((resolve, reject) => {
			getPageData(loc)
				.then((images) => {
					preload(images)
						.then((results) => {
							startTimer();
							resolve(results);
						})
						.catch((err) => {
							console.log(err);
							reject(err);
						});
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});
	}

	let currentImg = 0;

	//Change images
	function nextImg(images) {
		console.log("next");
		showImg = true;
		timeLeft = slideShowTime;
		startTimer();

		currentImg += 1;
		if (currentImg > images.length - 1) currentImg = 0;
	}

	function prevImg(images) {
		console.log("back");
		showImg = true;
		timeLeft = slideShowTime;
		startTimer();

		currentImg -= 1;
		if (currentImg < 0) currentImg = images.length - 1;

		goBack = false;
	}

	function startTimer() {
		paused = false;
		interval = setInterval(() => {
			if (!subpageOpen && showCaptions) {
				timeLeft -= 10;
				if (!timeLeft) {
					showImg = false;
					timeLeft = slideShowTime;
					clearInterval(interval);
				}
			}
		}, 10);
	}

	function clearTimer() {
		clearInterval(interval);
	}

	$: showCaptions = scrollTop <= 50;
</script>

<svelte:window bind:innerWidth={winWidth} bind:innerHeight={winHeight} />

<div
	class="slideshow-wrapper"
	style={winWidth < 1000
		? "transform: translateY(" +
			(header.clientHeight - 50) +
			"px); height: " +
			(winHeight - header.clientHeight + 50) +
			"px;"
		: ""}
>
	{#await getImages("data/php/getSlideshow.php")}
		<div class="loader">
			<img src="/icons/loading.svg" alt="loading content" />
		</div>
	{:then images}
		{#if showImg}
			<picture>
				<img
					transition:fade
					on:outroend={goBack ? prevImg(images) : nextImg(images)}
					class="slideshow"
					src={images[currentImg].src}
					alt=""
					style="transform: translateY({scrollTop /
						5}px); object-position: {images[currentImg].focus
						? images[currentImg].focus
						: '50% 50%'};"
				/>
			</picture>
			{#if images[currentImg].caption && showCaptions}
				<div transition:fade class="caption">
					{#if window.innerWidth >= 500}
						<h2>{images[currentImg].heading}</h2>
						{images[currentImg].caption}
						{#if images[currentImg].linkto && images[currentImg].linktext}
							<a href="#article/{currentImg}"
								>{images[currentImg].linktext}</a
							>
						{/if}
					{:else}
						<a href="#article/{currentImg}"
							>{images[currentImg].heading}</a
						>
					{/if}
				</div>
			{/if}
		{/if}
		{#if showCaptions}
			<div transition:fade class="controls">
				<img
					on:click={() => {
						goBack = true;
						clearTimer();
						setTimeout(() => (showImg = false), 200);
					}}
					src="/icons/prev.svg"
					alt="Previous slide"
				/>
				{#if paused}
					<img
						on:click={startTimer}
						src="/icons/play.svg"
						alt="Play slideshow"
					/>
				{:else}
					<img
						on:click={() => {
							paused = true;
							clearTimer();
						}}
						src="/icons/pause.svg"
						alt="Pause slideshow"
					/>
				{/if}
				<img
					on:click={() => {
						clearTimer();
						showImg = false;
					}}
					src="/icons/next.svg"
					alt="Next slide"
				/>
				<div class="timer-container">
					<div
						class="timer-fill"
						style="max-width: {(timeLeft * 100) / slideShowTime}%"
					></div>
				</div>
			</div>
		{/if}
	{/await}
</div>

<!-- <div class='overlay'>{currentImg}</div> -->

<style lang="scss">
	@import "../style/variables.scss";

	.timer-container {
		position: absolute;
		top: 2.75em;
		left: 10%;
		width: 80%;
		height: 2px;
		padding: 1px;
		background-color: #777;
	}

	.timer-fill {
		background-color: white;
		height: 100%;
	}

	.slideshow-wrapper {
		position: absolute;
		background: black;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
	}

	.slideshow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		object-fit: cover;

		@media #{$notMobile} {
			width: 70vw;
			height: 100vh;
			left: auto;
			right: 0;
		}
	}

	.caption {
		position: absolute;
		box-sizing: border-box;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		background: linear-gradient(
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.6) 30%,
			rgba(0, 0, 0, 0.8) 100%
		);
		color: white;
		padding: 1em 1em 6em 1em;
		width: 100%;

		h2 {
			color: white;
			margin-bottom: 0.25em;
		}

		@media screen and (max-width: 500px) {
			height: 5em;

			a {
				position: absolute;
				bottom: 3em;
				max-width: 50%;
			}
		}

		a {
			color: white;

			&:hover {
				color: lighten($red, 25%);
			}
		}

		@media #{$notMobile} {
			padding-left: 33%;
			padding-right: 3em;
			padding-bottom: 4em;
			left: auto;
			right: 0;
		}
	}

	.controls {
		position: absolute;
		padding: 1em;
		bottom: 3em;
		right: 0;

		@media #{$notMobile} {
			bottom: 0;
		}

		@media screen and (max-width: 500px) {
			padding-bottom: 0;
		}

		img {
			padding: 0.25em;
			border-radius: 5px;
			width: 1em;
			cursor: pointer;
			overflow: visible;

			&:hover {
				background-color: $red;
			}
		}
	}

	.overlay {
		font-size: 20em;
		color: white;
		position: fixed;
		left: 3em;
		bottom: 0em;
		z-index: 20;
	}
</style>
