<script>
    import {flyModified} from '../flyModified.js'

    export let getPageData
    let bgImages = [
        "/primary-images/ns1.jpg",
        "/primary-images/ns2.jpg",
        "/primary-images/ns3.jpg"
    ]
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>Newsletters</h1>

            {#await getPageData('/data/newsletters.json')}
                <div class='loader'>
                    <img src='/icons/loading.svg' alt='loading content'>
                </div>
            {:then newsletters}
                <div class="news-grid">
                    {#each newsletters.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf()) as newsletter}
                        <a target="_blank" href={newsletter.href} class="newsletter">
                            <img src={bgImages[Math.floor(Math.random(bgImages.length) * 3)]} alt="">
                            <span>{newsletter.title}</span>
                        </a>
                    {/each}
                </div>
            {/await}
        </div>
    </div>
</div>

<style lang='scss'>

    @import '../style/variables.scss';

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
            padding: .5em;
            background-color: rgba(0,0,0,.6);
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