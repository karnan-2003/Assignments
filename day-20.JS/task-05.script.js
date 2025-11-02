function greet(name){
    console.log("Hello: "+name);
    
}
function userinput(callback) {
    let name="Karnan.";
    callback(name);
    
}
userinput(greet);