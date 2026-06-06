const menuButton = document.querySelector("#menu-button");

const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    // Change icon
    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fukuoka Japan Temple",
    location: "Fukuoka, Japan",
    dedicated: "2000, June 11",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
  },
  {
    templeName: "Manile Philippines Temple",
    location: "Metro Manila, Philippines",
    dedicated: "1984, September 27",
    area: 26683,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April 05",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  }
];

function templeImage(list) {
    const section = document.querySelector("#gallery");
    
    section.innerHTML = ""

    for (const i of list) {
        const div = document.createElement("div");

        const heading = document.createElement("h2");
        heading.textContent = i.templeName;
        const location = document.createElement("p");
        location.textContent = `Location: ${i.location}`;
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${i.dedicated}`;
        const size = document.createElement("p");
        size.textContent = `Area: ${i.area}`;
        const img = document.createElement("img");
        img.src = i.imageUrl;
        img.alt = i.templeName;
        img.loading = "lazy";

        div.append(heading, location, dedicated, size, img);

        section.append(div);
    }
    
};

templeImage(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    templeImage(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {

    const oldTemples = temples.filter(temple =>
        parseInt(temple.dedicated) < 1900
    );

    templeImage(oldTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {

    const newTemples = temples.filter(temple =>
        parseInt(temple.dedicated) > 2000
    );

    templeImage(newTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {

    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    templeImage(largeTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {

    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    templeImage(smallTemples);
});