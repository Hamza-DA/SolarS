const card = document.querySelector('.card')

window.addEventListener('mousemove', cardf)

function cardf(e) {
    card.style.top = e.pageY + 20 + 'px'
    card.style.left = e.pageX + 20 + 'px'
}

const planetss = document.querySelectorAll('.pl')
const planets = document.querySelectorAll('.planet')
planets.forEach(planet => {
    planet.addEventListener('mouseover', () => {
            card.classList.add('card-hovered')
            if (planet.className === 's8 planet') {
                s1pl()
            }  
            if (planet.className === 's7 planet') {
                s2pl()
            }  
            if (planet.className === 's6 planet') {
                s3pl()
            }  
            if (planet.className === 's5 planet') {
                s4pl()
            }  
            if (planet.className === 's4 planet') {
                s5pl()
            }  
            if (planet.className === 's3 planet') {
                s6pl()
            }  
            if (planet.className === 's2 planet') {
                s7pl()
            }  
            if (planet.className === 's1 planet') {
                s8pl()
            }  
    })
    planet.addEventListener('mouseout', () => {
            card.classList.remove('card-hovered')
    })
});


// planets.forEach(p => {
//     for (let i = 0; i < 8; i++) {
//         // console.log('s' + i);
//         p.className = 's' + i
//         console.log(p.className);
//     }
// })
// const planetss = document.querySelector('.s2')
//     planetss.addEventListener('mouseover', () => {
//         card.classList.add('card-hovered')
//     })
//     planetss.addEventListener('mouseout', () => {
//         card.classList.remove('card-hovered')
//     })

// const planetss = document.querySelector('.planet pl')
//     planets.addEventListener('mouseover', () => {
//         planetss.classList.add('planet-selected')
//     })
//     planets.addEventListener('mouseout', () => {
//         planetss.classList.remove('planet-selected')
//     })

const plname = document.getElementById('pl_name')
const pldiam = document.getElementById('pl_dia')
const pldist = document.getElementById('pl_dis')
const plyear = document.getElementById('pl_year')
const plinfo = document.getElementById('pl_fact')

let mercury = {
    name: "Mercury",
    diameter: "4,879 Km",
    distance_from_Sun: "57,909,227 km",
    length_of_Year: "88 Earth days",
    fact: "The smallest and fastest planet, it zips around the Sun in only 88 Earth days."
}

let venus = {
    name: "Venus",
    diameter: "12,104 km",
    distance_from_Sun: "108,209,475 km",
    length_of_Year: "	225 Earth days",
    fact: "Venus’ thick atmosphere makes it the hottest planet in our solar system.",
}

let earth = {
    name: "Earth",
    diameter: "12,742 km",
    distance_from_Sun: "149,598,262 km",
    length_of_Year: "365.24 days",
    fact: "The only planet in our solar system with liquid water on the surface.",
}

let mars = {
    name: "Mars",
    diameter: "6,779 km",
    distance_from_Sun: "227,943,824 km",
    length_of_Year: "1.9 Earth years",
    fact: "Mars was a wet and warm planet billions of years ago.",
}

let jupiter = {
    name: "Jupiter",
    diameter: "139,822 km",
    distance_from_Sun: "778,340,821 km",
    length_of_Year: "11.9 Earth years",
    fact: "The largest planet, its dark red spot is a storm larger than Earth.",
}

let saturn = {
    name: "Saturn",
    diameter: "116,464 km",
    distance_from_Sun: "1,426,666,422 km",
    length_of_Year: "29.5 Earth years",
    fact: "Saturn has the brightest, most massive and most complex ring system of any planet.",
}

let uranus = {
    name: "Uranus",
    diameter: "	50,724 km",
    distance_from_Sun: "2,870,658,186 km",
    length_of_Year: "84.0 Earth years",
    fact: "Uranus is tipped on its axis by almost 90-degrees.",
}

let neptune = {
    name: "Neptune",
    diameter: "49,244 km",
    distance_from_Sun: "4,498,396,441 km",
    length_of_Year: "164.8 Earth years",
    fact: "Neptune was the first planet discovered through mathematical calculations, rather than observation.",
}

function s1pl() {
    plname.innerHTML = mercury.name
    pldiam.innerHTML = mercury.diameter
    pldist.innerHTML = mercury.distance_from_Sun
    plyear.innerHTML = mercury.length_of_Year
    plinfo.innerHTML = mercury.fact
}

function s2pl() {
    plname.innerHTML = venus.name
    pldiam.innerHTML = venus.diameter
    pldist.innerHTML = venus.distance_from_Sun
    plyear.innerHTML = venus.length_of_Year
    plinfo.innerHTML = venus.fact
}

function s3pl() {
    plname.innerHTML = earth.name
    pldiam.innerHTML = earth.diameter
    pldist.innerHTML = earth.distance_from_Sun
    plyear.innerHTML = earth.length_of_Year
    plinfo.innerHTML = earth.fact
}

function s4pl() {
    plname.innerHTML = mars.name
    pldiam.innerHTML = mars.diameter
    pldist.innerHTML = mars.distance_from_Sun
    plyear.innerHTML = mars.length_of_Year
    plinfo.innerHTML = mars.fact
}
venus
function s5pl() {
    plname.innerHTML = jupiter.name
    pldiam.innerHTML = jupiter.diameter
    pldist.innerHTML = jupiter.distance_from_Sun
    plyear.innerHTML = jupiter.length_of_Year
    plinfo.innerHTML = jupiter.fact
}

function s6pl() {
    plname.innerHTML = saturn.name
    pldiam.innerHTML = saturn.diameter
    pldist.innerHTML = saturn.distance_from_Sun
    plyear.innerHTML = saturn.length_of_Year
    plinfo.innerHTML = saturn.fact
}

function s7pl() {
    plname.innerHTML = uranus.name
    pldiam.innerHTML = uranus.diameter
    pldist.innerHTML = uranus.distance_from_Sun
    plyear.innerHTML = uranus.length_of_Year
    plinfo.innerHTML = uranus.fact
}

function s8pl() {
    plname.innerHTML = neptune.name
    pldiam.innerHTML = neptune.diameter
    pldist.innerHTML = neptune.distance_from_Sun
    plyear.innerHTML = neptune.length_of_Year
    plinfo.innerHTML = neptune.fact
}
