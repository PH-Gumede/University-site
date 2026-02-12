// script.js
const nav = document.getElementById("navLinks");
const overlay = document.getElementById("navOverlay");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");

function openMenu(){
    nav.classList.add("open");
    overlay.classList.add("active");
    nav.setAttribute("aria-hidden", "false");
    openMenuBtn.setAttribute("aria-expanded", "true");
    closeMenuBtn.setAttribute("aria-expanded", "true");
}

function closeMenu(){
    nav.classList.remove("open");
    overlay.classList.remove("active");
    nav.setAttribute("aria-hidden", "true");
    openMenuBtn.setAttribute("aria-expanded", "false");
    closeMenuBtn.setAttribute("aria-expanded", "false");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

