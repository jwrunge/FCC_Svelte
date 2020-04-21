<script>
    import {flyModified} from '../flyModified.js'
</script>

<div class="page">
    <slot></slot>
    <div class='content' in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <h1>Education</h1>
        <div class='links'>
            <a href='#classes'>Sunday School</a>
            <a href='#youth'>Youth Group</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies purus eget sem ultrices elementum. In semper mauris ac pharetra ullamcorper. Nullam maximus quam non iaculis rutrum. Ut semper in nulla eget consectetur. Praesent mollis eget neque at euismod. Etiam convallis turpis nisi, sed lobortis mi placerat in. Sed quis sapien ut velit vulputate imperdiet non vel augue. Nunc ut posuere lectus. Maecenas a ligula suscipit, consectetur quam aliquet, dignissim elit.</p>
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
        <p>Integer nunc sem, interdum vitae semper et, pharetra id massa. Donec mattis at velit ac cursus. In volutpat dictum orci. Aenean fringilla urna id sagittis iaculis. Nam dignissim velit quis fringilla maximus. Integer ut augue sed lectus hendrerit mattis. Nunc rhoncus leo magna, nec venenatis sapien imperdiet vel. Phasellus feugiat tempor felis, a mattis turpis volutpat in. Mauris venenatis mauris a magna sagittis aliquam. Ut fermentum turpis in euismod malesuada. Quisque id massa nec nunc varius interdum et et enim.</p>
        <p>In hac habitasse platea dictumst. Aliquam pharetra eu justo non iaculis. Praesent faucibus, erat convallis eleifend volutpat, nisl enim pretium tortor, pulvinar gravida ex mi nec sapien. Curabitur vel vulputate elit. Quisque suscipit dui mi, in lacinia velit gravida at. Phasellus venenatis sapien id ante aliquam, eu vestibulum orci maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat laoreet vehicula. Suspendisse accumsan elit non sem commodo, eget venenatis risus fermentum.</p>

        <h2 id='youth'>Youth Group</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies purus eget sem ultrices elementum. In semper mauris ac pharetra ullamcorper. Nullam maximus quam non iaculis rutrum. Ut semper in nulla eget consectetur. Praesent mollis eget neque at euismod. Etiam convallis turpis nisi, sed lobortis mi placerat in. Sed quis sapien ut velit vulputate imperdiet non vel augue. Nunc ut posuere lectus. Maecenas a ligula suscipit, consectetur quam aliquet, dignissim elit.</p>    </div>
</div>