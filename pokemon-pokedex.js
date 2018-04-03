document.addEventListener("DOMContentLoaded", (event) => {

//pokemons!! 
class Pokemons {
    constructor (){ 
        this.all = []
    }
    add(character) {
        this.all.push(character)
    }
}
class Character {
    constructor(name, stats ) {
        this.name = name
        this.stats = stats
    }
}

// let ul = document.querySelector("ul")
let pokemons = new Pokemons()

axios.get(`https://pokeapi.co/api/v2/pokemon/799/`)
    .then((response) => {
        let main = document.querySelector("main")
        let ul = document.createElement("ul")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let data = response.data

        let guzzlord = new Character (
            data["name"],
            data.stats[5].stat.name
        )

        pokemons.add(guzzlord)

        li.innerHTML = guzzlord.name
        li.classList.add("guzzlord")
        + guzzlord.stats
        
        img.setAttribute("src", "images/799-Guzzlord.png")
        img.id = "guzzlord"

        ul.appendChild(img)
        ul.appendChild(li)
        main.appendChild(ul)
        document.body.appendChild(main)
    
axios.get(`https://pokeapi.co/api/v2/pokemon/663/`)
.then((response) => {
        let main = document.querySelector("main")
        let ul = document.createElement("ul")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let data = response.data

        let talonflame = new Character(
            data["name"],
            data["abilities"]
        )

        pokemons.add(talonflame)

        li.innerHTML = talonflame.name
        li.classList.add("talonflame")

        img.setAttribute("src", "images/talonflame-gif.gif")
        img.id = "talonflame"

        ul.appendChild(img)
        ul.appendChild(li)
        main.appendChild(ul)
        document.body.appendChild(main)

axios.get(`https://pokeapi.co/api/v2/pokemon/257/`)
.then((response) => {
        let main = document.querySelector("main")
        let ul = document.createElement("ul")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let data = response.data

        let blaziken = new Character(
            data["name"],
            data["abilities"]
        )

        pokemons.add(blaziken)

        li.innerHTML = blaziken.name
        li.classList.add("blaziken")

    img.setAttribute("src", "images/blaziken6.gif")
        img.id = "blaziken"

        ul.appendChild(img)
        ul.appendChild(li)
        main.appendChild(ul)
        document.body.appendChild(main)
    })
})

//CHANGE THIS TO ADD EVENT LISTENER
// tutorial from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
window.addEventListener("scroll", function() {
    let nav = document.getElementById("nav")
    let sticky = nav.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky")
        } else {
            nav.classList.remove("sticky")
        }
    } stickyNav()
})

/////Parallax onscroll effect with content

// function addMainSection() { {
//     let mainContainer = document.createElement("main")
//     mainContainer.classList.add("main")
//     let mainSection = document.createElement("section")
//     mainSection.classList.add("section")
//     mainSection.innerHTML = "You got this girl"

//     mainContainer.appendChild(mainSection)
//     // body.insertBefore(ul, mainContainer.nextSibling)    
//     document.body.appendChild(mainContainer)
//     return addMainSection()
//     }
//     // if (window.scrollY > 450 && window.scrollY <500) {
//     //     addMainSection()
//     //     mainContainer.classList.add("fade-in")
//     // } 
//     console.log(mainSection)
// }

    }).catch((error) => {
        console.log(error)
    })
})
