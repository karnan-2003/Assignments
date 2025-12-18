import { useState } from "react";

function EvenOdd(){
    const[number,setNumber]=useState("")
    return(
        <div>
            <h2>4.Even or Odd:</h2>
            <input type="text" placeholder="Enter a number.!" value={number} onChange={(e)=>setNumber(e.target.value)} />
            {number !==""&&(
                <p>
                    result:{number%2===0?"Even":"Odd"}
                </p>
            )}
        </div>
    );
};

export default EvenOdd;