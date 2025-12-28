//1. fetcher logic
async function fetcher (word){//i created a function to fetch the api
    try { const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`) // fetched it inside a try block
      //of an async function aaaaand used the word param so i need to listen for the submission of this form
          const data = await response.json() //awaited the parsing of the data
        // displayResults(data) //honestly i think i should just remove this line because right now i have no idea what it is doing
          return data
        
    } catch (error) { //my error catching block
        const errorMessage = document.getElementById("results-container") //i get the resultss-container by id
        errorMessage.textContent = "There was an error retrieving the information. Please try again later." //i give it text content
        console.error(error, errorMessage) //for troubleshooting, i log the error to the console
        
    }
}

//2. display logic

function displayResults (data){ //i created a function to display the results
    const entry = data[0];
    const results = document.getElementById("results-container") //here i was trying to figure out if i should use a loop to iterate through the entry array
    results.innerHTML = ""

    entry.meanings.forEach(meaning =>{
        const h3 = document.createElement("h3");
        h3.textContent = meaning.partOfSpeech;
        results.appendChild(h3);

    meaning.definitions.forEach(def => {
        const p = document.createElement("p");
        p.textContent = def.definition;
        results.appendChild(p)
    })
    })
        
    //
//3. cleaning functions
function isEmpty(value) { //function to check for empty entries in my object
  return ( // telling it when to return if:
    value === null || //the value is null
    value === undefined ||  //the value is undefined
    (typeof value === "string" && value.trim() === "") ||  // catches "   " the value is an empty string
    (Array.isArray(value) && value.length === 0) ||        // empty array // the value is an empty array
    (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) // empty object //the value is an empty object
  );
}

function cleanObject(obj) { //creating an extra helper function to clean the object
  const result = {}; //start off with an empty object
  for (const [key, value] of Object.entries(obj)) { //use a for of loop to iterate through the entries
    if (!isEmpty(value)) { //if the value is not empty, that is it does not meet the criteria for the isEmpty function
      result[key] = value; //name the key of the object and set it equal to the value
    }
  }
  return result; //return that object and i assume that these are the objects with content
}

//4. processor function
function processMeanings(meanings){ //created a function that processes the meanings of the dictionary entry and cleans them up
const cleanedMeanings = [] //is this array being used at any point? cause it seems to be similar to the other one that i was wondering
//about. aaaahhh yes it is actually related to cleaned definitions because cleaned definitions is the variable that actually stores
//this return value
for(const meaning of meanings){ //create a for of loop to get into the meanings array
const partOfSpeech = meaning.partOfSpeech //target the part of speech and variable assign
 for(const definition of meaning.definitions){ //another for loop to go into the meanings
    //get the definitions
const clean = cleanObject(definition) //clean the gotten definitions using cleanObject
    clean.partOfSpeech = partOfSpeech //add part of speech to that object
cleanedMeanings.push(clean) //push the organization to the array created at the beginning
 }
}
return cleanedMeanings //return a value of the clean array
}
// const cleanedDefinitions = processMeanings(meanings) //honestly this was just me copying. i can't really tell you the point

cleanedDefinitions.forEach(def => //here i am using a forEach loop to iterate through my cleaned array
{const results = document.getElementById("results-container"); //get the div to display the definitions in
for (const [key, value] of Object.entries(def)){ //iterate through all the definitions
const p = document.createElement("p") //create a p element to display the results though this sounds counterintuituve cause i have al
//already done that there with results.textcontent                                                                                                                   ontemt
p.textContent = `${key}: ${Array.isArray(value) ? value.join(", "): value}` //here i make the text content of my paragraph to be an object
  //the key and the value of the object.entries' cleaned definition array. if the value is an array, convert it into a string first
}
results.appendChild(p) //append the child to my container
})}

//5. add event listener
document.addEventListener("DOMContentLoaded", () => { //here i've loaded my DOM content to ensure that it is done parsing before
    //my js runs
 document.getElementById("search-form").addEventListener("submit", async (event) =>{   //here i get the form element by its id then i 
      //add a submit event listener and take in event as a param
    event.preventDefault(); //here i prevent default event behavior of reloading
    const input = document.getElementById("search-query") //here i define the input to be whatever is typed into the box
    const word = input.value //here i assign the input value to a variable
    const data = await fetcher(word); //here i call the fetcher function
    displayResults(data)

}
   )}
)





           
   
 
    

