<script>
    import {fade} from 'svelte/transition'
    export let show = false
</script>

{#if show}
    <div class='loader' transition:fade>
        <img src='/icons/loading.svg' alt='loading content'>
    </div>
{/if}

<style lang='scss'>
    .loader {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        z-index: 100;
        position: absolute;
        top: 0; left: 0;

        img {
            width: 5em;
        }
    }
</style>