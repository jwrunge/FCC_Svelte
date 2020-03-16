<script>
    import {fly, fade} from 'svelte/transition'

    //Components
    import Navigation from './components/Navigation.svelte'
    import Slideshow from './components/Slideshow.svelte'
    import LeftAngle from './components/LeftAngle.svelte'
    import LoveBox from './components/LoveBox.svelte'
    import Loader from './components/Loader.svelte'

    //Views
    import Worship from './views/Worship.svelte'
    import Learn from './views/Learn.svelte'
    import About from './views/About.svelte'
    import Resources from './views/Resources.svelte'
    import Staff from './views/Staff.svelte'
    import Links from './views/Links.svelte'

    //Variables
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
        "#links": Links
    }
    let curPage = ""

    window.onhashchange = ()=>{
        curPage = window.location.hash
    }

    $: subpageOpen = curPage && curPage != '#home' ? true : false

</script>

<!-- Hero banner (main screen) -->
<Navigation bind:mobileOpen/>

<!-- Decorative angle, logo, and CTAs -->
<div class="forefront-content">
    <!-- Decorative angle -->
    <LeftAngle/>

    <!-- Logo, name, and contact links -->
    <div class="header">
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
<Slideshow/>

<!-- Information box -->
<div class="infobox">
    <div class="worship-times">
        <h3>Sunday Worship</h3>
        <div>Contemporary: 8:30am</div>
        <div>Traditional: 11am</div>
        <hr>
        <div class='ss-classes'>All-ages Sunday School Classes: 9:30am</div>
    </div>
    <button>Donate Now</button>
    <button>Online Giving</button>
</div>

<!-- Frontpage content -->
<div class="frontpage-content">
    <div class="content">
        <h2>What's going on now at FCC Galesburg?</h2>
        <div class='current-events'>
            <img alt='Participating in Be The Church Sunday' src='/frontpage_images/bethechurchpic.jpg'>
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
    </div>

    <div class='quicklinks'>
        <div class="inner">
            <a href="#staff"><img src='/icons/staff.svg' alt='Staff'><span class='linklabel'><span class='inner'>Staff</span></span></a>
            <a href="#sermons"><img src='/icons/sermons.svg' alt='Sermons'><span class='linklabel'><span class='inner'>Sermons</span></span></a>
            <a href="#newsletters"><img src='/icons/newsletters.svg' alt='Newsletters'><span class='linklabel'><span class='inner'>Newsletters</span></span></a>
            <a href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/' target="_blank"><img src='/icons/facebooklogo.svg' alt='Facebook'><span class='linklabel'><span class='inner'>Facebook</span></span></a>
        </div>
    </div>

    <LoveBox/>

    <div class='footer'>
        <hr>
        <div class='copy'>&copy; {new Date().getFullYear()} First Christian Church, Disciples of Christ - Galesburg, IL</div>
        <div>Site design by <a target='_blank' href='http://jacobrunge.com'>Jacob Runge</a></div>
    </div>
</div> <!-- Frontpage content -->

<!-- Subpage content -->
{#if subpageOpen}
    <div class='subpage' transition:fade>
        <Navigation bind:mobileOpen={mobileOpen} subpageStyle={true}/>
        <svelte:component this={page[curPage]}/>
    </div>
{/if}

<!-- Loader screen -->
<Loader/>

<!-- Announcement modal -->
<div class='modal'>
    <div class="inner">
        <span class='centered' v-html='announcement'></span>
        <button>OK</button>
    </div>
</div>

<!-- Staff Bio -->
<div class='modal'>
    <div class="inner">
        
    </div>
</div>

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
        position: relative;
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
        width: 100%;
        position: absolute;
        height: 3em;
        bottom: 0;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;

        .inner {
            height: 3em;
            background-color: white;
            transform: skewY(1.5deg);
            position: relative;
            top: 50%;
        }
    }

    // Information box
    .infobox {
        @media #{$notMobile} {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 25%;
            height: 57vh;
            padding: 1em;
            text-align: center;
            font-size: 1.2em;
            z-index: 2;

            h3 {
                margin: 0;
                margin-bottom: .5em;
            }

            hr {
                width: 70%;
            }
        }

        .worship-times {
            display: none;

            h3 {
                font-size: 1.5em;
                color: $gray;
            }

            @media #{$notMobile} {
                padding: 1em;
                display: inline-block;
                width: auto;
                margin: 0 auto 0 auto;
                text-shadow: -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff;
            }
        }

        .ss-classes {
            font-size: .8em;
        }
    }

    //Front page content
    .frontpage-content {
        background-color: #fff;
        position: relative;

        .content {
            margin: 0 auto;
            padding: 5em 1em;

            h2 { margin-top: 0; }

            @media #{$notMobile} {
                width: 45em;
                margin: 0 20% 0 auto;
                padding: 7em 0;
            }

            .current-events {
                img {
                    display: block;
                    max-width: 100%;
                    max-height: 50vh;
                    margin: 0 auto 1em auto;

                    @media #{$notMobile} {
                        max-width: 50%;
                        float: right;
                        margin: 0 1em 1em 1em;
                    }
                }
            }
        }
    }

    //Quick links
    .quicklinks {
        background-color: $lightgray;
        transform: skewY(-1.5deg);
        padding: 3em 0 6em 0;
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

            &:hover {
                filter: brightness(1.2);
                transform: scale(1.1);
            }
        }

        a { position: relative; }

        .linklabel {
            display: block;
            margin: 0 auto 2em auto;
            text-align: center;
            text-decoration: none;
            font-weight: bold;
        }
    }

    .footer {
        padding: 5em 0 6em 0;
        text-align: center;

        hr {
            width: 60%;
            margin-bottom: 3em;
        }

        .copy {
            font-size: 1.2em;
            margin-bottom: .4em;
        }
    }
</style>