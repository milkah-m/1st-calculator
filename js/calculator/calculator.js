/*1. Define the problem: create a js program that
      - performs addition, subtraction, multiplication, and division on two numbers
      - keeps track of all calculations in a history log
      - displays the calculation history upon request 
  2. Determine the Design
       - create simple operations: implement a set of functions that will add, subtract, multiply, and divide 2 numbers and return the result
       - track operation history: implement an empty array to store the history of calculations
       - each calculation object should contain: operands (numbers), operators(+, -, *, /), and results of the calculations
       - a function to add to the history and be used in all of the simple operation functions
       - a function to display the history or inform the user that they have no stored calculations*/

 /*function addition(a, b){
        let x  = (a+b)
        return x}
       
       console.log (addition (1, 1))
       
  
        

   
console.log(multiplication(5, 3))

   

        console.log (division(9, 3))*/

        // create an array to store the history
        // let it be made up of objects
        // i want it to create a new object every time i perform an operation
       
        
       //let historyLogger = (a + b = x)
        //function addToHistory ()
   
   /* a = 5
    b = 6
    x = 11
 
console.log(history)*/

 /*if (addition ()){
       
history.push (object)}*/

/*let additionToHistory = {}
        additionToHistory["operands"] = [a, b]
        additionToHistory["operator"] = "add"
        additionToHistory["result"] = x
        function historyLogger (){history.push (additionToHistory)}*/

const history = []

function addition (a, b) {
    let x = (a+b)
    function historyPusher (){history.push `${a+b} = ${x}`}
    return x
    
 }
       console.log(addition (5, 6))
       console.log(history)
//i don't think nested functions can access global variables
        //how do i get it to give me the whole sum
       // first get it to push to that particular one

       //i want the history to store the whole problem, not just the result. i want it to store 1+1=2. not 2 only */
       //how will it store a list


       /*function addToHistory (){
          history.operands = (a, b);
          history.operator = "add"
          history.result = x
          return history}

           let a = Number
        let b = Number
        let x = Number
const history = [  {operands: (a, b), operator: "add", result: x}
]

 console.log (history)
 function addProductToHistory (product){
            history.push (product)
        }
            function addQuotientToHistory (quotient){
            history.push (quotient)
 */
//optentially could use string concatenation
// GOOOOOOOODDDDDDDD!!!!!!!!!!! how do i make this history thing?

// to make a history storing function. work from the easiest method to the hardest method
//1. store calculations as objects containing operands, an operator, and the result of the calculation
//2. push each calculation to an array
//3. implement an empty array to store the history of calculations
//4. a function that adds to the history and IS USED IN ALL OF THE SIMPLE OPERATION FUNCTIONS
//5. a function to display the history or inform the user that there no stored calculations

//implement the history array
const history = []
//store the addition calculation as an object

//1st and simplest method. push to history using a simple push command
//
/*

function addition (a, b){
    let x = a+b;
    history.push (x)
    
    return x
}*/