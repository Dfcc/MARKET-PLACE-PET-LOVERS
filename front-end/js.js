
//animacion de la barra de menu
document.querySelector(".bars__menu").addEventListener("click", animateBars );
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
// let lupa = document.querySelector(".lupa");
// let itemBuscador = document.querySelector(".cont-lupa");

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


// lupa.addEventListener("click" , () => {
//     itemBuscador.classList.toggle("b-v");
// })












// eslaider


let indice = 1
muestraslides(indice)

function avanzaslide(n){
    muestraslides(indice+=n)
}

function posicionslide(n){
    muestraslides(indice=n)
}
// setInterval(function tiempo(){
//     muestraslides(indice+=1)
// },5000)
function muestraslides(n){
    let i;
    let slides = document.getElementsByClassName("mislider")
    let barras = document.getElementsByClassName("barra")
    if(n > slides.length){
        indice= 1;
    }

 
if(n<1){
    indice = slides.length();
}

for(i=0;i< slides.length;i++){
    slides[i].style.display = "none"
}
for(i=0;i< barras.length;i++){
    barras[i].className = barras[i].className.replace("active","")
}
slides[indice-1].style.display = "block"
barras[indice-1].className+= " active"
}

