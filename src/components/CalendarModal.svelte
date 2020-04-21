<script>
    import {onMount} from 'svelte'
    import {fade, scale} from 'svelte/transition'

    export let curEvent, calendarModalOpen
    let googleCalendarLink, yahooCalendarLink, icsFile

    onMount(()=> {
        let today = new Date(Date.now())
        let startDate = new Date(curEvent.date).toISOString().replace(/(.000|-|:)/g, "")
        let endDate = new Date(curEvent.date)
        endDate.setMinutes(endDate.getMinutes() + curEvent.duration)
        endDate = endDate.toISOString().replace(/(.000|-|:)/g, "")

        let googleFormattedDates = startDate + '%2F' + endDate

        googleCalendarLink = `https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&text=` + curEvent.name + `&details=` + curEvent.description + `&dates=` + googleFormattedDates + `&location=` + curEvent.location
        yahooCalendarLink = 'https://calendar.yahoo.com/?v=60&view=d&type=20&title=' + curEvent.name + '&st=' + startDate + '&dur=' + curEvent.duration + '&desc=' + curEvent.description + '&in_loc=' + curEvent.location + "&uid="
        // outlookCalendarLink = 'https://outlook.live.com/owa/?path=%2fcalendar%2Faction%2Fcompose&rru=addevent&startdt=' + startDate + '&enddt=' + endDate + '&subject=' + curEvent.name + '&body=' + curEvent.description + '&location=' + curEvent.location

        icsFile = `BEGIN:VCALENDAR
            VERSION:2.0
            CALSCALE:GREGORIAN
            BEGIN:VTIMEZONE
            TZID:America/Chicago
            TZURL:http://tzurl.org/zoneinfo-outlook/America/Chicago
            X-LIC-LOCATION:America/Chicago
            BEGIN:DAYLIGHT
            TZOFFSETFROM:-0600
            TZOFFSETTO:-0500
            TZNAME:CDT
            DTSTART:19700308T020000
            RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
            END:DAYLIGHT
            BEGIN:STANDARD
            TZOFFSETFROM:-0500
            TZOFFSETTO:-0600
            TZNAME:CST
            DTSTART:19701101T020000
            RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
            END:STANDARD
            END:VTIMEZONE
            BEGIN:VEVENT
            DTSTAMP:${today.toISOString().replace(/(.000|-|:)/g, "")}
            UID:20200420T174139Z-1007770359@marudot.com
            DTSTART;TZID=America/Chicago:${startDate}
            DTEND;TZID=America/Chicago:${endDate}
            SUMMARY:${curEvent.name}
            DESCRIPTION:${curEvent.description}
            LOCATION:${curEvent.location}
            BEGIN:VALARM
            ACTION:DISPLAY
            DESCRIPTION:${curEvent.description}
            TRIGGER:-PT15M
            END:VALARM
            END:VEVENT
            END:VCALENDAR
        `
        icsFile = 'data:text/calendar;charset=utf8,' + encodeURI(icsFile.replace(/^(\t| )+/gm, ""))

    })
</script>

<div class='modal' transition:fade>
    <div class="inner wider" transition:scale>
        <div class="close" on:click={()=>{ calendarModalOpen = false }}>&times;</div>
        <h3>Add "{curEvent.name}" to your calendar</h3>
        <div class="calendar-options">
            <a download={curEvent.name.replace(/[\\ \/:\*\?\"<>\|]/g, "") + '.ics'} class="device-calendar" target="_blank" on:click={()=>{ calendarModalOpen = false }} href={icsFile}>
                <img src="/icons/calendar.jpg" alt="device calendar logo">
                Device Calendar
            </a>
            <a target="_blank" on:click={()=>{ calendarModalOpen = false }} href={googleCalendarLink}>
                <img src="/icons/google.png" alt="Google calendar logo">
                Google Calendar
            </a>
            <a target="_blank" on:click={()=>{ calendarModalOpen = false }} href={yahooCalendarLink}>
                <img src="/icons/yahoo.jpg" alt="Yahoo calendar logo">
                Yahoo! Calendar
            </a>
            <!-- <a target="_blank" href={outlookCalendarLink}>Outlook Calendar</a> -->
        </div>
        <p class='small'>Choose <strong>Device Calendar</strong> if you are using a calendar installed on your computer or mobile device&mdash;you will need to open the downloaded calendar file. Choose either <strong>Google</strong> or <strong>Yahoo! Calendar</strong> to add an event to the selected online calendar service.</p>
    </div>
</div>

<style lang='scss'>

    @import '../style/variables.scss';

    .calendar-options {
        display: flex;
        max-width: 40em;
        margin: 1em auto;
        justify-content: center;
        flex-wrap: wrap;
        max-height: 30vh;
        overflow-y: auto;
        
        @media screen and (min-width: 800px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1em;
            align-items: stretch;
            justify-content: auto;
        }

        a {
            text-align: center;
            padding: 1em;
            border-style: solid;
            border-color: $lightgray;
            border-width: 2px;
            margin: 1em;

            &:hover {
                border-color: $red;
                filter: brightness(1.2);
                cursor: pointer;
                box-shadow: $box-shadow;
                color: $red;
            }
        }

        img{
            height: 3em;
            margin: 0 auto 1em auto;
            display: block;
        }
    }

</style>