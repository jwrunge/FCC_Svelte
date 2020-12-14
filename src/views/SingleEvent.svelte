<script>
    import {flyModified} from '../flyModified.js'
    import {onMount} from 'svelte'
    import CalendarModal from '../components/CalendarModal.svelte'

    export let getPageData

    let curEvent
    let eventIndex
    let calendarModalOpen = false
    
    function openCalendarModal(event) {
        curEvent = event
        calendarModalOpen = true
    }

    function sortEvents(events) {
        return new Promise((resolve, reject)=> {
            if(!events || !events.length) reject()
            let sortedEvents = events.sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
                .filter(event=> (new Date(event.date)).getTime() > Date.now())
            resolve(sortedEvents)
        })
    }

    onMount(()=>{
        eventIndex = window.location.hash.split('/')[1]
    })
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            {#await getPageData('/data/events.json')}
                <div class='loader'>
                    <img src='/icons/loading.svg' alt='loading content'>
                </div>
            {:then events}
                {#await sortEvents(events)}
                    <div class='loader'>
                        <img src='/icons/loading.svg' alt='loading content'>
                    </div>
                {:then sortedEvents}
                    <h2>{sortedEvents[eventIndex].name}</h2>
                    {#if sortedEvents[eventIndex].img}
                        <img class='sm-bottom-margin' src={sortedEvents[eventIndex].img.src} alt={sortedEvents[eventIndex].img.alt}>
                    {/if}
                    <div class="event-details">
                        <span><strong>When:</strong> {new Date(sortedEvents[eventIndex].date).toLocaleString('en-US', { dateStyle: "short", timeStyle: "short", timeZone: 'America/Chicago' })}</span>
                        <span><strong>Where:</strong> {sortedEvents[eventIndex].location}</span>
                    </div>
                    <div class="detail-box">
                        <h3>Event Description</h3>
                        {#if sortedEvents[eventIndex].description}
                            <p>{@html sortedEvents[eventIndex].description}</p>
                        {:else}
                            <p>No description for this event!</p>
                        {/if}
                        <div class="mt-2 centered">
                            <a href="#events/i" on:click|preventDefault={()=>{ openCalendarModal(sortedEvents[eventIndex]) }}>Add to calendar</a>
                        </div>
                    </div>
                {/await}
            {/await}
        </div>
    </div>
</div>

<!-- Calendar Modal -->
{#if calendarModalOpen && curEvent}
    <CalendarModal {curEvent} bind:calendarModalOpen/>
{/if}

<style lang='scss'>
    @import '../style/variables.scss';

    .event-details {
        background-color: $darkblue;
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        border-top-left-radius: .1em;
        border-top-right-radius: .1em;
        padding: .5em;
        
        span {
            margin: .5em;
        }
    }

    .detail-box {
        padding: 1em;
        border-color: $darkblue;
        border-width: 2px;
        border-style: solid;
        border-top-style: none;
        border-bottom-left-radius: .1em;
        border-bottom-right-radius: .1em;
    }

</style>