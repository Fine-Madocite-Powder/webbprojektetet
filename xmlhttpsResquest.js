const searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return

    getData(searchbar.value.toLowerCase().trim())
})

function getData(query) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=2081b34a&app_key=%20a79725693fda2562221cc273c5bbc7e5%09`);

    xhr.send();
}