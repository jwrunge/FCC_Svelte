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
    import Worship from './views/Sermons.svelte'
    import Ministries from './views/Ministries.svelte'
    import About from './views/About.svelte'
    import Staff from './views/Staff.svelte'
    import Links from './views/Links.svelte'
    import Sermons from './views/Sermons.svelte'
    import Newsletters from './views/Newsletters.svelte'
    import AllEvents from './views/AllEvents.svelte'
    import SingleEvent from './views/SingleEvent.svelte'
    import Article from './views/Article.svelte'

    //Specials
    import Starwords from './specials/Starwords.svelte'

    //Variables
    let main
    let header
    let eventsImage
    let loveImage
    let infoboxImage
    let angle
    let navheight = 0
    let latestVid

    //Calendar modal data
    let calendarModalOpen = false
    let curEvent

    //Scroll positions
    let scrollTop = 0
    let eventsTop = 0
    let loveTop = 0
    // let infoTop = 0
    let angleTop = 0

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
        '#about': About,
        '#staff': Staff,
        "#links": Links,
        "#newsletters": Newsletters,
        "#allevents": AllEvents,
        "#singleevent": SingleEvent,
        "#article": Article,
        "#sermons": Sermons,
        "#ministries": Ministries
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

    let frontpage = null
    function get_frontpage() {
        fetch("data/frontpage.json")
        .then(res=> res.json())
        .then(data=> frontpage = data)
        .catch(e=> {
            console.error(e)
            frontpage = null
        })
    }

    onMount(()=> {
        if(Object.keys(page).includes(window.location.hash.split('/')[0]))
            curPage = window.location.hash.split('/')[0]
        else window.location.hash = curPage

        main.addEventListener('scroll', (e)=>{
            scrollTop = e.target.scrollTop
            eventsTop = eventsImage.getBoundingClientRect().top
            loveTop = loveImage.getBoundingClientRect().top
            // infoTop = infoboxImage.getBoundingClientRect().top
        })

        navheight = document.querySelector('nav').offsetHeight

        fetch('data/php/getSermons.php?start=0&end=1&direction=desc')
        .then(data=> data.json())
        .then(video=> {
            latestVid = JSON.parse(video.results[0])
            console.log(latestVid)
        })
        .catch(e=> {
            console.log(e)
        })

        get_frontpage()
    })

    $: subpageOpen = curPage && curPage != '#home' ? true : false
</script>

