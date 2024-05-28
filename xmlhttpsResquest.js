const postBtn = document.getElementById("post-btn")
const getBtn = document.getElementById("get-btn")

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=2081b34a&app_key=%20a79725693fda2562221cc273c5bbc7e5%09');

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
    }

    xhr.send();
}

const postData = () => {

}

getBtn.addEventListener("click", getData)
postBtn.addEventListener("click", postData)