<script>
    let y
</script>

<svelte:window bind:scrollY={y}/>

<div class="slideshow-wrapper">
    <img class='slideshow' src="/background-slides/band.jpg" alt=""
    style="transform: translate(0, {y / 5}px)">
</div>

<style>
    .slideshow-wrapper {
        position: relative;
        height: 100vh;
        width: 100%;
    }

    .slideshow {
        position: absolute;
        top: 0; right: 0;
        width: 85%;
        height: 100vh;
        object-fit: cover;
    }
</style>