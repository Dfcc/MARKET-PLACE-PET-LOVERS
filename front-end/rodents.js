const rodents = [
  {
    "id": 1, 
    "Nombre": "Coquito", 
    "Especie": "Hámster", 
    "Raza": "Chino", 
    "Edad": "6 meses", 
    "Lugar": "Valencia", 
    "img": "https://cdn.pixabay.com/photo/2017/07/01/16/59/hamster-2462048_960_720.jpg"
  },
  {
    "id": 2, 
    "Nombre": "Galleta", 
    "Especie": "Cobaya", 
    "Raza": "Sheltie", 
    "Edad": "1 Año", 
    "Lugar": "Huesca", 
    "img": "https://cdn.pixabay.com/photo/2017/09/15/16/28/the-guinea-pig-2752716_960_720.jpg"
  },
  {
    "id": 3, 
    "Nombre": "Miel", 
    "Especie": "Conejo", 
    "Raza": "Toy", 
    "Edad": "3 Años", 
    "Lugar": "Barcelona", 
    "img": "https://cdn.pixabay.com/photo/2014/02/19/17/51/dwarf-rabbit-270000_960_720.jpg"
  },
  {
    "id": 4, 
    "Nombre": "Lollipop", 
    "Especie": "Chinchilla", 
    "Raza": "Blanca", 
    "Edad": "2 Años", 
    "Lugar": "Zaragoza", 
    "img": "https://cdn.pixabay.com/photo/2016/12/10/17/52/chinchilla-1897815_960_720.jpg"
  },
  {
    "id": 5, 
    "Nombre": "Pompón", 
    "Especie": "Conejo", 
    "Raza": "Rex", 
    "Edad": "3 Años", 
    "Lugar": "Bilbao", 
    "img": "https://cdn.pixabay.com/photo/2019/03/06/13/47/hare-4038246_960_720.jpg"
  },
];
let card = document.getElementById("card-template");

rodents.map((x) => {
    card.innerHTML += `
                <div class="card">
                <img clas="picture" src="${x.img}" alt="${x.Name}">
                <p>${x.Nombre}</p>
                <p>${x.Edad}</p>
            </div>`;
}); 