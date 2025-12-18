import { useState } from "react";

function InputBox(){
    const[text, setText]=useState(0);
    return(
        <div style={{margin:"20px"}}>
            <h2>2.Input Box:</h2>
            <input type="text" placeholder="Enter Something.!" value={text} onChange={(e)=>setText(e.target. value)} />
        <p>You typed={text}</p>
        </div>

    );
};
export default InputBox;