<script>
    import {flyModified} from '../flyModified.js'
    import {onMount} from 'svelte'
    import CalendarModal from '../components/CalendarModal.svelte'

    export let getPageData
    let months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    let curEvent
    let eventIndex
    let calendarModalOpen = false
    
    function openCalendarModal(event) {
        curEvent = event
        calendarModalOpen = true
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
                {#if events && events.length}
                    <h2>{events[eventIndex].name}</h2>
                    {#if events[eventIndex].img}
                        <img class='sm-bottom-margin' src={events[eventIndex].img.src} alt={events[eventIndex].img.alt}>
                    {/if}
                    <div class="event-details">
                        <span><strong>When:</strong> {new Date(events[eventIndex].date).toLocaleString('en-US', { dateStyle: "short", timeStyle: "short", timeZone: 'America/Chicago' })}</span>
                        <span><strong>Where:</strong> {events[eventIndex].location}</span>
                    </div>
                    <div class="detail-box">
                        <h3>Event Description</h3>
                        <p>{events[eventIndex].description}</p>
                        <div class="mt-2 centered">
                            <a href="#events/i" on:click|preventDefault={()=>{ openCalendarModal(events[eventIndex]) }}>Add to calendar</a>
                        </div>
                    </div>
                {:else}
                    <li>Event not found.</li>
                {/if}
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