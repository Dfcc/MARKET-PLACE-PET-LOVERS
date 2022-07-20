const petName = document.getElementById("petName");
const petType = document.getElementById("petType");
const petRace = document.getElementById("petRace");
const petAge = document.getElementById("petAge");
const petPlace = document.getElementById("petPlace");
const petImg = document.getElementById("img-output");
let pet ={
    id: "1",
	Especie: "Perro",
	Nombre: 'Pascual',
	Raza: "Labrador",
	Edad: "3 Años",
	Lugar: "huesca",
	Imagen: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
};
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
    petName.innerHTML += `${pet.Nombre}`;
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
    petImg.innerHTML += `<img src="${pet.Imagen}" class="card-img-top"  id="img-pet"></img>`;
}

