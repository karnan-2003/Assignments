

function outer (){
    let counter = 0 ;
    return function inner(){
        counter++;
        console.log("counter: " , counter);

    };
}

let count = outer();
