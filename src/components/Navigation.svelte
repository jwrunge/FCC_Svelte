<script>

    export let mobileOpen
    export let subpageStyle = false

</script>

<nav class:subpageStyle={subpageStyle}>
    <span class='nav-links' class:shown={mobileOpen}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#worship">Worship</a>
        <a href="#learn">Education</a>
        <a href="#resources">Resources</a>
    </span>
    {#if mobileOpen}
        <div class='mobile-menu-open' on:click={()=>{mobileOpen = false}}>&#9776;</div>
    {:else}
        <div class='mobile-menu-close' on:click={()=>{mobileOpen = false}}>&#x2716;</div>
    {/if}
</nav>

<style lang='scss'>
    @import "../style/variables.scss";

    .mobile-menu-open, .mobile-menu-close {
        @media screen and (min-width: 501px) {
            display: none;
        }
    }

    .mobile-menu-open, .mobile-menu-close {
        font-size: 1.5em;
        margin-bottom: .25em;
        z-index: 10;
    }

    .mobile-menu-close {
        color: white;
    }

    nav {
        position: fixed;
        padding: 0;
        width: 100%;
        background-color: $accent-color;
        box-shadow: $box-shadow;
        bottom: 0; right: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: space-between;
        z-index: 2;

        a {
            color: black;
            font-weight: bold;
            text-decoration: none;
            z-index: 6;
            line-height: 2em;

            &:hover {
                filter: brightness(1.3);
            }

            &.onRoute {
                cursor: default;
                opacity: .5;
            }
        }

        a + a {
            @media screen and (min-width: 501px) {
                margin-left: 1.25em;
            }
        }

        @media #{$notMobile} {
            position: fixed;
            
            align-content: center;
            top: 0; bottom: auto;
            padding: 0 2% 0 0;
            width: 98%;
            text-align: right;
            justify-content: flex-end;

            &.sub {
                position: absolute;
            }

            a {
                margin-bottom: 0;
            }

            .nav-links {
                border: none;
                display: flex;
            }
        }
    }

    .nav-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: space-between;
        padding: .5em;
        border-width: 2px;
        border-style: solid;
        border-color: transparent;

        @media screen and (max-width: 500px) {
            padding: 0;
            display: flex;
            flex-direction: column;
            align-content: center;
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            opacity: 0;
            pointer-events: none;
            z-index: 10;
            height: 100vh;

            a {
                font-size: 1.5em;
                color: white;
            }

            &.shown {
                opacity: 1;
                background-color: rgba(0,0,0,.9);
                pointer-events: auto;
            }
        }
    }

    nav.subpageStyle {
        background: transparent;
        z-index: 6;
        box-shadow: none;

        .nav-links {
            background-color: white;
        }
    }
</style>