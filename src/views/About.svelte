<script>
    import {flyModified} from '../flyModified.js'
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>About Us</h1>
            <div class='links'>
                <a href="#staff">Staff</a>
                <a target='_blank' href='https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857'>Directions</a>
                <a target='_blank' href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/'>Facebook</a>
            </div>
    
            <p>First Christian Church of Galesburg was founded in 1872.  We are a manifestation of the church body known as The Christian Church (Disciples of Christ).  We have been worshiping and witnessing at this location since 1916, though the building was not completed and dedicated until 1928.</p>
            <div class='emphasis'>We are growing <span class='bigger'>passionate disciples of Christ </span>for the transformation of our world</div>
            <p>As "Disciples of Christ" we are one of over 4,000 similar congregations across the USA and Canada which had its origins on the American frontier in the early 19th century.  Founding fathers of our church organization were Thomas and Alexander Campbell, Barton W. Stone,and Walter Scott.  Since its beginning the Christian Church (Disciples of Christ) has endeavored to promote unity and to increase respect and understanding within the family of God.</p>
            <img src='/primary-images/worshipservice.jpg' alt="">
            <p>As Disciples we strive to remain obedient to the Lordship and teachings of Jesus and the New Testament by practicing a faith which is socially relevant and intellectually sound.  Members are bound together in fellowship and service by belief in the central "confession" of the New Testament, that "Jesus is the Christ, the Son of the living God."</p>
            <p>In Illinois there are about 190 congregations of Disciples with over 50,000 members.</p>
            <p>To access the web site of the national office of the Disciples of Christ, <a target='_blank' href='http://www.disciples.org/'>click here</a>.</p>

            <h1>Worship</h1>

            <p><strong>This section is under construction!</strong></p>
            <p>More information coming very soon. Thanks for your patience!</p>

            <div class='attention-box'>
                <h3>Sunday Morning Worship</h3>
                <p class='centered'>
                <strong>Contemporary Service</strong> - 8:30 AM<br>
                <strong>Traditional Service</strong> - 11 AM
                </p>
                <p class='centered'>Sunday school is available for all ages between services</p>

                <p><strong>This section is under construction!</strong></p>
                <p>More information coming very soon. Thanks for your patience!</p>
            </div>

            <!-- <div class='two-content'>
                <img src='/primary-images/worshipservice.jpg' class='sm-bottom-margin' alt='The band playing at the contemporary service'>
                <div>
                <h3>Contemporary Service</h3>
                <p>Integer nunc sem, interdum vitae semper et, pharetra id massa. Donec mattis at velit ac cursus. In volutpat dictum orci. Aenean fringilla urna id sagittis iaculis. Nam dignissim velit quis fringilla maximus. Integer ut augue sed lectus hendrerit mattis. Nunc rhoncus leo magna, nec venenatis sapien imperdiet vel. Phasellus feugiat tempor felis, a mattis turpis volutpat in. Mauris venenatis mauris a magna sagittis aliquam. Ut fermentum turpis in euismod malesuada. Quisque id massa nec nunc varius interdum et et enim.</p>
                </div>
            </div>

            <div class='two-content reverse'>
                <img src='/primary-images/worshipservice.jpg' class='sm-bottom-margin' alt='A traditional service'>
                <div>
                    <h3>Traditional Service</h3>
                    <p>In hac habitasse platea dictumst. Aliquam pharetra eu justo non iaculis. Praesent faucibus, erat convallis eleifend volutpat, nisl enim pretium tortor, pulvinar gravida ex mi nec sapien. Curabitur vel vulputate elit. Quisque suscipit dui mi, in lacinia velit gravida at. Phasellus venenatis sapien id ante aliquam, eu vestibulum orci maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat laoreet vehicula. Suspendisse accumsan elit non sem commodo, eget venenatis risus fermentum.</p>
                </div>
            </div> -->

            <h1>Education</h1>
            <p><strong>This section is under construction!</strong></p>
            <p>More information coming very soon. Thanks for your patience!</p>
            <!-- <div class='links'>
                <a href='#classes'>Sunday School</a>
                <a href='#youth'>Youth Group</a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies purus eget sem ultrices elementum. In semper mauris ac pharetra ullamcorper. Nullam maximus quam non iaculis rutrum. Ut semper in nulla eget consectetur. Praesent mollis eget neque at euismod. Etiam convallis turpis nisi, sed lobortis mi placerat in. Sed quis sapien ut velit vulputate imperdiet non vel augue. Nunc ut posuere lectus. Maecenas a ligula suscipit, consectetur quam aliquet, dignissim elit.</p> -->
            <div class='attention-box'>
                <h3 id='classes'>Sunday School Classes</h3>
                <ul>
                <li><strong>DiscipleShip</strong> - 5th grade; 2nd Floor Education Building</li>
                <li><strong>Junior High and High School</strong> - 6th-12th grade; Room #4 Youth Lounge</li>
                <li><strong>Coffee House Theology</strong> - Library</li>
                <li><strong>Friendship Class</strong> - Room #12 in Education Building</li>
                <li><strong>Faithweavers</strong> - Parlor</li>
                <li><strong>Travelers</strong> - South Side of Large Hall</li>
                <li><strong>Northern Lights</strong> - Room #17 in Education Building</li>
                </ul>
            </div>
            <!-- <p>Integer nunc sem, interdum vitae semper et, pharetra id massa. Donec mattis at velit ac cursus. In volutpat dictum orci. Aenean fringilla urna id sagittis iaculis. Nam dignissim velit quis fringilla maximus. Integer ut augue sed lectus hendrerit mattis. Nunc rhoncus leo magna, nec venenatis sapien imperdiet vel. Phasellus feugiat tempor felis, a mattis turpis volutpat in. Mauris venenatis mauris a magna sagittis aliquam. Ut fermentum turpis in euismod malesuada. Quisque id massa nec nunc varius interdum et et enim.</p>
            <p>In hac habitasse platea dictumst. Aliquam pharetra eu justo non iaculis. Praesent faucibus, erat convallis eleifend volutpat, nisl enim pretium tortor, pulvinar gravida ex mi nec sapien. Curabitur vel vulputate elit. Quisque suscipit dui mi, in lacinia velit gravida at. Phasellus venenatis sapien id ante aliquam, eu vestibulum orci maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat laoreet vehicula. Suspendisse accumsan elit non sem commodo, eget venenatis risus fermentum.</p>

            <h2 id='youth'>Youth Group</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies purus eget sem ultrices elementum. In semper mauris ac pharetra ullamcorper. Nullam maximus quam non iaculis rutrum. Ut semper in nulla eget consectetur. Praesent mollis eget neque at euismod. Etiam convallis turpis nisi, sed lobortis mi placerat in. Sed quis sapien ut velit vulputate imperdiet non vel augue. Nunc ut posuere lectus. Maecenas a ligula suscipit, consectetur quam aliquet, dignissim elit.</p>-->
        </div>
    </div>
</div>