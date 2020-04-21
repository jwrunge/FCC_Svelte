<script>
    import {flyModified} from '../flyModified.js'

    export let getPageData
    let results = 5
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>Sermons</h1>

            {#await getPageData('/data/sermons.json')}
                <div class='loader'>
                    <img src='/icons/loading.svg' alt='loading content'>
                </div>
            {:then embeds}
                {#each embeds.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf()).slice(0, results) as embed}
                    <div class="video-container">
                        <h3>{embed.title}</h3>
                        <div class="embed-container">
                            <iframe title={embed.title} src={embed.src} width="560" height="487" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                {/each}
                <div class="centered">
                    {#if results < embeds.length}
                        <a href="#moreVids" on:click|preventDefault={()=>{ results+=5 }}>More videos</a>
                    {:else}
                        No more videos
                    {/if}
                </div>
            {/await}
        </div>
    </div>
</div>

<style>
    .video-container {
        margin: 1em auto 3em auto;
    }
</style>