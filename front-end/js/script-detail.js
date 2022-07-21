const petName = document.getElementById("petName");
const petType = document.getElementById("petType");
const petRace = document.getElementById("petRace");
const petAge = document.getElementById("petAge");
const petPlace = document.getElementById("petPlace");
const petImg = document.getElementById("img-output");
var url = window.location.href;
const id = lastLetter(url);
function lastLetter(string){
    return string.substr(-1) 
}
const specie= getSpecie(url);
function getSpecie(url){
    return url.substr(-6, 5)
}
console.log(specie);


if(specie==="Perro"){
   fetch(`http://localhost:3000/dogs/${id}`)
  .then(response => response.json())
  .then(data => createPet(data));
     
}
if(specie==="?Gato"){
   fetch(`http://localhost:3000/cats/3`)
  .then(response => response.json())
  .then(data => createPet(data));
     
}
let pet= new Object;
function createPet(data){
    pet=data
    first()
    return pet;
}
petName.innerHTML += `${pet.Name}`+ "hola";
petType.innerHTML += pet.Especie;

const initPage= first();
function first(){
    insertname();
    insertRace();
    insertAge();
    insertPlace();
    insertType();
    insertImg();
}

function insertname(){
    petName.innerHTML += `${pet.Name}`;
}
function insertRace(){
    petRace.innerHTML += `${pet.Raza}`;
}
function insertAge(){
    petAge.innerHTML += `${pet.Edad}`;
}
function insertPlace(){
    petPlace.innerHTML += `${pet.Lugar}`;
}
function insertType(){
    petType.innerHTML += `${pet.Especie}`;
}
function insertImg(){
    petImg.innerHTML += `<img src="${pet.img}"  id="img-pet"></img>`;
}

//animacion de menu//
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
