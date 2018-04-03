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
    constructor(name, stat_name5, base_stat5, stat_name4, base_stat4, stat_name3, base_stat3, stat_name1, base_stat1) {
        this.name = name
        this.stat_name5 = stat_name5
        this.base_stat5 = base_stat5
        this.stat_name4 = stat_name4
        this.base_stat4 = base_stat4
        this.stat_name3 = stat_name3
        this.base_stat3 = base_stat3
        this.stat_name1 = stat_name1
        this.base_stat1 = base_stat1
    }
}

// let ul = document.querySelector("ul")
let pokemons = new Pokemons()

axios.get(`https://pokeapi.co/api/v2/pokemon/799/`)
    .then((response) => {
        let main = document.querySelector("main")
        let stats = document.getElementsByClassName("stats")
        let p = document.createElement("p")
        let ul = document.createElement("ul")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let data = response.data

        let guzzlord = new Character (
            data.name,
            data.stats[5].stat.name,
            data.stats[5].base_stat,
            data.stats[4].stat.name,
            data.stats[4].base_stat,
            data.stats[3].stat.name,
            data.stats[3].base_stat,
            data.stats[1].stat.name,
            data.stats[1].base_stat
        )

        pokemons.add(guzzlord)

        li.innerHTML = guzzlord.name
        li.classList.add("guzzlord")
        
        img.setAttribute("src", "images/799-Guzzlord.png")
        img.id = "guzzlord"

        ul.appendChild(img)
        ul.appendChild(li)
        main.appendChild(ul)
        document.body.appendChild(main)
        console.log(guzzlord)
    })
axios.get(`https://pokeapi.co/api/v2/pokemon/663/`)
.then((response) => {
        let main = document.querySelector("main")
        let stats = document.getElementsByClassName("stats")
        let p = document.createElement("p")
        let ul = document.createElement("ul")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let data = response.data

        let talonflame = new Character(
            data.name,
            data.stats[5].stat.name,
            data.stats[5].base_stat,
            data.stats[4].stat.name,
            data.stats[4].base_stat,
            data.stats[3].stat.name,
            data.stats[3].base_stat,
            data.stats[1].stat.name,
            data.stats[1].base_stat
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
    })
axios.get(`https://pokeapi.co/api/v2/pokemon/257/`)
.then((response) => {
        let main = document.querySelector("main")
        let stats = document.getElementsByClassName("stats")
        let p = document.createElement("p")
        let ul = document.createElement("ul")
        let img = document.createElement("img")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let data = response.data

        let blaziken = new Character(
            data.name,
            data.stats[5].stat.name,
            data.stats[5].base_stat,
            data.stats[4].stat.name,
            data.stats[4].base_stat,
            data.stats[3].stat.name,
            data.stats[3].base_stat,
            data.stats[1].stat.name,
            data.stats[1].base_stat
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
}).catch((error) => {
    console.log(error)
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
})
