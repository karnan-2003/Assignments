import { useState } from "react";

function Count(){
    const[count, setCount]=useState(0);
    return(
        <div style={{marginTop:"10px"}}>
            <h2>1.Counter:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)} style={{marginLeft:"10px"}}>Decrease</button>
        </div>
    );
};

export default Count;
