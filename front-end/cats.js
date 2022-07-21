const cats = [
    {
        id: 1,
        Name: "Misifu",
        Especie: "Gato",
        Raza: "Persa",
        Edad: 3,
        Lugar: "Madrid",
        img: "./img/persa.jpg"
    },
    {
        id: 2,
        Name: "Flash",
        Especie: "Gato",
        Raza: "Munchkin",
        Edad: 3,
        Lugar: "Barcelona",
        img: "./img/munchkin.jpg"
    },
    {
        id: 3,
        Name: "Odin",
        Especie: "Gato",
        Raza: "Europeo",
        Edad: 3,
        Lugar: "Asturias",
        img: "./img/comun-europeo.jpg"
    },
    {
        id: 4,
        Name: "Max",
        Especie: "Gato",
        Raza: "Siames",
        Edad: 3,
        Lugar: "Galicia",
        img: "./img/siamés-gris.jpg"
    },
    {
        id: 5,
        Name: "Coco",
        Especie: "Gato",
        Raza: "Sagrado de birmania",
        Edad: 3,
        Lugar: "Asturias",
        img: "./img/sagrado-de-birmania.jpg"
    },
    {
        id: 6,
        Name: "Ñoqui",
        Especie: "Gato",
        Raza: "Exotico",
        Edad: 3,
        Lugar: "Madrid",
        img: "./img/exoticos.jpg"
    },
];
const dogs = [
    {
        id: 1,
        Name: "Rocky",
        Especie: "Perro",
        Raza: " Pug Carlino",
        Edad: "1 año",
        Lugar: "Sevilla",
        img: "./img/raza-pug-carlino.jpg"
    }, 
    {
        id: 2,
        Name: "Mico",
        Especie: "Perro",
        Raza: "Husky Siberiano",
        Edad: "3 meses",
        Lugar: "Madrid",
        img: "./img/cachorro-de-husky.jpg"
    },
    {
        id: 3,
        Name: "Nina",
        Especie: "Perro",
        Raza: "Cotón de Tuléar",
        Edad: "5 meses",
        Lugar: "Bilbao",
        img: "./img/cotón-de-tuléar-bebé.jpg"
    },
    {
        id: 4,
        Name: "Toby",
        Especie: "Perro",
        Raza: "Bulldog francés",
        Edad: "1 año",
        Lugar: "Burgos",
        img: "./img/bulldog-francés-blue.jpg"
    }, 
    {
        id: 5,
        Name: "Linda",
        Especie: "Perro",
        Raza: "Setter-gordon",
        Edad: "3 año",
        Lugar: "Pontevedra",
        img: "./img/Setter-gordon.jpg"
    },
    
       
];
let card = document.getElementById("card-template");

cats.map((x) => {
    card.innerHTML += `
                <div class="card">
                <img clas="picture" src="${x.img}" alt="${x.Name}">
                <p>${x.Name}</p>
                <p>${x.Edad}</p>
            </div>`;
}); 

