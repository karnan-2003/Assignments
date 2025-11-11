function dotask(callback){
    console.log("Task started..!");

    setTimeout(function(){
        callback();
    }, 3000)

}

function taskcompleted(){
    console.log("Task Completed..!");
    
}

dotask(taskcompleted);