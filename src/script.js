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
            
        });
        
        // Add event listeners after elements are created
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
    })
    .catch(error => console.error("Error Load Data!!", error))

