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
        Name: "Misifu",
        Especie: "Gato",
        Raza: "Munchkin",
        Edad: 3,
        Lugar: "",
        img: "./img/munchkin.jpg"
    },
    {
        id: 3,
        Name: "Misifu",
        Especie: "Gato",
        Raza: "Europeo",
        Edad: 3,
        Lugar: "Madrid",
        img: "./img/comun-europeo.jpg"
    },
    {
        id: 4,
        Name: "Misifu",
        Especie: "Gato",
        Raza: "Siames",
        Edad: 3,
        Lugar: "Madrid",
        img: "./img/siamés-gris.jpg"
    },
    {
        id: 5,
        Name: "Misifu",
        Especie: "Gato",
        Raza: "Sagrado de birmania",
        Edad: 3,
        Lugar: "Madrid",
        img: "./img/sagrado-de-birmania.jpg"
    },
    {
        id: 6,
        Name: "Misifu",
        Especie: "Gato",
        Raza: "Exotico",
        Edad: 3,
        Lugar: "Madrid",
        img: "./img/exoticos.jpg"
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