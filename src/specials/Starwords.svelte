<script>
    import {scale} from "svelte/transition"
    let words = ["kindness", "caring", "sharing", "giving", "compassion", "love", "openness", "pardon", "understanding", "discipleship", "servanthood", "stability", "hopefulness", "innocence", "prayerfulness", "praise", "gentleness", "knowledge", "happiness", "laughter", "acceptance", "self-control", "restraint", "mercy", "truth", "peace", "faith", "consideration", "fellowship", "unity", "teaching", "singing", "celebration", "perseverance", "judgment", "discipline", "courage", "confidence", "clarity", "honor", "contentment", "imagination", "commitment", "friendship", "freedom", "creativity", "devotion", "joy", "strength", "comfort", "leadership", "discernment", "obedience", "thoughtfulness", "responsibility", "patience", "forgiveness", "humility", "faithfulness", "hope", "tenderness", "enthusiasm", "evangelism", "healing", "loyalty", "rejoicing", "respect", "insight", "selflessness", "righteousness", "assurance", "justice", "honesty", "wisdom", "awareness", "tolerance", "wholeness", "guidance", "hospitality", "foresight", "trust", "learning", "proclamation", "encouragement", "trustworthiness", "inspiration", "wonder", "flexibility", "grace", "graciousness", "integrity", "helping", "witnessing", "generosity", "perceptiveness", "purity", "prayer", "service", "steadfastness", "determination", "nurturing", "renewal", "purpose", "peacefulness", "power", "excitement", "harmony", "reliability", "goodness", "reverence", "serenity", "humor", "boldness", "genuineness", "illumination", "vision", "dependability", "endurance", "listening", "accountability", "speaking", "sincerity", "writing", "music", "motivation", "art", "building", "crafts", "planning", "organization", "drama", "cheerfulness", "focus", "balance", "helpfulness", "languages", "cooking", "sympathy", "empathy", "sensitivity", "time", "conviction", "delight", "responsiveness", "education", "intelligence", "experience", "visitation", "sobriety", "spirituality", "travel", "thankfulness", "money", "dignity", "quietness", "playfulness", "dedication", "empathy", "solitude", "zeal", "appreciation", "affirmation", "charity"];
    let word
    let showWord = true

    function changeWord() {
        showWord = false
        setTimeout(()=> { showWord = true; word = words[Math.floor(Math.random()*words.length)] }, 100)
    }

    changeWord()
</script>

<div class='stars' on:click={changeWord}>
    <!-- <img on:click={changeWord} id='starImg' src='uploads/events/star.png' alt='star image'> -->
    {#if showWord}
        <p transition:scale id='starWord'>{word}</p>
    {/if}
</div>

<style>
    .stars {
        cursor: pointer; 
        margin: 0; 
        height: 15em; width: 100%;
        position: relative; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        flex-direction: column; 
        background-image: url('uploads/events/star.png');
        background-size: contain; 
        background-repeat: no-repeat;
        background-position-x: 50%;
        transition: transform .2s ease;
    }

    .stars:hover {
        transform: scale(1.1);
    }

    .starblock {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #starWord {
        font-size: 2em; 
        font-weight: bold; 
        color: red; 
        pointer-events: none; 
        margin: 0;
        z-index: 1;
    }

</style>