// Combine two arrays using concat() or spread syntax [...a, ...b]:

// // You imagine in the forest:

// concat():

let animals = ["Lion","Tiger"];
let insects = ["Butterflys","Eagle"];

let forest = animals.concat(insects);

console.log(forest);

// spread syntax:

let veg =["Sambar satham", "Rasam satham"];
let nonveg = ["chicken-65","Mutton"]

let foods=[...veg,...nonveg];

console.log(foods);



