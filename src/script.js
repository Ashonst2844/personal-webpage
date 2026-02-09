fetch("src/data/showcase_data.json")
    .then(response => response.json())
    .then(data => {
        const parent = document.querySelector("#show-case");
        data.forEach((item) => {
            const product = document.createElement("div");
            product.classList.add("products");
            
            product.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="${item.link}">${item.link}</a>
            `;

            parent.appendChild(product)
        });
    })
    .catch(error => console.error("Error Load Data!!", error));