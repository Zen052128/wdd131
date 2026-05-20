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

   