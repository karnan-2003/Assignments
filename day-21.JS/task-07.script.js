// Create an array of students’ ages and find only adults (≥18):

const studentAges=[13,17,30,20,25];

function isAdult(age){
    return age >=18;
}

const adultAges = studentAges.filter(isAdult);

console.log("All student ages :", studentAges);
console.log("Adult age;",adultAges);

