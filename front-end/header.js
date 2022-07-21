

//animacion de la barra de menu
document.querySelector(".bars__menu").addEventListener("click", animateBars );
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let tOculto = document.querySelector(".texto-oculto");
let ver = document.querySelector(".verMas");
let itemTexto = document.querySelector(".texto");
let btnsubir = document.querySelector(".leer-mas");
let persona = document.getElementById("persona");
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")
}

//menu visible
const botonBar = document.querySelector(".bars__menu")
const item = document.querySelector(".menu-menu")
botonBar.addEventListener("click" , () => {
    item.classList.toggle("menu-v")
})
