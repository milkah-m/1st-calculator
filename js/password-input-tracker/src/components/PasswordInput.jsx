// 1. PasswordInput:
// Create PasswordInput React component 
// Render an <input> with a password type

//2. PasswordInput:
// Add a change event to the <input>

// 3. Create a handleChange function in PasswordInput
// Add a console.log to print out “Entering password…”

//1. imports

import React from "react"; //use state allows me to update the state


//2. component creation
function PasswordInput(){ 
    function handleChange(e){
        console.log("Entering password...");
        
    }
    return(
        <input type="password" onChange={handleChange} />
    )
}

export default PasswordInput

