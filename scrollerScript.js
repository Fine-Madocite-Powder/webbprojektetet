const scrollToTop = document.getElementById("inuse");
const content = document.getElementById("content");


scrollToTop.addEventListener("click", (event) => {
    event.preventDefault()

    content.scrollIntoView({ behavior: "smooth"})
})