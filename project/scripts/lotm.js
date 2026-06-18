const menu = document.querySelector("#menu");

function navbarScroll() {

    if (window.scrollY > 100) {
        menu.classList.add("scrolled");
    }
    else {
        menu.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", navbarScroll);

let visits =
    Number(localStorage.getItem("lotmVisits")) || 0;

visits++;

localStorage.setItem(
    "lotmVisits",
    visits
);

console.log(`Visits: ${visits}`);

const characters = [

{
    name: "Klein Moretti",
    group: "tarot",
    pathway: "Seer",
    image: "images/klein.webp"
},

{
    name: "Audrey Hall",
    group: "tarot",
    pathway: "Spectator",
    image: "images/audrey.webp"
},

{
    name: "Alger Wilson",
    group: "tarot",
    pathway: "Sailor",
    image: "images/alger.webp"
},

{
    name: "Leonard Mitchell",
    group: "other",
    pathway: "Sleepless",
    image: "images/leonard.webp"
},

{
    name: "Amon",
    group: "other",
    pathway: "Error",
    image: "images/amon.webp"
},

{
    name: "Fors Wall",
    group: "tarot",
    pathway: "Apprentice",
    image: "images/fors.webp"
},

{
    name: "Derrick Berg",
    group: "tarot",
    pathway: "Sun",
    image: "images/derrick.webp"
},

{
    name: "Cattleya",
    group: "tarot",
    pathway: "Mystery Pryer",
    image: "images/cattleya.webp"
},

{
    name: "Emlyn White",
    group: "tarot",
    pathway: "Moon",
    image: "images/emlyn.webp"
},

{
    name: "Xio Derecha",
    group: "tarot",
    pathway: "Arbiter",
    image: "images/xio.webp"
}

];

const container =
    document.querySelector("#character-container");

function displayCharacters(characterList) {

    if (!container) return;

    container.innerHTML = "";

    characterList.forEach(character => {

        container.innerHTML += `

        <article class="character-card">

            <img
                src="${character.image}"
                alt="${character.name}"
                loading="lazy">

            <h2>${character.name}</h2>

            <p>Pathway: ${character.pathway}</p>

        </article>

        `;

    });

}

displayCharacters(characters);

const allBtn =
    document.querySelector("#all-btn");

const tarotBtn =
    document.querySelector("#tarot-btn");

const otherBtn =
    document.querySelector("#other-btn");

if (allBtn) {

    allBtn.addEventListener("click", () => {

        displayCharacters(characters);

    });

}

if (tarotBtn) {

    tarotBtn.addEventListener("click", () => {

        const tarotCharacters =
            characters.filter(
                character =>
                    character.group === "tarot"
            );

        displayCharacters(
            tarotCharacters
        );

    });

}

if (otherBtn) {

    otherBtn.addEventListener("click", () => {

        const others =
            characters.filter(
                character =>
                    character.group === "other"
            );

        displayCharacters(
            others
        );

    });

}