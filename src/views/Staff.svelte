<script>
    import {flyModified} from '../flyModified.js'
    import StaffBio from '../components/StaffBio.svelte'
    
    let curStaffer
    let showBio = false

    let staffers = [
        { name: 'MJ Fitch', title: "Pastor", src: '/staff-photos/mj.jpg', bio: "<p>A native of Oklahoma, she has spent much of her life in Texas. She holds a BA in Religion from Texas Christian University in Fort Worth, Texas, and a Master of Divinity from the Brite Divinity School in Fort Worth. She has served as a Minister to Children at South Hills Christian Church in Fort Worth and as a Co-Pastor with her husband Greg at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. Pastor Martha-Jean (MJ) has served First Christian in Galesburg since July 2003.</p> <p>She and her husband Greg have three children. In her personal time, Pastor MJ enjoys reading, cross-stitching, playing the piano and cooking.</p>"},
        { name: 'Greg Fitch', title: "Pastor", src: '/staff-photos/greg.jpg', bio: "<p>A native of Nebraska, Pastor Greg has spent much of his life in Colorado. He holds a BA in Religion from Texas Christian University in Fort Worth, Texas and a Master of Divinity from the Brite Divinity School in Fort Worth. He has served as an Associate Minister at Rosemont Christian Church in Dallas, Texas and as a Co-Pastor with his wife Martha-Jean at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. He also served for 3 years as the Associate Regional Minister of the Christian Church (Disciples of Christ) in Colorado-Wyoming. Pastor Greg has served First Christian in Galesburg since July 2003.</p><p>He and his wife Martha-Jean have three children. In his personal time, Pastor Greg enjoys golfing, fishing, reading, cross-stitching, and cooking.</p>"},
        { name: 'Terri Ohelert', title: "Office Manager", src: '/staff-photos/terri.jpg', bio: "<p>Terri and her husband William moved from Iowa to Galesburg in 1985. William (Swede) is employed by BNSF. They have a son, Ryan, now in the army, two cats and a dog. Terri has been employed by FCC since September of 1989 and has seen many changes and growth in the church during that time. She loves her job!</p>"},
        { name: 'Lynda White', title: "Treasurer/Bookkeeper", src: '/staff-photos/lynda.jpg', bio: "<p>Lynda is a member of First Christian Church and has been the Bookkeeper since February 2000. She graduated from Galesburg High School. She is a member of the Church board and Circle 3. She is married with 3 children and one granddaughter.</p>"},
        { name: 'Steve Jackson', title: "Minister of Music", src: '/staff-photos/steve.jpg', bio: "<p>Steve joined the staff of First Christian Church in August 2009. Steve is a native of Galesburg who graduated from Galesburg High School in 1985, majored in music and philosophy at Knox College (1989), and earned a doctorate in music (jazz studies) at the University of Illinois (May 2009). Steve has served in music ministry (and in youth ministry with his wife Tracy) at Norwood Gospel Chapel and Northwest Bible Chapel in Chicago and at Stratford Park Bible Chapel in Champaign. Steve and Tracy, who helped lead Steve to Christ in 1992, have two young children. Steve also teaches music classes at Carl Sandburg College and plays in the Knox-Galesburg Symphony.</p>"},
        { name: 'Amber Clark', title: "Organist", src: '/staff-photos/amber.jpg', bio: "<p>Amber earned a music degree in Appleton Wisconsin.  She came to Galesburg to teach piano and organ at Knox College, where she was also the accompanist for the Knox College choir.  She was the organist at the Presbyterian Church for many years.</p>"},
        { name: 'Bob Conley', title: "Custodian", src: '/staff-photos/bob.jpg', bio: "<p>Bob grew up in Knoxville and worked for some years at Gates.  He then moved to Arizona and worked for Abbott Laboratories until he reached retirement age.  After retirement he returned to this area and again lives in Knoxville. He has two adult children.</p>"}
    ]
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class="content">
            <h1>Church Staff</h1>
            <p>Click any photo for a brief staff biography.</p>

            <div class="photo-grid">
                {#each staffers as staffer, i}
                    <div class="staff-box" on:click={()=>{ curStaffer = staffer; showBio = true }}>
                        <img src={staffer.src} alt="">
                        <div class='staff-name'>{ staffer.name }
                            <div class='title'>{ staffer.title }</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

{#if showBio}
    <StaffBio staffer={curStaffer} on:close={()=>{ showBio = false }}/>
{/if}

<style lang="scss">
    @import '../style/variables.scss';
    $box-shadow: 1px 0 10px 0 black;

    .photo-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: .5em;
        align-items: stretch;
        justify-items: stretch;
        margin: 2em auto;

        @media screen and (min-width: 400px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (min-width: 720px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    .staff-box {
        height: 18em;
        position: relative;
        background-color: #eee;
        border-width: 2px;
        border-style: solid;
        border-color: white;
        overflow: hidden;

        img {
            object-fit: cover;
            min-width: 100%;
            height: 100%;
            margin: 0;
        }

        &:hover, &.selected {
            border-color: $red;
            filter: brightness(1.2);
            cursor: pointer;
            box-shadow: $box-shadow;
        }

        .staff-name {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            padding: .5em 0;
            background-color: rgba(0,0,0,.6);
            color: white;
            font-size: 1.2em;

            .title {
            margin-top: .2em;
            font-size: .8em;
            font-style: italic;
            }
        }
    }

</style>