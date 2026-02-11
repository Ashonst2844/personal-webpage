<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Masagus - WebPage</title>
    <link rel="stylesheet" href="src/style.css">
    <script src="https://kit.fontawesome.com/29575beb59.js" crossorigin="anonymous"></script>
</head>
<body>

    <section id="nav-section">
        <button type="button" onclick="nav()" id="navigation">
            <i class="fa-solid fa-bars"></i>
        </button>
        <a class="navLinks" href="#banner-section"><i class="fa-solid fa-house"></i></a>
        <a class="navLinks" href="#web-showcase"><i class="fa-solid fa-globe"></i></a>
        <a class="navLinks" href="#music-showcase"><i class="fa-solid fa-music"></i></a>
    </section>
    <section id="status-section">
        <div onclick="personal()" id="profile" onload="playAnimation(showVisible)">
            <img src="src/img/photo-profile.png" alt="Photo Profile">
        </div>
        <div id="myInfo">
            <div class="infoLeft">
                <span>Name :</span>
                <span>Age :</span>
                <span>Place :</span>
            </div>
            <div class="infoRight">
                <span>Masagus Ahmad Ramadhan</span>
                <span>17 Yearl Old</span>
                <span>Jakarta Pusat/Indonesia</span>
            </div>
            <hr style="margin-top: 5px; width: 90%; border: 1px solid var(--text);">
        </div>
        <div id="skillSet">
            <div class="skill">
                <span>HTML %</span>
                <div class="skillMeter"><div style="--target:80%;"></div></div>
                <hr style="width: 90%; border: 1px solid var(--text);">
                <span>JavaScript %</span>
                <div class="skillMeter"><div style="--target: 40%;"></div></div>
                <hr style="width: 90%; border: 1px solid var(--text);">
                <span>CSS %</span>
                <div class="skillMeter"><div style="--target: 60%;"></div></div>
                <hr style="width: 90%; border: 1px solid var(--text);">
                <span>Music Producing %</span>
                <div class="skillMeter"><div style="--target: 30%;"></div></div>
                <hr style="width: 90%; border: 1px solid var(--text);">
                <span>IoT %</span>
                <div class="skillMeter"><div style="--target: 80%;"></div></div>
                <hr style="width: 90%; border: 1px solid var(--text);">
            </div>
        </div>
    </section>
    <section id="sider">
        <section id="banner-section">
            <div class="counter">
                <h1 id="website-counter">0</h1>
                <h2>Website</h2>
            </div>
            <div class="counter">
                <h1 id="music-counter">0</h1>
                <h2>Music</h2>
            </div>
        </section>
        <section id="content-section">
            <div class="showCase webShowCase" id="web-showcase">
            </div>
            <hr style="margin-block: 10px; width: 100%; border: 1px solid var(--main-2);">
            <div class="showCase musicShowCase" id="music-showcase">
            </div>
        </section>
    </section>

    <script src="src/script.js"></script>
</body>
</html>