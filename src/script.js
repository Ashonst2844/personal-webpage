let website = 0;
let music = 0;
fetch("src/data/website_data.json")
    .then(response => response.json())
    .then(data => {
        const parent = document.querySelector(".webShowCase");
        data.forEach((item) => {
            const product = document.createElement("div");
            product.classList.add("webProducts");
            
            product.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="${item.link}">${item.link}</a>
            `;

            parent.appendChild(product);
            website++;
        });
        
        // WEBSITE COUNTER HERE!
        const counter = document.getElementById("website-counter")
        counter.textContent = website

    })
    .catch(error => console.error("Error Load Data!!", error));

fetch("src/data/music_data.json")
    .then(response => response.json())
    .then(data => {
        const parent = document.querySelector(".musicShowCase");
        data.forEach((item) => {
            const product = document.createElement("div");
            product.classList.add("musicProducts")
            product.innerHTML = `
                <h2>${item.title}</h2>
                <audio src="${item.url}" class="audio"></audio>
                <div><img src="src/img/music-logo.png"></div>
                <button class="playButton"><i class="fa-solid fa-play"></i></button>
                `,
            parent.appendChild(product)
            music++;
            
        });
        
        const buttons = document.getElementsByClassName("playButton")
        const audios = document.getElementsByClassName("audio")

        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                const icon = buttons[i].querySelector('i');
                if(audios[i].paused) {
                    audios[i].play();
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                } else {
                    audios[i].pause();
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                }
            });
        }

        // MUSIC COUNTER HERE!
        const counter = document.getElementById("music-counter")
        counter.textContent = music

    })
    .catch(error => console.error("Error Load Data!!", error))

fetch("src/data/skills.json")
    .then(response => response.json())
    .then(data => {
        const parent = document.querySelector("#skillSet");
        data.forEach((item) => {
            const product = document.createElement("div");
            product.classList.add("skill")
            product.innerHTML = `
                <span>${item.name} ${item.range}%</span>
                <div class="skillMeter"><div style="--target:${item.range}%;" title="${item.name}"></div></div>
                <hr style="width: 90%; border: 1px solid var(--text);">
                `,
            parent.appendChild(product)
        });
    })
    .catch(error => console.error("Error Load Data!!", error));

let nav_state = false;
function nav() {
    var nav_links = document.querySelectorAll(".navLinks");
    if(!nav_state) {
        nav_state=true;
        nav_links.forEach(link => link.style.display = "flex");
    } else {
        nav_state=false;
        nav_links.forEach(link => link.style.display = "none");
    }
}

let sider_state = true;
function sider() {
    var sider_container = document.querySelector("#status-section");
    var main_container = document.querySelector("#sider");
    var side_button = document.querySelector("#sider-control i");
    if(!sider_state) {
        sider_state=true;
        sider_container.style.transform = "translateX(-100%)";
        main_container.style.width = "100%";
        main_container.style.transform = "translateX(0)";
        side_button.style.transform = "rotate(0)";
    } else {
        sider_state=false;
        sider_container.style.transform = "translateX(0)";
        main_container.style.width = "80%"
        main_container.style.transform = "translate(25%)"
        side_button.style.transform = "rotate(180deg)";
    }
}