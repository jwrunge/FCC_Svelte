<script>
    import {fly, fade, scale} from 'svelte/transition'
    import {onMount} from 'svelte'

    //Components
    import Navigation from './components/Navigation.svelte'
    import Slideshow from './components/Slideshow.svelte'
    import LeftAngle from './components/LeftAngle.svelte'
    import LoveBox from './components/LoveBox.svelte'
    import CalendarModal from './components/CalendarModal.svelte'

    //Views
    import Worship from './views/Worship.svelte'
    import Learn from './views/Learn.svelte'
    import About from './views/About.svelte'
    import Resources from './views/Resources.svelte'
    import Staff from './views/Staff.svelte'
    import Links from './views/Links.svelte'
    import Sermons from './views/Sermons.svelte'
    import Newsletters from './views/Newsletters.svelte'
    import AllEvents from './views/AllEvents.svelte'
    import SingleEvent from './views/SingleEvent.svelte'
    import Article from './views/Article.svelte'

    //Variables
    let main
    let header
    let eventsImage
    let loveImage
    let infoboxImage

    //Calendar modal data
    let calendarModalOpen = false
    let curEvent

    //Scroll positions
    let scrollTop = 0
    let eventsTop = 0
    let loveTop = 0
    let infoTop = 0

    let months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    let mobileOpen = false
    
    //Hash routing
    let page = {
        "#": false,
        "": false,
        "#home": false,
        '#worship': Worship,
        "#learn": Learn,
        '#about': About,
        '#resources': Resources,
        '#staff': Staff,
        "#links": Links,
        "#sermons": Sermons,
        "#newsletters": Newsletters,
        "#allevents": AllEvents,
        "#singleevent": SingleEvent,
        "#article": Article,
    }
    let curPage = ""

    function getPageData(loc) {
        return new Promise((resolve, reject)=> {
            fetch(loc)
                .then(res=> res.json())
                .then(json=> resolve(json))
                .catch(err=> {
                    reject(err)
                    console.log(err)
                })
        })
    }

    function showAllEvents(events) {
        allEvents = events
        allEventsModalOpen = true
    }

    function openCalendarModal(event) {
        curEvent = event
        calendarModalOpen = true
    }

    window.onhashchange = ()=>{
        if(Object.keys(page).includes(window.location.hash.split('/')[0])) {
            curPage = window.location.hash.split('/')[0]
            mobileOpen = false
        }
        else {
            setTimeout(()=>{ window.location.hash = curPage }, 1000)
        }
    }

    onMount(()=> {
        if(Object.keys(page).includes(window.location.hash.split('/')[0]))
            curPage = window.location.hash.split('/')[0]
        else window.location.hash = curPage

        main.addEventListener('scroll', (e)=>{
            scrollTop = e.target.scrollTop
            eventsTop = eventsImage.getBoundingClientRect().top
            loveTop = loveImage.getBoundingClientRect().top
            infoTop = infoboxImage.getBoundingClientRect().top
        })
    })

    $: subpageOpen = curPage && curPage != '#home' ? true : false

</script>