<div class="main" bind:this={main}>
    <!-- Nav (main screen) -->
    <Navigation bind:mobileOpen bind:curPage {scrollTop} {subpageOpen} {main}/>
    
    <!-- Decorative angle, logo, and CTAs -->
    <div class="forefront-content">
        <!-- Decorative angle -->
        <!-- <LeftAngle/> -->
        <div class="accent-angle"></div>
    
        <!-- Logo, name, and contact links -->
        <div class="header" bind:this={header}>
            <img src="/icons/chalice.svg" alt="Disciples of Christ chalice logo" class="primary-img">
            <div class="mobile-formatting-div">
                <div class="logo">
                    <img src="/icons/chalice.svg" alt="Disciples of Christ chalice logo" class="primary-img-mobile">
                    <span>
                        <h1>First Christian Church <span class="smaller">(Disciples of Christ)</span></h1>
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
        <!-- <img bind:this={infoboxImage} class='bg' src="/primary-images/worshipservice.jpg" alt="" style={"transform: translateY(-25%) translateY(" + infoTop/5 + "px);"}> -->
        <div class="worship-times">
            <h3>Sunday Worship</h3>
            <div>Gathering Sundays at 10am<br/>or <a href="#worship">worship with us online!</a></div>
            <!-- <hr>
            <div>Worshipping outside Sundays at 9:30am, weather permitting... <a href="#sermons">or join us online!</a></div> -->
            <!-- <div>Contemporary: 8:30am</div>
            <div>Traditional: 11am</div>
            <hr>
            <div class='ss-classes'>All-ages Sunday School: 9:30am</div> -->
        </div>
        <!-- <a id='giveonline' target='_blank' style='display: none' href="https://tithe.ly/give?c=1478951">Give online</a>
            <button class='givebutton' on:click={()=>{ document.getElementById('giveonline').click() }}><img src='icons/tithely.svg' alt='tithely logo'><br>Give Online Securely</button>
        <a class='no-underline' href="#current"><button class='not-mobile'>Learn More</button></a> -->
        <div class='quicklinks'>
            <div class="inner">
                <a href="#sermons"><img src='/icons/round/sermons.svg' alt='Sermons'><span class='linklabel'><span class='inner'>Sermons</span></span></a>
                <a style="color: #0053a0;" href="#allevents"><img src='/icons/round/events.svg' alt='Events'><span class='linklabel'><span class='inner'>Events</span></span></a>
                <a style="color: #1e7953;" href="#newsletters"><img src='/icons/round/newsletters.svg' alt='Newsletters'><span class='linklabel'><span class='inner'>Newsletters</span></span></a>
                <a style="color: #ad8559;" href="#staff"><img src='/icons/round/staff.svg' alt='Staff'><span class='linklabel'><span class='inner'>Staff</span></span></a>
                <a style="color: #1e7953;" target="_blank" href="https://tithe.ly/give?c=1478951"><img src='/icons/round/tithely.svg' alt='Give online'><span class='linklabel'><span class='inner'>Tithe.ly</span></span></a>
                <a style="color: #2D88FF;" target="_blank" href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/'><img src='/icons/round/facebooklogo.svg' alt='Facebook'><span class='linklabel'><span class='inner'>Facebook</span></span></a>
            </div>
        </div>
    </div>
    
    <!-- Frontpage content -->
    <div class="frontpage-content" style="transform: translateY(100vh); top: -{navheight}px;">
        <div class="content" id='current'>
            <div class="inner" class:grid={latestVid && new Date(latestVid.date).getDate() >= new Date().getDate() - 14}>
                <div class="box">
                    <h2>What's going on now at FCC Galesburg?</h2>
                    <div class='current-events'>
                        {#if frontpage && frontpage.file}
                            <img class="float" alt='' src='{frontpage.file}'>
                        {/if}
                        <h3>{frontpage ? frontpage.header : "Spreading the Love of God"}</h3>
                        {#if frontpage && frontpage.content}
                            {frontpage.content}
                        {:else}
                            <p><strong>Our Identity</strong> We are Disciples of Christ, a movement for wholeness in a fragmented world. As part of the one body of Christ, we welcome all to the Lord’s Table as God has welcomed us.</p>
                            <p><strong>Our Vision</strong> To be a faithful, growing church, that demonstrates true community, deep Christian spirituality and a passion for justice. <em>- Micah 6:8</em></p>
                            <p><strong>Our Mission</strong> To be and to share the Good News of Jesus Christ, witnessing, loving and serving from our doorsteps "to the ends of the earth." <em>- Acts 1:8</em> And as First Christian in Galesburg, our mission is Growing Spirit-filled, committed disciples of Christ.</p>
                        {/if}
                    </div>
                    <!-- <div class='current-events'>
                        <img class="float" alt='"Transformed" sermon series' src='/uploads/events/transformed.jpg'>
                        <h3>Transformed</h3>
                        <p>Based on Romans 12:2, this series will look at the health of our body, mind, and spirit – and the transforming power of Jesus Christ. It is said that 40% of US Adults have reported dissatisfaction with their mental & emotional well-being due to the pandemic. People are hurting for many reasons... and it is so important for us all to know that God has a plan to transform us in every area of our lives, for His glory.</p>
                        <p>Be sure to contact <a href="#staff">Pastor MJ</a> if you are interested in materials for the accompanying study for families and small groups!</p>
                    </div> -->
                </div>
    
                {#if latestVid}
                    {#if new Date(latestVid.date).getDate() >= new Date().getDate() - 14}
                        <div class="fp-video-container">
                            <h2>{latestVid.title}</h2>
                            <div class="embed-container">
                                {#if latestVid.type && latestVid.type == "onsite"}
                                    <video controls poster={latestVid.poster}>
                                        <source src={latestVid.src} type="video/mp4">
                                    </video>
                                {:else}
                                    <iframe title={latestVid.title} src={latestVid.src} width="560" height="487" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
                                {/if}
                            </div>
                        </div>
                    {/if}
                {/if}
            </div>
            <!-- <div class="inner wider mt">
                <div class="box">
                    <div class="current-events">
                        <div>
                            <h3>Epiphany Star Words</h3>
                            <p>Epiphany begins on January 6. This is the day we celebrate the wise men from the East following a star to see the baby Jesus in Bethlehem. Each year we ourselves randomly select a star with a word on it and use that word as a source of prayer and meditation for the year ahead. Just like the wise men, we are invited to follow our individual star and open our hearts and minds to see where it takes us in 2021. May God inspire and bless us as we journey with Him, following the star!</p>
                            <p>Click on the star to have a word generated for you. You may also go to <a target="_blank" href="http://dayspring.com/yourwordquiz#/home">Dayspring</a> and answer 7 questions to find your 2021 word for the year.</p>
                        </div>
                        <div>
                            <Starwords/>
                        </div>
                    </div>
                </div>
            </div> -->
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
                        {#if events && (events.sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
                                .filter(event=> (new Date(event.date)).getTime() > Date.now())
                                .slice(0, 5)).length > 0}
                            {#each events
                                .sort((a, b)=> (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
                                .filter(event=> (new Date(event.date)).getTime() > Date.now())
                                .slice(0, 5)
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

                            {#if events.length > 5}
                                <div class="centered eventBtn">
                                    <a href="#allevents">Show all events</a>
                                </div>
                            {/if}
                        {:else}
                            <li>No events found.</li>
                        {/if}
                    {/await}
                </ul>
            </div>
        </div>
    
        <!-- <div class='section quicklinks'>
            <div class="inner">
                <a href="#staff"><img src='/icons/staff.svg' alt='Staff'><span class='linklabel'><span class='inner'>Staff</span></span></a>
                <a href="#sermons"><img src='/icons/sermons.svg' alt='Sermons'><span class='linklabel'><span class='inner'>Sermons</span></span></a>
                <a href="#newsletters"><img src='/icons/newsletters.svg' alt='Newsletters'><span class='linklabel'><span class='inner'>Newsletters</span></span></a>
                <a href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/' target="_blank"><img src='/icons/facebooklogo.svg' alt='Facebook'><span class='linklabel'><span class='inner'>Facebook</span></span></a>
            </div>
        </div> -->
    
        <LoveBox {loveTop} {getPageData} bind:loveImage/>
    
        <div class='footer'>
            <div class='copy'>&copy; {new Date().getFullYear()} First Christian Church (Disciples of Christ) - Galesburg, IL</div>
        </div>
    </div> <!-- Frontpage content -->
</div>

<!-- Subpage content -->
{#if subpageOpen}
    <div class='subpage' transition:fade>
        <svelte:component this={page[curPage]} {getPageData}>
            <div on:click={()=> window.history.back()} href="#home" class="back-arrow"><img src="/icons/back.svg" alt="Back to main page"></div>
            <Navigation bind:mobileOpen bind:curPage {subpageOpen} subpageStyle={true} {scrollTop} {main}/>
        </svelte:component>
    </div>
{/if}

<!-- Calendar Modal -->
{#if calendarModalOpen && curEvent}
    <CalendarModal {curEvent} bind:calendarModalOpen/>
{/if}

<style lang='scss'>
    @import 'style/variables.scss';

    .side-by-side {
        @media #{$notMobile} {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
    }

    .givebutton {
        background-color: rgb(0, 155, 0);
        img {
            max-width: 8em;
            margin-bottom: .5em;
        }
    }

    button {
        min-width: 12em;
    }

    .not-mobile {
        display: none;
        @media #{$notMobile} {
            display: block;
        }
    }

    //Header and other info over the top of the slideshow
    .forefront-content {
        position: relative;
        z-index: 2;

        .accent-angle { display: none; }
        
        @media #{$notMobile} {
            position: absolute;
            top: 0;
            height: 100vh;
            width: 35vw;
            background-color: white;   
            border-right: 7px solid $red;
            transform: skewX(-5deg);
            left: -13vw;
            padding-left: 10vw;
            box-shadow: $box-shadow;
            overflow: hidden;

            .header { transform: skewX(5deg); }

            .accent-angle {
                display: block;
                background-color: lighten($accent-color, 8%);
                transform: skewY(-10deg);
                width: 50vw;
                height: 50vh;
                position: absolute;
                bottom: -5vh;
                left: -5vw;
            }
        }

        .primary-img {
            display: none;

            @media #{$notMobile} {
                display: block;
                height: 25vh;
                max-height: 7em;
                margin: 0 1em;
            }

            @media #{$notMobile} and (max-width: 1300px) {
                max-height: 6em;
            }
        }

        .primary-img-mobile {
            height: 4em;
            margin: 0 1em .5em 0;

            @media screen and (max-width: 500px) {
                max-height: 2.2em;
                margin-bottom: 0;
            }

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
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;

        text-shadow: -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff;

        a {
            color: $red;
            &:visited { color: $red; }
            &:hover { color: lighten($red, 25%); }
        }

        .logo {
            display: flex;
            align-items: center;
        }

        .contact-links {
            text-align: center;
            @media screen and (max-width: 500px) {
                font-size: .8em;
            }
        }

        h1 {
            font-size: 1.4em;
            color: $red;
            margin: 0;
            padding: 0;
            .smaller { font-size: .7em; display: block; }

            @media screen and (max-width: 500px) {
               font-size: 1em;

               .smaller { font-size: 1em; }
            }
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
            width: 90%;
            display: flex;
            text-align: left;
            background-color: transparent;
            box-shadow: none;
            padding: 0;
            height: 30vh;
            margin: 5vh auto;

            h1 { white-space: nowrap; font-size: 1.5em; }

            .contact-links {
                text-align: left;
                font-size: .9em;
            }

            .mobile-formatting-div {
                display: block;
                margin-left: .5em;
            }
        }

        @media #{$notMobile} and (max-width: 1300px) {
            h1 { font-size: 1.2em; }

            .contact-links {
                font-size: .8em;
                white-space: nowrap;
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
            bottom: -4px;
            left: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 2;

            .inner {
                height: 3em;
                transform: skewY(1.5deg);
                position: relative;
                top: 50%;
                background-color: $lightblue;
                box-shadow: $box-shadow;
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
        background: radial-gradient(white, $lightgray);
        padding: 3em 0 6em 0;
        text-align: center;
        font-size: 1.1em;

        hr {
            width: 70%;
            border: none;
            background-color: black;
            height: .5px;
        }

        @media #{$notMobile} and (max-width: 1300px) {
            font-size: 1em;
        }

        @media #{$notMobile} {
            overflow: visible;
            clip-path: none;
            background: none;
            transform: none;
            display: block;
            position: absolute;
            bottom: 5vh;
            left: 0;
            height: 57vh;
            padding: 1em;
            z-index: 2;
            box-sizing: border-box;

            width: 30vw;
            margin-bottom: 2em;

            img.bg { display: none; }
        }

        .worship-times {          
            h3 {
                margin-top: .5em;
                color: $red;
                font-size: 2.25em;
                margin-bottom: .5em;

                @media screen and (max-width: 400px) {
                    font-size: 2em;
                }
            }

            padding: 0 0 1em 0;

            @media #{$notMobile} {
                display: inline-block;
                width: 75%;
                margin: 0 auto 0 auto;
                text-shadow: -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff;
                
                h3 {
                    color: $gray;
                    font-size: 1.25em;
                    margin: 0;
                    margin-bottom: .5em;
                }
            }

            @media #{$notMobile} and (max-width: 1300px) {
                padding: 1em 0;
                width: 100%;
            }
        }
    }

    //Front page content
    .frontpage-content {
        position: relative;

        background: $lightblue;
        @media #{$notMobile} {
            background: darken($lightblue, 10%);
        }

        .content {
            background: $lightblue;

            @media #{$notMobile} {
                background: linear-gradient($lightblue, darken($lightblue, 10%));
            }
        }

        .content .inner {
            margin: 0 auto;
            padding: 3em 1em 0 1em;
            max-width: 100%;
            width: 45em;
            box-sizing: border-box;

            &.wider {
                width: 60em;
            }

            @media screen and (max-width: 500px) {
                padding-left: 0;
                padding-right: 0;
            }

            .box {
                background: $lightblue;
                padding: 1em;

                @media #{$notMobile} {
                    background: rgba(255,255,255,.7);
                    border-radius: .1em;
                    margin: 1em 0;
                    padding: 1em;
                }
            }

            h2 { 
                margin-top: 0; 
            }

            @media #{$notMobile} {
                box-sizing: border-box;

                &.grid {
                    display: grid;
                    grid-gap: 2em;
                    width: auto;
                    grid-template-columns: 3fr 2fr;
                    align-items: center;
                }

                .fp-video-container {
                    h2 { 
                        color: white; 
                        margin-left: 1em;

                        @media #{$notMobile} {
                            margin-left: 0;
                        }
                    }
                    color: white;
                    margin-top: 1em;
                    margin-bottom: 1em;
                    background-color: rgba($darkblue, .7);
                    border-radius: .1em;
                    padding: 1em;
                    padding-bottom: 2em;
                    box-sizing: border-box;
                }
            }

            .current-events {
                img {
                    display: block;
                    max-width: 90%;
                    max-height: 50vh;
                    margin: 1em auto;
                }

                img.float {
                    max-width: 100%;
                    max-height: 15em;
                    margin: 0 auto 2em auto;

                    @media #{$notMobile} {
                        max-width: 50%;
                        float: right;
                        margin: 0 1em 1em 1em;

                        &.left {
                            float: left;
                        }
                    }
                }

                img.small {
                    max-width: 60%;
                }
            }
        }

        .inner + .inner {
            padding-top: 1em;
        }
    }

    .events {
        background: $lightgray;
        background: linear-gradient($lightgray, darken($lightgray, 10%));
        transform: skewY(-1.5deg) translateY(3em);
        padding: 0 0 6em 0;
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
        transform: skewY(1.5deg);
    }

    .fp-video-container {
        margin-left: 1em;
        margin-right: 1em;

        @media #{$notMobile} {
            margin-top: 4em;
        }

        h2 { margin-bottom: .5em; }
    }

    //Quick links
    // .section.quicklinks {
    //     background: $accent-color;
    //     background: radial-gradient(lighten($accent-color, 15%), $accent-color);//linear-gradient($lightblue, darken($lightblue, 10%));
    //     transform: skewY(-1.5deg);
    //     padding: 3em 0 6em 0;

    //     border-top: 1px solid darken($accent-color, 20%);
    // }

    // .section.quicklinks > .inner {
    //     max-width: 45em;
    //     display: grid;
    //     grid-template-columns: 1fr 1fr;
    //     margin: 5em auto 5em auto;
    //     align-items: center;
    //     justify-items: center;
    //     transform: skewY(1.5deg);

    //     @media screen and (min-width: 700px) {
    //         grid-template-columns: 1fr 1fr 1fr 1fr;
    //     }

    //     img {
    //         max-width: 5em;
    //         margin: 1em 1em;
    //         transition: transform .3s ease-in-out;

    //         @media #{$notMobile} {
    //             max-width: 8em;
    //         }
    //     }

    //     a { 
    //         position: relative; 
    //         color: $red; 
            
    //         &:hover {
    //             filter: brightness(1.2);

    //             img {
    //                 transform: scale(1.1);
    //             }
    //         }
    //     }

    //     .linklabel {
    //         display: block;
    //         margin: 0 auto 2em auto;
    //         text-align: center;
    //         text-decoration: none;
    //         font-weight: bold;
    //     }
    // }

    .footer {
        color: black;
        padding: 3em 0 8em 0;
        text-align: center;
        // background: darken($lightblue, 10%); //linear-gradient(darken($lightblue, 10%), darken($lightblue, 20%));

        @media #{$notMobile} {
            color: white;
            padding-bottom: 5em;
        }

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