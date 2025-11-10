// Try...Catch  => Error:

try{

    let result = 10/0;
    console.log(result);
    

}
catch (err){
    console.log("An Error occurred:" + err.msg);
    

}finally{
    console.log("Always excutes.");
    
}


