
let myPromise = new Promise ((resolve , reject )=> {
    let success = false ;
    setTimeout (()=> {
        if(success) resolve("task completed")
            else reject('task failed ')
    },2000)
})

myPromise

.then((msg)=> console.log(msg))
.catch((err)=> console.log(err))