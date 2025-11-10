// Create a function that throws an error when the input number is negative..

function divide(a, b) {
    if (b===0) {
        throw new Error("Cannot divide  by Zero.!");
    }
    return a/b;
    
}

try{
    console.log(divide(20/x));
    
}catch(err){
    console.log("Error occured:", err.msg);
    

}