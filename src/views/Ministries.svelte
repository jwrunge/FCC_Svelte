<script>
    import {flyModified} from '../flyModified.js'
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>Ministries</h1>
            <!-- <div class='links'>
                <a href="#staff">Staff</a>
                <a href="#allevents">Events</a>
                <a target='_blank' href='https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857'>Directions</a>
                <a target='_blank' href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/'>Facebook</a>
            </div> -->
    
            <h2>Education</h2>
            <p><strong>This section is under construction!</strong></p>
            <p>More information coming very soon. Thanks for your patience!</p>

            <div class='attention-box'>
                <h3 id='classes'>Sunday School Classes</h3>
                <ul>
                <li><strong>Elementary</strong> - K-5th grade; 2nd Floor Education Building</li>
                <li><strong>Junior High and High School</strong> - 6th-12th grade; Room #4 Youth Lounge</li>
                <li><strong>Coffee House Theology</strong> - Library</li>
                <li><strong>Friendship Class</strong> - Room #12 in Education Building</li>
                <li><strong>Faithweavers</strong> - Parlor</li>
                <li><strong>Travelers</strong> - South Side of Large Hall</li>
                <li><strong>Northern Lights</strong> - Room #17 in Education Building</li>
                </ul>
            </div>

            <h2>The Blessing Box</h2>
            <div>
                <div>
                    <img style='float: right; margin: 0; margin-left: 1em; margin-bottom: 1em;' src="primary-images/bbox.jpg" alt="The Blessing Box, stocked">
                    <p>Reaching out to our neighbors is an especially important part of our mission. To meet the needs of families in our neighborhood a blessing box was put in place on the south side of the building. It is labeled: Take What You Need, Leave What You Can, Be Blessed. Since its beginning in October of 2019, the box is visited daily. We have discovered that not only is the need great, but the kindness of church and community members helps support this ministry. Items may be placed directly in the box or in the barrel inside near the pastor’s office. We are glad to divide bulk items into individual packages.</p>
                    <p>Items needed:</p>
                    <ul>
                        <li>Hygiene Items such as deodorant, soap, toothpaste, shampoo, razors</li>
                        <li>Personal Items such as toilet paper, pads/tampons, socks, hats, gloves</li>
                        <li>Baby items such as diapers and wipes</li>
                        <li>Cleaning supplies such as detergent, cleanser, trash bags, dish soap, paper towels</li>
                        <li>Non-perishable food items</li>
                    </ul>
                </div>
                <br>
            </div>

            <h2>New City Church</h2>
            <div>
                <img style='float: left; margin: 0; margin-right: 1em; margin-bottom: 1em;' src="uploads/events/together.jpg" alt="">
                <div>
                    <p>FCC has had a connection with the Democratic Republic of Congo for decades. The relationship began when Dr. Gene and Sue Johnson joined our congregation after serving as missionaries in the African nation.  Dr. Johnson spent two terms, 1957-1964 and 1967-1971, in Monieka where he oversaw the medical work and also taught in the school for children of missionaries.  His wife, Sue, supervised back country schools and station finances as well as taught her children in primary grades.</p>
                    <p>The Johnson’s shared their love and concern with our congregation and over fifteen years ago a partnership or jumelage began with New City Church (Nouvelle Cite’ Parish) in Mbandaka, DRC.  Each congregation supports the other through prayer and communicating aspects of church life and family and community needs.  Funds are sent to our sister church annually to support a project that improves quality of life for our brothers and sisters in Mbandaka.  We proudly supported microcredit courses that teach women to sew and provide for their families, school supply kiosks at the church which provide affordable supplies and school uniforms, funds to build a new parsonage, wells for potable water and financial support for a much needed new church building.</p>
                    <p>It has been our honor to host visits from New City Church member, Oscar Pekombe and also Rev. Christianne Ikete, Director of the Disciples Office of Women and Family in DRC. In 2012, FCC member, Stephanie Line, traveled to Mbandaka and worshipped with our brothers and sisters of New City.  We are committed to continue to promote these cultural and spiritual ties….our Jumelage….with our sister church!</p>
                </div>
                <br>
            </div>
        </div>
    </div>
</div>

<style>
    br {
        clear: both;
    }
</style>