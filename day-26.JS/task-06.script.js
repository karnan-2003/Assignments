// rest operator

function sum(...numbers){
    return numbers.reduce((a,b)=>a+b)
}
console.log(sum(11,22,45,67));
