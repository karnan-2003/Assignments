

function task(){
        console.log("Task complete");
        
}

function ar(Callback){
    console.log("On task");
    setTimeout(()=>{
        Callback();
    },10000);
    

}
ar(task);