// Looping or iteration or perulangan

// const cars = ["Toyota", "Mitsubishi", "Honda", "Suzuki", "Aston", "Ferrarri"];

// // map
// cars.map((dataSaya, index) => {
//     console.log(`${dataMobil} is a great car!' --- ${index}`);
// });

// // for-loop
// for (let a = 5; a < cars.length ; a++) {
// console.log(`${cars[a]} is a great car`);
// }





const carsInfo = [
  {
    brand: "BMW",
    type: "X1",
    year: 2017,
    category: "MPV"
  },
  {
    brand: "Toyota",
    type: "Avanza",
    year: 2015,
    category: "MPV"
  },
  {
    brand: "Kia",
    type: "Soreno",
    year: 2012,
    category: "Sedan"
  },
  {
    brand: "Mercedes",
    type: "C Class",
    Year: 2013,
    category: "Sedan"
  },
  {
    brand: "Honda",
    type: "Odyssey",
    year: 2015,
    category: "hatchback"
  }
];


// map
carsInfo.map((mobils, index) => {
    console.log(`${mobils.category}`)
})

console.log("===============");

// for-loop
for (let b = 0; b < carsInfo.length ; b++) {
    console.log(`${carsInfo[b].category}`);
    }