<script>
    import {flyModified} from '../flyModified.js'
    import StaffBio from '../components/StaffBio.svelte'
    
    let curStaffer
    let showBio = false

    let staffers = [
        { name: 'MJ and Greg Fitch', emails: ["pastormj02@gmail.com", "pastorgreg02@gmail.com"], title: "Co-Pastors", src: '/staff-photos/mj.jpg', bio: "<h3>Martha Jean</h3><p>A native of Oklahoma, she has spent much of her life in Texas. She holds a BA in Religion from Texas Christian University in Fort Worth, Texas, and a Master of Divinity from the Brite Divinity School in Fort Worth. She has served as a Minister to Children at South Hills Christian Church in Fort Worth and as a Co-Pastor with her husband Greg at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. Pastor Martha-Jean (MJ) has served First Christian in Galesburg since July 2003.</p> <p>She and her husband Greg have three children. In her personal time, Pastor MJ enjoys reading, cross-stitching, playing the piano and cooking.</p><h3>Greg</h3><p>A native of Nebraska, Pastor Greg has spent much of his life in Colorado. He holds a BA in Religion from Texas Christian University in Fort Worth, Texas and a Master of Divinity from the Brite Divinity School in Fort Worth. He has served as an Associate Minister at Rosemont Christian Church in Dallas, Texas and as a Co-Pastor with his wife Martha-Jean at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. He also served for 3 years as the Associate Regional Minister of the Christian Church (Disciples of Christ) in Colorado-Wyoming. Pastor Greg has served First Christian in Galesburg since July 2003.</p><p>He and his wife Martha-Jean have three children and one grandchild. In his personal time, Pastor Greg enjoys golfing, fishing, reading, cross-stitching, and cooking.</p>"},
        // { name: 'Greg Fitch', title: "Pastor", src: '/staff-photos/greg.jpg', bio: "<p>A native of Nebraska, Pastor Greg has spent much of his life in Colorado. He holds a BA in Religion from Texas Christian University in Fort Worth, Texas and a Master of Divinity from the Brite Divinity School in Fort Worth. He has served as an Associate Minister at Rosemont Christian Church in Dallas, Texas and as a Co-Pastor with his wife Martha-Jean at First Christian Church, Sterling, Colorado and First Christian Church, Allen, Texas. He also served for 3 years as the Associate Regional Minister of the Christian Church (Disciples of Christ) in Colorado-Wyoming. Pastor Greg has served First Christian in Galesburg since July 2003.</p><p>He and his wife Martha-Jean have three children. In his personal time, Pastor Greg enjoys golfing, fishing, reading, cross-stitching, and cooking.</p>"},
        { name: 'Christina Griswold', title: "Office Manager", emails: ["fccgalesburg@gmail.com"], src: '/staff-photos/christina.jpg', bio: "<p>Christina Moved to Galesburg from Canton, Il when she married her husband Rich in 2012. She and her husband are raising their son Luke, a student at GHS. Christina has previously held positions in children's ministry and is enjoying her role at FCC. \"I love greeting the church family in the office and helping every way possible.\"</p>"},
        { name: 'Lynda White', title: "Treasurer/Bookkeeper", emails: ["fcclwhite@gmail.com"], src: '/staff-photos/lynda.jpg', bio: "<p>Lynda is a member of First Christian Church and has been the Bookkeeper since February 2000. She graduated from Galesburg High School. She is married with three children and six grandchildren.</p>"},
        { name: 'Steve Jackson', title: "Minister of Music", emails: ["sjackson@sandburg.edu"], src: '/staff-photos/steve.jpg', bio: "<p>Steve joined the staff of First Christian Church in August 2009. Steve is a native of Galesburg who graduated from Galesburg High School in 1985, majored in music and philosophy at Knox College (1989), and earned a doctorate in music (jazz studies) at the University of Illinois (May 2009). Steve has served in music ministry (and in youth ministry with his wife Tracy) at Norwood Gospel Chapel and Northwest Bible Chapel in Chicago and at Stratford Park Bible Chapel in Champaign. Steve and Tracy have two children. Steve also teaches music classes at Carl Sandburg College and plays in the Knox-Galesburg Symphony.</p>"},
        { name: 'Luke Acerra', title: "Organist/Keyboardist", emails: ["lacerra@iu.edu"], src: '/staff-photos/luke.jpg', bio: "<p>Luke Acerra is a musician from Galesburg, Illinois who recently finished his studies at Indiana University’s Jacob School of Music. Luke graduated with a double BM in cello performance and music composition in May 2019, and continued the following year as a performance diploma student with former LA Philharmonic principal cellist, Peter Stumpf. Luke has studied and performed in masterclasses for cello and composition in the United States as well as Europe. He won two consecutive summer grants from IU’s Honors College to study at the Nadia Boulanger Institute in Paris, France as well as Music-Alp International Academy of Music in Tignes, France respectively. In addition to his principle studies of cello and composition, Luke has played church organ since junior high school. He greatly looks forward to being part of the First Christian Church community and contributing music for the congregation.</p>"},
        // { name: 'Bob Conley', title: "Custodian", src: '/staff-photos/bob.jpg', bio: "<p>Bob grew up in Knoxville and worked for some years at Gates.  He then moved to Arizona and worked for Abbott Laboratories until he reached retirement age.  After retirement he returned to this area and again lives in Knoxville. He has two adult children.</p>"}
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
                        <div on:click|stopPropagation class='staff-name'>{ staffer.name }
                            <div class='title'>{ staffer.title }</div>
                            {#each staffer.emails as email}
                                <div class='email'><a target="_blank" href="mailto:{email}">{email}</a></div>
                            {/each}
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
        grid-template-columns: 1fr 1fr;
        grid-gap: .5em;
        align-items: stretch;
        justify-items: stretch;
        margin: 2em auto;

        @media screen and (min-width: 650px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        // @media screen and (min-width: 900px) {
        //     grid-template-columns: 1fr 1fr 1fr 1fr;
        // }
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
            cursor: auto;

            .title {
                margin-top: .2em;
                font-size: .8em;
                font-style: italic;
            }

            .email {
                margin-top: .2em;
                font-size: .7em;

                a {
                    color: white;
                }
            }
        }
    }

</style>