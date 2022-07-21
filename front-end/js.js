let array = [
     {"imagen":"img/i1.jpg"},
     {"imagen":"img/i2.jpg"},
     {"imagen":"img/i3.jpg"},
     {"imagen":"img/i4.jpg"},
     {"imagen":"img/i5.jpg"},
     {"imagen":"img/i6.jpg"},
     {"imagen":"img/i7.jpg"},
];





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



ver.addEventListener("click" , () => {
    tOculto.classList.toggle("texto-visible");
    itemTexto.classList.toggle("textoFondo");
    btnsubir.classList.toggle("leer-mas_volver");
    persona.style.animation = "mover 1s" ;
})












// eslaider
let slaider = document.querySelector(".slide-contenedor")
let c = 0;
array.forEach(img => {
      let div1 = document.createElement("div");
      div1.setAttribute("class","mislider fade fade");
      div1.style.background = "url("+img.imagen+")";
      div1.style.backgroundPosition = "center";
      div1.style.backgroundSize = "cover";
      div1.style.backgroundRepeat = "no-repeat";

      slaider.appendChild(div1);
      c++;
});









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

