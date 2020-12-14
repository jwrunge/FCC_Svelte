<script>
    import {flyModified} from '../flyModified.js'
    import CalendarModal from '../components/CalendarModal.svelte'

    export let getPageData
    let months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    let curEvent
    let calendarModalOpen = false
    
    function openCalendarModal(event) {
        curEvent = event
        calendarModalOpen = true
    }

    let previousMonth
    function changeEventMonth(event, skipSet = false) {
        let newMonth = new Date(event.date).getMonth()
        newMonth = months[newMonth]

        if(previousMonth && newMonth === previousMonth) return false
        
        if(skipSet) return true
        else {
            previousMonth = newMonth
            return newMonth
        }
    }
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content events'>
            <h2>Upcoming Events at FCC</h2>
            <ul>
                {#await getPageData('/data/events.json')}
                    <div class='loader'>
                        <img src='/icons/loading.svg' alt='loading content'>
                    </div>
                {:then events}
                    {#if events && events.length}
                        {#each events
                            .sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
                            .filter(event=> (new Date(event.date)).getTime() > Date.now())
                         as event, i}
                            {#if changeEventMonth(event, true)}
                                <h3>{changeEventMonth(event, false)}</h3>
                            {/if}
                            <li>
                                <div class="overflow-box">
                                    <strong>{event.name}</strong> - {new Date(event.date).toLocaleString('en-US', { dateStyle: "short", timeStyle: "short", timeZone: 'America/Chicago' })}
                                </div>
                                <div class='overflow-box'>
                                    {@html event.description}
                                </div>
                                <div class="right-align event-links">
                                    <a href="#singleevent/{i}">View event</a> | 
                                    <a href="#events/{i}" on:click|preventDefault={()=>{ openCalendarModal(event) }}>Add to calendar</a>
                                </div>
                            </li>
                        {/each}
                    {:else}
                        <li>No events found.</li>
                    {/if}
                {/await}
            </ul>
        </div>
    </div>
</div>

<!-- Calendar Modal -->
{#if calendarModalOpen && curEvent}
    <CalendarModal {curEvent} bind:calendarModalOpen/>
{/if}