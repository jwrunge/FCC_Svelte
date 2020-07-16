<script>
    import {flyModified} from '../flyModified.js'
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>About Us</h1>
            <div class='links'>
                <div class="inner">
                    <a style="color: #ad8559;" href="#staff"><img src='/icons/round/staff.svg' alt='Staff'><span class='linklabel'><span class='inner'>Staff</span></span></a>
                    <a style="color: #0053a0;" href="#allevents"><img src='/icons/round/events.svg' alt='Events'><span class='linklabel'><span class='inner'>Events</span></span></a>
                    <a style="color: #D40F41;" target="_blank" href='https://www.google.com/maps/place/First+Christian+Church/@40.9512658,-90.3730744,17z/data=!3m1!4b1!4m5!3m4!1s0x87e1be068de92a53:0x80655c07ce1123a!8m2!3d40.9512658!4d-90.3708857'><img src='/icons/round/directions.svg' alt='Directions'><span class='linklabel'><span class='inner'>Directions</span></span></a>
                    <a style="color: #2D88FF;" target="_blank" href='https://www.facebook.com/First-Christian-Church-Disciples-of-Christ-Galesburg-Illinois-108822552519210/'><img src='/icons/round/facebooklogo.svg' alt='Facebook'><span class='linklabel'><span class='inner'>Facebook</span></span></a>
                </div>
            </div>
    
            <h2>Who We Are</h2>
            <p>First Christian Church of Galesburg was founded in 1872.  We are a manifestation of the church body known as The Christian Church (Disciples of Christ).  We have been worshiping and witnessing at this location since 1916, though the building was not completed and dedicated until 1928.</p>
            <div class='emphasis'>We are growing <span class='bigger'>Spirit-filled, committed disciples of Christ</span></div>
            <p>As "Disciples of Christ" we are one of over 4,000 similar congregations across the USA and Canada which had its origins on the American frontier in the early 19th century.  Founding fathers of our church organization were Thomas and Alexander Campbell, Barton W. Stone,and Walter Scott.  Since its beginning the Christian Church (Disciples of Christ) has endeavored to promote unity and to increase respect and understanding within the family of God.</p>
            <img src='/primary-images/worshipservice.jpg' alt="">
            <p>As Disciples we strive to remain obedient to the Lordship and teachings of Jesus and the New Testament by practicing a faith which is socially relevant and intellectually sound.  Members are bound together in fellowship and service by belief in the central "confession" of the New Testament, that "Jesus is the Christ, the Son of the living God."</p>
            <p>In Illinois there are about 190 congregations of Disciples with over 50,000 members.</p>
            <p>To access the web site of the national office of the Disciples of Christ, <a target='_blank' href='http://www.disciples.org/'>click here</a>.</p>

            <h2>The Christian Church (Disciples of Christ)</h2>
            <p>First Christian Church is a part of the Christian Church (Disciples of Christ) denomination. For more information on the Disciples of Christ, see <a href='http://disciples.org'>disciples.org</a>.</p>
            
            <h3>Our Identity</h3>
            <p>We are Disciples of Christ, a movement for wholeness in a fragmented world.</p>
            <p>As part of the one body of Christ, we welcome all to the Lord’s Table as God has welcomed us.</p>

            <h3>Our Vision</h3>
            <p>To be a faithful, growing church, that demonstrates true community, deep Christian spirituality and a passion for justice. <em>- Micah 6:8</em></p>

            <h3>Our Mission</h3>
            <p>To be and to share the Good News of Jesus Christ, witnessing, loving and serving from our doorsteps "to the ends of the earth." <em>- Acts 1:8</em></p>
            <p>And as First Christian in Galesburg, our mission is Growing Spirit-filled, committed disciples of Christ.</p>

        </div>
    </div>
</div>