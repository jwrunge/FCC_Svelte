<script>
    // import {flyModified} from '../flyModified.js'
    import {scale} from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import {onMount} from 'svelte'

    let currentPhrase = 0
    let showPhrase = true
    let interval
    export let loveImage = null
    export let loveTop
    export let getPageData

    //Change phrases
    function nextPhrase(phrases) {
        showPhrase = true
        if(currentPhrase == phrases.length - 1) currentPhrase = 0
        else currentPhrase += 1
    }

    function getPhrases(loc) {
        return new Promise((resolve, reject)=>{
            getPageData(loc)
                .then(phrases=> {
                    currentPhrase = Math.floor(Math.random() * phrases.length)
                    resolve(phrases)
                })
                .catch(err=> reject())
        })
    }

    onMount(()=>{
        //Interval to outro one phrase and prompt phrase change
        interval = setInterval(()=>{
            showPhrase = false
        }, 6000)
    })
</script>

<div class="love-box">
    <img bind:this={loveImage} class='bg' src="/primary-images/hearts.svg" alt="" style={"transform: translateY(-15%) translateY(" + loveTop/5 + "px);"}>

    <div class='inner'>
        <h2>We love our church!</h2>
        <p>We asked our church family to name a few of the things they love about First Christian Church, and they delivered!</p>
        <div class="phrases">
            {#await getPhrases('/data/lovephrases.json')}
                <div class='loader'>
                    <img src='/icons/loading.svg' alt='loading content'>
                </div>
            {:then phrases}
                {#if showPhrase}
                    <p transition:scale on:outroend={()=> {nextPhrase(phrases)}}>"{phrases[currentPhrase]}"</p>
                {/if}
            {:catch}
                <p>Error loading phrases</p>
            {/await}
        </div>
    </div>
</div>

<style lang='scss'>

@import "../style/variables.scss";

.love-box {
    width: 100%;
    padding: 5em 0;
    color: white;
    transform: skewY(1deg);
    background: $red;
    background: radial-gradient(lighten($red, 5%), darken($red, 10%));
    position: relative;
    top: -3em;
    overflow: hidden;

    img.bg {
        object-position: 50% 50%;
    }

    .inner {
        width: 50em;
        max-width: 90%;
        margin: 3em auto 1em auto;
        position: relative;
        transform: skewY(-1deg);
    }

    h2 {
        color: white;
        margin: 0;
        margin-bottom: .5em;
        font-size: 3em;

        @media screen and (max-width: 400px) {
            font-size: 2em;
        }
    }

    p {
        font-size: 1.2em;
        margin: 0;
    }

    .phrases {
        min-height: 12em;
        width: 100%;
        padding-top: 2em;
        display: flex;
        align-items: center;
        text-align: center;

        p {
            font-family: 'Shadows Into Light', cursive;
            font-size: 2.5em;

            @media screen and (max-width: 400px) {
                font-size: 1.8em;
            }
        }
    }
  }
</style>