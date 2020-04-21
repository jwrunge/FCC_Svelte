<script>
    import {flyModified} from '../flyModified.js'
</script>

<div class="page">
    <slot></slot>
    <div in:flyModified={{y: 300, duration: 300, delay: 500}} out:flyModified={{y: -300, duration: 300}}>
        <div class='content'>
            <h1>Links</h1>

            <p>See below for links to affiliated organizations, useful services and resources, and other interesting information.</p>

            <h2>Affilliate Organizations</h2>
            <ul class='link-page'>
                <li>
                    <a href='https://disciples.org/' target='_blank'>The Christian Church (Disciples of Christ) in the United States and Canada</a>
                    <p>The national office for the Christian Church (Disciples of Christ), with information about the denomination and resources for church leaders and congregations.</p>
                </li>
                <li>
                    <a href='https://cciwdisciples.org/' target='_blank'>The Christian Church of Illinois and Wisconsin (CCIW)</a>
                    <p>The home page of the regional office of the Christian Church in Illinois and Wisconsin. Here you will find information about activities, news, and links to other regional churches.</p>
                </li>
            </ul>

            <h2>Bible Reading and Devotion Resources</h2>
            <ul class='link-page'>
                <li>
                    <a href='https://www.biblegateway.com/' target='_blank'>Bible Gateway</a>
                    <p>Online Bible verse lookup and Bible reading tool that allows you to read verses in multiple versions.</p>
                </li>
                <li>
                    <a href='https://www.backtothebible.org/forward' target='_blank'>Back to the Bible</a>
                    <p>Provides schedules for reading the Bible in one year as well as multiple devotional readings.</p>
                </li>
                <li>
                    <a href='http://www.ccel.org/' target='_blank'>Christian Classics Ethereal Library</a>
                    <p>A large collection of classic Christian books available online at no charge.</p>
                </li>
                <li>
                    <a href='http://www.bible-reading.com/' target='_blank'>Bible-Reading.com</a>
                    <p>Has links to the schedule for reading the Bible in one year, as well as numerous other Bible reading choices.</p>
                </li>
            </ul>

            <h2>Congo Resources</h2>
            <h3>English</h3>
            <ul class='link-page'>
                <li><a href='/congo-links/English/Congobook1.pdf' target='_blank'>Congo Book 1</a></li>
                <li><a href='/congo-links/English/CongoBook-1-First50Years.pdf' target='_blank'>Congo Book First 50 Years</a></li>
                <li><a href='/congo-links/English/CongoBook-2-SixthDecade.pdf' target='_blank'>Congo Book Decade 6</a></li>
                <li><a href='/congo-links/English/CongoBook-3-SeventhDecade.pdf' target='_blank'>Congo Book Decade 7</a></li>
                <li><a href='/congo-links/English/CongoBook-4-EighthDecade.pdf' target='_blank'>Congo Book Decade 8</a></li>
                <li><a href='/congo-links/English/CongoBook-5-NinthDecade.pdf' target='_blank'>Congo Book Decade 9</a></li>
                <li><a href='/congo-links/English/CongoBook-6-TenthDecade.pdf' target='_blank'>Congo Book Decade 10</a></li>
                <li><a href='/congo-links/English/50YearsinCongo2.pdf' target='_blank'>50 Years in Congo</a></li>
            </ul>
            <h3>French</h3>
            <p>En 1999, j'ai écrit un livre décrivant l'histoire de l'œuvre de missionnaires envoyés au Congo par l'Église Chrétienne, Disciples du Christ, en Amérique. Le livre a été intitulé "Congo Centenaire, les Deuxième Cinquante Ans ":. J'ai maintenant terminé une traduction du livre en français pour l'utilisation des Congolais. Cette traduction n'a pas été vérifiée par quelqu'un d'autre. Depuis que le françai</p>
            <p>
                Centennaire11.pdfs n'est pas ma première langue, et à cause de ma mauvaise vision, il y a sans doute beaucoup d'erreurs de grammaire. Toutefois, le sens du texte devrait être clair.
            </p>
            <p>J'ai divisé le livre en chapitres pour le rendre plus facile à télécharger. # 1 est l'information préliminaire. # 2 raconte les 50 premières années. Les numéros 3, 5, 7 et 9 ont des photos et des informations biographiques sur les missionnaires qui étaient nouveaux à chaque décennie. Les numéros 4, 6, 8 et 10 décrivent les activités qui ont eu lieu au cours de la 6e, 7e, 8e et 9e décennies. # 11, quand il y avait seulement 2 nouveaux missionnaires, inclus à la fois des photos et du texte de la dixième décennie.</p>
            <ul class='link-page'>
                <li><a href='/congo-links/French/Centennaire1.pdf' target='_blank'>Centennaire 1</a></li>
                <li><a href='/congo-links/French/Centennaire2.pdf' target='_blank'>Centennaire 2</a></li>
                <li><a href='/congo-links/French/Centennaire3.pdf' target='_blank'>Centennaire 3</a></li>
                <li><a href='/congo-links/French/Centennaire4.pdf' target='_blank'>Centennaire 4</a></li>
                <li><a href='/congo-links/French/Centennaire5.pdf' target='_blank'>Centennaire 5</a></li>
                <li><a href='/congo-links/French/Centennaire6.pdf' target='_blank'>Centennaire 6</a></li>
                <li><a href='/congo-links/French/Centennaire7.pdf' target='_blank'>Centennaire 7</a></li>
                <li><a href='/congo-links/French/Centennaire8.pdf' target='_blank'>Centennaire 8</a></li>
                <li><a href='/congo-links/French/Centennaire9.pdf' target='_blank'>Centennaire 9</a></li>
                <li><a href='/congo-links/French/Centennaire10.pdf' target='_blank'>Centennaire 10</a></li>
                <li><a href='/congo-links/French/Centennaire11.pdf' target='_blank'>Centennaire 11</a></li>
                <li><a href='/congo-links/French/French50Years2.pdf' target='_blank'>50 Ans au Congo</a></li>
            </ul>
        </div>
    </div>
</div>