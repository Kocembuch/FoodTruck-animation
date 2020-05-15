console.log('sijda');

const truck1 = document.querySelector(".truck1");
const pie = document.querySelector(".pie");
const truck2 = document.querySelector(".truck2");

const fctTruck1 = () => {
    truck1.classList.add("truck1Anime");
    pie.classList.add("pieAnime");
    truck2.classList.add("truck2Amime");
}

// fctTruck1();

setInterval(() => {
    truck1.classList.toggle("truck1Anime");
    pie.classList.toggle("pieAnime");
    truck2.classList.toggle("truck2Amime");
}, 8500);