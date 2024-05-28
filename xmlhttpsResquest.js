const searchbar = document.getElementById("searchbar")

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


        sendHttpRequest("GET", `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=2081b34a&app_key=%20a79725693fda2562221cc273c5bbc7e5%09`).then((data) => {
            console.log(data)



        })
    }
}