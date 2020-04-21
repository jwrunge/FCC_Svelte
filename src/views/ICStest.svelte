<script>
    import {flyModified} from '../flyModified.js'
    
    let event = `
        BEGIN:VCALENDAR
        VERSION:2.0
        PRODID:-//ZContent.net//Zap Calendar 1.0//EN
        CALSCALE:GREGORIAN
        METHOD:PUBLISH
        BEGIN:VEVENT
        SUMMARY:Abraham Lincoln
        UID:c7614cff-3549-4a00-9152-d25cc1fe077d
        SEQUENCE:0
        STATUS:CONFIRMED
        TRANSP:TRANSPARENT
        RRULE:FREQ=YEARLY;INTERVAL=1;BYMONTH=2;BYMONTHDAY=12
        DTSTART:1586728800
        DTEND:1586732400
        DTSTAMP:20150421T141403
        CATEGORIES:U.S. Presidents,Civil War People
        LOCATION:Hodgenville\, Kentucky
        GEO:37.5739497;-85.7399606
        DESCRIPTION:Born February 12\, 1809\nSixteenth President (1861-1865)\n\n\n
        \nhttp://AmericanHistoryCalendar.com
        URL:http://americanhistorycalendar.com/peoplecalendar/1,328-abraham-lincol
        n
        END:VEVENT
        END:VCALENDAR
    `
</script>

<div class="page" in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
    <div class="content">
        <h1>Test ICS</h1>
        {#if event}
            <a href='myevents.ics'>Demo ICS</a>
        {/if}
    </div>
</div>