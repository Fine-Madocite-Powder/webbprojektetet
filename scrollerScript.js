const homeNavItem = document.getElementById("inuse");
const content = document.getElementById("content");


homeNavItem.addEventListener("click", (event) => {
    event.preventDefault()

    content.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})