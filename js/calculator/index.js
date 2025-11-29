//CREATING A HISTORY STORAGE ARRAY
const history = []

//CREATING A CALCULATION STORAGE FUNCTION
function calculationStore (a, b, operator, x){
    let calculationObject = {}
    calculationObject.operand1 = a
    calculationObject.operand2 = b
    calculationObject.operator = operator
    calculationObject.result = x
    history.push (calculationObject)
}

//CREATING AN ADDITION FUNCTION
function addition (a, b){
    let x = (a + b)
calculationStore(a, b, "+", x)
      return x
    }

//CREATING A SUBTRACTION FUNCTION
 function subtraction (a, b){
            let x = (a - b)
calculationStore(a, b, "-", x)
     return x}
            

//CREATING A MULTIPLICATION FUNCTION
 function multiplication (a, b){
        let x = (a * b)
calculationStore(a, b, "*", x)
return x
    }

//CREATING A DIVISION FUNCTION
    function division (a, b){
        if (b === 0) {return ("Cannot divide by zero")
        }
        let x = (a / b)
calculationStore(a, b, "/", x)
      return x;
    }

//CREATING A FUNCTION TO DISPLAY THE HISTORY
function historyDisplayer (){
    if (history.length === 0) {
        return ("You have not performed any calculations. Please perform your first calculation to view your history ")
    }
  let result = ""
//here i am creating a for loop to tell js to go through my history array one object at atime and starting at zero because the array starts at index 0
for (let i = 0; i < history.length; i++) {
// this part gets the current object from the array based on the value of i which makes it that much easier to work with the array
    const storedCalc = history[i];
    // here i am adding this text to the result string
    result += storedCalc.operand1 +  " "  + storedCalc.operator + " " + storedCalc.operand2 + " = " + storedCalc.result + "<br>" }
 return result
}



//USING CONSOLE.LOG TO TEST MY CODE
console.log(addition(1, 1))
console.log(subtraction(1, 1))
console.log(multiplication(1, 1))
console.log(division (1, 0))
console.log(division (1, 1))
console.log(historyDisplayer())

const num1Input = document.getElementById ("num1")
const operatorInput = document.getElementById ("operator")
const num2Input = document.getElementById ("num2")
const calcBtn = document.getElementById("calcBtn")
const historyBtn = document.getElementById("historyBtn")
const screen = document.getElementById("screen")

calcBtn.addEventListener("click", function() {
    const a = Number(num1Input.value)
    const b = Number(num2Input.value)
    const operator = operatorInput.value
    let result

    if (operator === "+"){
        result = addition(a, b)
    }
    else if (operator === "-"){
        result = subtraction(a, b)
    }
    else if (operator === "*"){
        result = multiplication(a, b)
    }
    else if (operator === "/"){
        result = division(a, b)
    }
    else {
        result = "Invalid operator!"
    }
    screen.textContent = result
})

historyBtn.addEventListener("click", function() {
    screen.innerHTML = historyDisplayer()
})

