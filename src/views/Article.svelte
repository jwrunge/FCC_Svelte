<script>
    import {flyModified} from '../flyModified.js'
    import {onMount} from 'svelte'
    
    export let getPageData
    let articleIndex

    onMount(()=>{
        articleIndex = window.location.hash.split('/')[1]
    })
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            {#await getPageData('/data/slideshow.json')}
                <div class='loader'>
                    <img src='/icons/loading.svg' alt='loading content'>
                </div>
            {:then slides}
                {#if slides && slides.length}
                    <img class='no-bottom-margin' src={slides[articleIndex].src} alt={slides[articleIndex].caption}>
                    <h2>{slides[articleIndex].heading}</h2>
                    {#if slides[articleIndex].text}
                        {#each slides[articleIndex].text.split('\n') as p}
                            <p>{p}</p>
                        {/each}
                    {/if}
                {:else}
                    <li>Event not found.</li>
                {/if}
            {/await}
        </div>
    </div>
</div>