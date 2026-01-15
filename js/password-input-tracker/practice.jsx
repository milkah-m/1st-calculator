import React, { useState } from "react"; //this allows for the state to be modified?

function PasswordInput({ password, setPassword }) { //password is current state, setPassword is the function that will update it
  //though i honestly feel like i am just quoting chat. what does this actually really mean. i think i get it but nimebakia kidogo
  //to completely have full revelation...
  function handleChange(e) { //taking in the event object as a param for context of what is happening
    setPassword(e.target.value); //updates state to the current value of the input
    console.log("Typing password:", e.target.value); //log to the console the message of typing password aaand the current value
    //why can't we just log password since it is the current state?
  }

  return <input type="password" onChange={handleChange} value={password} />; //let the value of the input be password
  //is password the same as e.target.value
}

export default PasswordInput;


//1. next adventure: please break down for me step by step how to add an event to an element that i am rendering in react 

//im