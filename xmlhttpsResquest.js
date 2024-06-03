const searchbar = document.getElementById("searchbar")
const resultDiv = document.getElementById("search-results")

let lastSearch = "";

searchbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getData(searchbar.value.toLowerCase().trim())
    }
})

function sendHttpRequest (method, url) {
    const promise = new Promise((resolve) => {
        const request = new XMLHttpRequest();

        request.open(method, url);

        request.onload = () => {
            resolve(JSON.parse(request.response))
        }

        request.send()
    });

    return promise
}

function getData(query) {

    if (lastSearch !== query) {
        lastSearch = query

        resultDiv.innerHTML = "";

        sendHttpRequest("GET", `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=2081b34a&app_key=%20a79725693fda2562221cc273c5bbc7e5%09`).then((data) => {

            for (let i = 0; i < data.hits.length; i++) {
                
                let contentSectionDiv = document.createElement('div');
                contentSectionDiv.className = 'content-section';

                let contentDiv = document.createElement('div');
                contentDiv.className = 'content';
                
                let textDiv = document.createElement('div');
                textDiv.className = 'text';
                textDiv.textContent = data.hits[i].recipe.label;

                let imageDiv = document.createElement('div');
                imageDiv.className = 'image';
                let image = document.createElement('img');
                image.setAttribute('src', data.hits[i].recipe.image);
                image.setAttribute('alt', data.hits[i].recipe.label);
                image.setAttribute('href', 'https://somewebsite.com');
                imageDiv.appendChild(image);

                contentDiv.appendChild(textDiv);
                contentDiv.appendChild(imageDiv);
                contentSectionDiv.appendChild(contentDiv);

                resultDiv.appendChild(contentSectionDiv);
            }    
        })
    }
}