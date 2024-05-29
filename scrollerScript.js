const homeNavItem = document.getElementById("inuse");
const content = document.getElementById("search-results");


homeNavItem.addEventListener("click", (event) => {
    event.preventDefault()

    content.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})