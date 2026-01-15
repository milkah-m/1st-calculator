// SubmitButton
// Create a SubmitButton React component
// Render a <button> with the text “Submit Password”

// SubmitButton
// Add a mouse enter event to the <button>
// Add a mouse leave event to the <button>

// Create a handleEnter function to SubmitButton
// Add a console.log to print out “Mouse Entering”

// Create a handleLeave function to SubmitButton
// Add a console.log to print out “Mouse Exiting”


//1. imports
import React from "react";

//2. component creation
function SubmitButton(){

    function handleEnter(){
        console.log("Mouse Entering");}

    function handleLeave(){
        console.log("Mouse Exiting");
        
    }

        
    
    return(
        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Submit Password</button>
    )
}

    export default SubmitButton