

//CREATING A HISTORY STORAGE ARRAY
const history = []


//CREATING AN ADDITION FUNCTION
function addition (a, b){
    let x = a+b;
//incorporating an object to store the calculation
    let object = {}
    object.operands = [a, b]
    object.operator = "add"
    object.result = x
//creating then calling a function to add the stored calculation to the history array
    function pusher (){history.push (object)}
      pusher()
      return x
    
}

//CREATING A SUBTRACTION FUNCTION
 function subtraction (a, b){
            let x = (a-b)
//incorporating an object to store the calculation
let object = {}
    object.operands = [a, b]
    object.operator = "subtract"
    object.result = x
    //creating then calling a function to add the stored calculation to the history array
    function pusher (){history.push (object)}
     pusher()
     return x}
            

//CREATING A MULTIPLICATION FUNCTION
 function multiplication (a, b){
        let x = (a*b)
//incorporating an object to store the calculation
let object = {}
    object.operands = [a, b]
    object.operator = "multiply"
    object.result = x
//creating then calling a function to add the stored calculation to the history array
function pusher (){history.push (object)}
pusher()
return x
    }

//CREATING A DIVISION FUNCTION
    function division (a, b){
        if (b === 0) {return console.error("Cannot divide by zero")
        }
        let x = (a/b)
//incorporating an object to store the calculation
let object = {}
        object.operands = [a, b]
    object.operator = "divide"
    object.result = x
//creating then calling a function to add the stored calculation to the history array
function pusher (){history.push (object)}
      pusher()
      return x;
    }

//CREATING A FUNCTION TO DISPLAY THE HISTORY
function historyDisplayer (){
    if (history.length === 0) {
        return ("You have not performed any calculations. Please perform your first calculation to view your history ")
    }
    else {
        return (history)
    }
}

//USING CONSOLE.LOG TO TEST MY CODE
console.log(addition(1, 1))
console.log(subtraction(1, 1))
console.log(multiplication(1, 1))
console.log(division (1, 0))
console.log(division (1, 1))
console.log(historyDisplayer())



//CODE COMMENTS
  // - i cannot make object a function because if i call it within the parent function, the variables will not yet have been defined, so it needs to remain a variable
  // - i still feel like there's a better way to display that array
  //let result;
// if (operator === "+") result = add(num1, num2)

