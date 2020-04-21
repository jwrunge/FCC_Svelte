<script>
    import {createEventDispatcher} from 'svelte'
    import {fade, fly} from 'svelte/transition'
    export let staffer

    const dispatch = createEventDispatcher()
</script>

<div class='bio-frame' transition:fade>
    <div class="close" on:click={()=>{ dispatch('close') }}>&times;</div>
    <div class='side-by-side' in:fly={{y: 300, duration: 300, delay: 500}} out:fly={{y: -300, duration: 300}}>
        <img src={staffer.src} alt={staffer.name + ' ' + staffer.title}>
        <span class='description'>
            <span class='name'>{ staffer.name }</span>
            <span class='title'><br>{ staffer.title }</span>
            <span class='bio'>{@html staffer.bio}</span>
        </span>
    </div>
</div>

<style lang='scss'>
    .bio-frame {
        background-color: rgba(0,0,0,.9);
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0; left: 0;
        z-index: 11;
    }

    .side-by-side {
        max-width: 45em;
        width: 90%;
        margin: 0 auto;

        img {
            width: 45%;
            max-width: 20em;
            float: left;
            margin-right: 2em;
            margin-bottom: 1em;
        }

        .description {
            color: white;

            .name { font-size: 2.5em;}
            .title { font-size: 1.5em; font-style: italic;}
            .bio { margin-top: 1em; }
        }
    }
</style>