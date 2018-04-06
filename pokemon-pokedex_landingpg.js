document.addEventListener("click", (goexplode) => {
    let pokeball = document.getElementsByClassName("pokeball")
    let background = document.getElementsByTagName("body")
    function goexplode() {
        background.setAttribute("src", "images_v2/explosion.gif")
    }
})
