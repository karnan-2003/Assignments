fetch("https://api.github.com/users/karnan-2003")
.then(res=>res.json())
.then(data => console.log(data))
.catch(err=>console.err("error:",err))