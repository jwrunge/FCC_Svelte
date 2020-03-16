<script>
    import {flyModified} from '../flyModified.js'

    let phrases = [
        "0 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur.",
        "1 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur.",
        "2 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur. 2 Dolore cillum Lorem eiusmod irure consectetur.",
        "3 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur.",
        "4 Dolore cillum Lorem eiusmod irure consectetur ad occaecat voluptate irure laboris dolor sunt fugiat consectetur."
    ]

    let currentPhrase = 0

    let innerDiv

    //Interval to change phrases
    let interval = setInterval(()=>{
        if(currentPhrase == phrases.length - 1) currentPhrase = 0
        else currentPhrase += 1
    }, 4000)
</script>

<div class="love-box">
    <div class='inner' bind:this={innerDiv}>
        <h2>We love our church!</h2>
        {#each phrases as phrase, index}
            {#if index == currentPhrase}
                <p in:flyModified={{x: 100, duration: 300, delay: 500, position: 'absolute'}} out:flyModified={{x: -100, duration: 300}}>{phrase}</p>
            {/if}
        {/each}
    </div>
</div>

<style lang='scss'>

@import "../style/variables.scss";

.love-box {
    width: 100%;
    background-color: $red;
    padding: 5em 0;
    color: white;
    transform: skewY(1.5deg);
    background-image: url('/frontpage_images/redbg.jpg');
    background-size: cover;
    background-attachment: fixed;
    box-shadow: $box-shadow;
    position: relative;
    top: -3em;

    .inner {
        width: 45em;
        max-width: 90%;
        margin: 3em auto;
        position: relative;
        min-height: 12em;
        transform: skewY(-1.5deg);
    }

    h2 {
        color: white;
        margin: 0;
        margin-bottom: .5em;
        font-size: 3em;
        position: relative;

        @media #{$notMobile} {
            left: -1em;
        }
    }

    p {
        width: 90%;
        font-size: 1.8em;
        margin: 0 1em;

        @media #{$notMobile} {
            width: 110%;
        }
    }
  }
</style>