<div class="main" bind:this={main}>
    <!-- Nav (main screen) -->
    <Navigation bind:mobileOpen {scrollTop} {subpageOpen} {main}/>
    
    <!-- Decorative angle, logo, and CTAs -->
    <div class="forefront-content">
        <!-- Decorative angle -->
        <LeftAngle/>
    
        <!-- Logo, name, and contact links -->
        <div class="header" bind:this={header}>
            <img src="/icons/chalice.svg" alt="Disciples of Christ chalice logo" class="primary-img">
            <div class="mobile-formatting-div">
                <div class="logo">
                    <img src="/icons/chalice.svg" alt="Disciples of Christ chalice logo" class="primary-img-mobile">
                    <span>
                        <h1>First Christian Church <span class="smaller">Disciples of Christ</span></h1>
                        <div>Galesburg, IL</div>
                    </span>
                </div>
        
                <div class="contact-links">
                    <div class='mt'>301 N Broad St, Galesburg, IL 61401</div>
                    <div>
                        <a target='_blank' href='tel:1-309-343-9960'>309.343.9960</a> | 
                        <a target='_blank' href='mailto:fccgalesburg@gmail.com'>Email us</a> | 
                        <a target='_blank' href='https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857'>Directions</a>
                    </div>
                </div>      
            </div>
        </div> <!-- End .header -->
    </div> <!-- End .forefront-content -->
    
    <!-- Decorative angle -->
    <div class="decorative-bottom-angle">
        <div class='inner'></div>
    </div>
    
    <!-- Background slideshow -->
    <Slideshow scrollTop={scrollTop} {subpageOpen} {header} {getPageData}/>
    
    <!-- Information box -->
    <div class="infobox">
        <img bind:this={infoboxImage} class='bg' src="/primary-images/worshipservice.jpg" alt="" style={"transform: translateY(-25%) translateY(" + infoTop/5 + "px);"}>
        <div class="worship-times">
            <h3>Sunday Worship</h3>
            <div>Contemporary: 8:30am</div>
            <div>Traditional: 11am</div>
            <hr>
            <div class='ss-classes'>All-ages Sunday School Classes: 9:30am</div>
        </div>
        <a id='giveonline' target='_blank' style='display: none' href="https://tithe.ly/give?c=1478951">Give online</a>
        <button on:click={()=>{ document.getElementById('giveonline').click() }} class='red'>Give Online</button>
        <button on:click={()=>{ window.location.hash = "#events" }}>Get Involved</button>
    </div>
    
    <!-- Frontpage content -->
    <div class="frontpage-content" style="transform: translateY(100vh)">
        <div class="content">
            <h2>What's going on now at FCC Galesburg?</h2>
            <div class='current-events'>
                <img alt='Participating in Be The Church Sunday' src='/primary-images/bethechurchpic.jpg'>
                <h3>Sermon Series: "Love Comes to Town"</h3>
                <p>When love comes to town, lives are changed!</p>
                <p>We are called to share the love of Christ with our neighbors and our family and yes, even our enemies! Throughout August and September, we will be going through I Corinthians 13 during our sermon series and discovering more about sharing the love of God.</p>
                <p>Upcoming sermons include:</p>
                <ul>
                    <li>September 1 - Triggered (Dealing with Anger)</li>
                    <li>September 8 - Like a Good Neighbor (Be the Church Sunday)</li>
                    <li>September 15 - Love Everlasting (Worship in the Park)</li>
                </ul>
            </div>

            {#await getPageData('/data/latestsermon.json')}
                <div class='loader'>
                    <img src='/icons/loading.svg' alt='loading content'>
                </div>
            {:then embed}
                {#if new Date(embed.date).getDate() >= new Date().getDate() - 7}
                    <div class="fp-video-container">
                        <h2>{embed.title}</h2>
                        <div class="embed-container">
                            <iframe title={embed.title} src={embed.src} width="560" height="487" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                {/if}
            {/await}
        </div>
    
        <div class='events' id="events">
            <img bind:this={eventsImage} class='bg' src="/primary-images/church.jpg" alt="" style={"transform: translateY(-25%) translateY(" + eventsTop/5 + "px);"}>
            <div class="inner">
                <h2>Upcoming Events at FCC</h2>
                <ul>
                    {#await getPageData('/data/events.json')}
                        <div class='loader'>
                            <img src='/icons/loading.svg' alt='loading content'>
                        </div>
                    {:then events}
                        {#if events && events.length}
                            {#each events.slice(0, 5) as event, i}
                                {#if i == 0 || new Date(event.date).getMonth() != new Date(events[i-1].date).getMonth()}
                                    <h3>{months[new Date(event.date).getMonth()]}</h3>
                                {/if}
                                <li>
                                    <div class="overflow-box">
                                        <strong>{event.name}</strong> - {new Date(event.date).toLocaleString('en-US', { dateStyle: "short", timeStyle: "short", timeZone: 'America/Chicago' })}
                                    </div>
                                    <div class='overflow-box'>
                                        {event.description}
                                    </div>
                                    <div class="right-align event-links">
                                        <a href="#singleevent/{i}">View event</a> | 
                                        <a href="#events/i" on:click|preventDefault={()=>{ openCalendarModal(event) }}>Add to calendar</a>
                                    </div>
                                </li>
                            {/each}

                            {#if events.length > 5}
                                <div class="centered eventBtn">
                                    <a href="#allevents">Show all {events.length} events</a>
                                </div>
                            {/if}
                        {:else}
                            <li>No events found.</li>
                        {/if}
                    {/await}
                </ul>
            </div>
        </div>
    
        <div class='quicklinks'>
            <div class="inner">
                <a href="#staff"><img src='/icons/staff.svg' alt='Staff'><span class='linklabel'><span class='inner'>Staff</span></span></a>
                <a href="#sermons"><img src='/icons/sermons.svg' alt='Sermons'><span class='linklabel'><span class='inner'>Sermons</span></span></a>
                <a href="#newsletters"><img src='/icons/newsletters.svg' alt='Newsletters'><span class='linklabel'><span class='inner'>Newsletters</span></span></a>
                <a href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/' target="_blank"><img src='/icons/facebooklogo.svg' alt='Facebook'><span class='linklabel'><span class='inner'>Facebook</span></span></a>
            </div>
        </div>
    
        <LoveBox {loveTop} {getPageData} bind:loveImage/>
    
        <div class='footer'>
            <div class='copy'>&copy; {new Date().getFullYear()} First Christian Church, Disciples of Christ - Galesburg, IL</div>
            <div>Site design by <a target='_blank' href='http://jacobrunge.com'>Jacob Runge</a></div>
        </div>
    </div> <!-- Frontpage content -->
</div>

<!-- Subpage content -->
{#if subpageOpen}
    <div class='subpage' transition:fade>
        <svelte:component this={page[curPage]} {getPageData}>
            <Navigation bind:mobileOpen {subpageOpen} subpageStyle={true} {scrollTop} {main}/>
        </svelte:component>
    </div>
{/if}

<!-- Calendar Modal -->
{#if calendarModalOpen && curEvent}
    <CalendarModal {curEvent} bind:calendarModalOpen/>
{/if}

<style lang='scss'>
    @import 'style/variables.scss';

    //Header and other info over the top of the slideshow
    .forefront-content {
        position: relative;
        z-index: 2;
        
        @media #{$notMobile} {
            position: absolute;
            top: 0;
            width: 30%;
        }

        .primary-img {
            display: none;

            @media #{$notMobile} {
                display: block;
                height: 25vh;
                max-height: 15em;
                margin: 0 1.5em 0 0;
            }
        }

        .primary-img-mobile {
            height: 4em;
            margin: 0 1em .5em 0;

            @media #{$notMobile} {
                display: none;
            }
        }
    }

    .header {
        position: absolute;
        top: 0; left: 0; width: 100%;
        color: black;
        padding: .5em;
        background-color: white;
        box-shadow: $box-shadow;

        display: flex;
        align-items: center;
        justify-content: center;

        text-shadow: -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff;

        .logo {
            display: flex;
            align-items: center;
        }

        .contact-links {
            text-align: center;
        }

        h1 {
            font-size: 1.4em;
            color: $red;
            margin: 0;
            padding: 0;
            .smaller { font-size: .7em; display: block; }
        }

        .mobile-formatting-div {
            display: block;
        }

        @media screen and (min-width: 750px) {
            display: block;

            .mobile-formatting-div {
                display: flex; 
                justify-content: space-around;
            }
        }

        @media #{$notMobile} {
            position: relative;
            width: auto;
            margin-left: 1em;
            display: flex;
            text-align: left;
            background-color: transparent;
            box-shadow: none;
            padding: 0 1em 0 0;
            position: absolute;
            top: 5vh;
            height: 30vh;
            left: 0;

            h1 { white-space: nowrap; font-size: 1.8em; }

            .contact-links {
                text-align: left;
            }

            .mobile-formatting-div {
                display: block;
            }
        }
    }

    .decorative-bottom-angle {
        display: none;

        @media #{$notMobile} {
            display: block;
            width: 100%;
            position: absolute;
            height: 3em;
            bottom: -2px;
            left: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;

            .inner {
                height: 3em;
                transform: skewY(1.5deg);
                position: relative;
                top: 50%;
                background-color: white;
            }
        }
    }

    // Information box
    .infobox {
        img.bg {
            object-position: 100% 50%;
        }

        overflow: hidden;
        transform: translateY(98vh);
        background: $lightgray;
        background: linear-gradient($lightgray, darken($lightgray, 10%));        padding: 3em 0 6em 0;
        background-color: ligthen($lightblue, 25%);
        text-align: center;
        clip-path: polygon(
            0 0,
            100% .6em,
            100% calc(100% - .6em),
            0 100%
        );
        font-size: 1.2em;

        hr {
            width: 70%;
            border: none;
            background-color: black;
            height: .5px;
        }

        @media #{$notMobile} {
            clip-path: none;
            background: none;
            transform: none;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 25%;
            height: 57vh;
            padding: 1em;
            z-index: 2;

            img.bg { display: none; }
        }

        .worship-times {          
            h3 {
                color: $red;
                font-size: 2.25em;
                margin-bottom: .5em;

                @media screen and (max-width: 400px) {
                    font-size: 2em;
                }
            }

            padding: 1em;

            @media #{$notMobile} {
                display: inline-block;
                width: auto;
                margin: 0 auto 0 auto;
                text-shadow: -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff;
                
                h3 {
                    color: $gray;
                    font-size: 1.5em;
                    margin: 0;
                }
            }
        }
    }

    //Front page content
    .frontpage-content {
        position: relative;
        background-color: white;

        .content {
            margin: 0 auto;
            padding: 5em 1em 3em 1em;
            max-width: 90%;
            width: 45em;

            h2 { 
                margin-top: 0; 
            }

            @media #{$notMobile} {
                margin: 0 20% 0 auto;
                padding: 2em 0 3em 0;
            }

            .current-events {
                img {
                    display: block;
                    max-width: 100%;
                    max-height: 50vh;
                    margin: 0 auto 2em auto;

                    @media #{$notMobile} {
                        max-width: 50%;
                        float: right;
                        margin: 0 1em 1em 1em;
                    }
                }
            }
        }
    }

    .events {
        background: $lightgray;
        background: linear-gradient($lightgray, darken($lightgray, 10%));
        transform: skewY(1.5deg) translateY(3em);
        padding: 3em 0 6em 0;
        overflow: hidden;

        h2 {
            color: $red;
            margin: 0;
            margin-bottom: .5em;
            font-size: 3em;

            @media screen and (max-width: 400px) {
                font-size: 2em;
            }
        }

        h3 {
            margin-bottom: .25em;
            margin-top: .5em;
            font-size: 1.5em;
            color: $darkblue;
        }

        img.bg {
            object-position: 25% 50%;
        }
    }

    .events > .inner {
        max-width: 90%;
        width: 50em;
        margin: 5em auto 5em auto;
        transform: skewY(-1.5deg);
    }

    .fp-video-container {
        margin-top: 4em;
        h2 { margin-bottom: .5em; }
    }

    //Quick links
    .quicklinks {
        background: $lightblue;
        background: linear-gradient($lightblue, darken($lightblue, 10%));
        transform: skewY(-1.5deg);
        padding: 3em 0 6em 0;
        border-width: 1px;
        border-top-style: solid;
        border-color: darken($lightblue, 10%);
    }

    .quicklinks > .inner {
        max-width: 45em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 5em auto 5em auto;
        align-items: center;
        justify-items: center;
        transform: skewY(1.5deg);

        @media screen and (min-width: 700px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        img {
            max-width: 5em;
            margin: 1em 1em;
            transition: transform .3s ease-in-out;

            @media #{$notMobile} {
                max-width: 8em;
            }
        }

        a { 
            position: relative; 
            color: $darkblue; 
            
            &:hover {

                img {
                    filter: brightness(1.2);
                    transform: scale(1.1);
                }
            }
        }

        .linklabel {
            display: block;
            margin: 0 auto 2em auto;
            text-align: center;
            text-decoration: none;
            font-weight: bold;
        }
    }

    .footer {
        padding: 3em 0 6em 0;
        text-align: center;

        .copy {
            font-size: 1.2em;
            margin-bottom: .4em;
        }
    }

    .modal .inner.wider {
        max-width: 90%;
        width: 60em;
    }
</style>