async function fetchData(){
    try{
        let respone = await new Promise((resovle)=>{
            setTimeout(()=>resovle("Data transfor successfully"), 3000);
        })

        console.log(response);
        
    }catch (err){
        console.log("Error:", err);
        
    }finally{
        console.log("Operation Completed");
        
    }

}

fetchData()