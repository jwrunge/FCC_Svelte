<script>
    import {flyModified} from '../flyModified.js'
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>Resources</h1>
            <div class='links'>
                <a href='#newsletters'>Newsletters</a>
                <a href='#sermons'>Sermons</a>
                <a href='#links'>Links</a>
            </div>
            <p>Check out our newsletters, sermon videos and manuscripts, and links!</p>
        </div>
    </div>
</div>