function isEmpty(value) { //function to check for empty entries in my object
  return ( // telling it when to return if:
    value === null || //the value is null
    value === undefined ||  //the value is undefined
    (typeof value === "string" && value.trim() === "") ||  // catches "   " the value is an empty string
    (Array.isArray(value) && value.length === 0) ||        // empty array // the value is an empty array
    (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) // empty object //the value is an empty object
  );
}

for (const obj of data) { 
  for (const [key, value] of Object.entries(obj)) {
    if (isEmpty(value)) continue; // skip empty values //call the function in my for...of loop
    console.log(key, JSON.stringify(value, null, 2));
  }
}

function isArrayEmpty(arr) { //array that checks that all arrays are actually empty
  return Array.isArray(arr) && arr.every(isEmpty); 
  // confirms if the input is actually an array
  //confirms using the every method and isEmpty as a callback function that all are actually empty

}

function displayPosts(posts){
    
posts.forEach(post =>  //used a for each iterator to go through each element in the posts array
//    const body = document.querySelector("body")
    {const list = document.createElement("li") //created an li element to store the posts

    const title = document.createElement("h1") //created an h1 element for the post titles
    title.textContent = post["title"] //gave the newly created element the text content of the post's title section

    const text = document.createElement("p") //created a p element for the text
    text.textContent = post["body"] //assigned the text content of the new element to be the post's body section
    

    // body.appendChild(title)
    list.append(title, text) //appended both elements to the list
    
    const postList = document.getElementById("post-list") //got the ul by idnfor manipulation
    postList.appendChild(list) //appended the list to the postList

    //ONE THING//: appending to DOM elements is what makes fetched input visible

})
}

//4. displaying the data within the alerts_display div
function displayWeatherData(data){ //taking the fetched data as a param
    clearDisplay() //clearing the previous display
    clearErrorMessage() //clearing any error messages
const alerts_display = document.getElementById("alerts-display") //getting the display element by id

if (data.features.length === 0){ //if the array has nothing
alerts_display.textContent = `No alerts for this state.` //log a message saying that the state has no alerts
return; //return to end the function
}
else{alerts_display.textContent = `${data.title}: ${data.features.length}`} //if it does have content cause the text of the
//alerts-display to be title and the length of the array

data.features.forEach(item => //iterate through the features array using the .forEach operator
{const li = document.createElement("li") //create an li element for display
li.textContent = item.properties.headline //make its text content the headline found within the properties
alerts_display.appendChild(li)}) //display that list

//ONE THING//: i did not invent going into objects, it is a real thing being done aaaaaand it is not too much or too crazy, i need to
  //go into those objects and i need to use .notation and maybe...just maybe an iterator but still use .notation and seemingly manual
  //iteration inside it
}

// objects are removed:

function isEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0)
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

// const cleanedDefinitions = definitions.map(def => cleanObject(def)); //create a new array only with the necessary objects

console.log(cleanedDefinitions); //log the new array

//1. EXAMPLE
function processMeanings(meanings) { //process meanings basically clean them up
  const cleanedMeanings = []; //create an empty array to store the showered meanings

  for (const meaning of meanings) { //use a for...of operator to loop through meanings because it is an array
    const partOfSpeech = meaning.partOfSpeech; //start with part of speech so yes i have to go one by one
    //part of speech wouldn't have an empty entry anyway so i am just assigning it here to use it later

    for (const def of meaning.definitions) { //deal with the definitions array next with a nested for...of loop
      // Clean empty keys from each definition
      const cleanedDef = cleanObject(def); //clean up each definition of any unnecessary emptinesses

      // Include partOfSpeech
      cleanedDef.partOfSpeech = partOfSpeech; //are we adding part of speech to the cleaned array or what is happening here, i 
      //am quite confused to be honest aaaaahhhh so what is happenning is that because an object was created by running cleanObject
      //here partofspeech is being added to that object. that's what's happenning

      cleanedMeanings.push(cleanedDef); //push the gorgeous new object into the cleanedMeanings array
    }
  }

  return cleanedMeanings; //return the array of purity and gorgeousness

  //ONE THING//
    //the reminder that cleanObject creates an object
}

//2. EXAMPLE
const apiResponse = [ /* your API response */ ]; //my api response assigned to a variable
const wordData = apiResponse[0]; // first entry of the dictionary
const cleanedDefinitions = processMeanings(wordData.meanings); //call the process meanings function to process the meanings of the
  //word data

console.log(cleanedDefinitions);
const container = document.getElementById("definitions-container"); //get the definitions-container from the DOM

cleanedDefinitions.forEach(def => { //use the forEach iterator to go through the cleanedDefinitions array but why this one specifically
    //what does it have?? now i know. it has the nice and ready objects
  const defEl = document.createElement("div"); //creating a new div element not sure why but we'll crack it as we go

  for (const [key, value] of Object.entries(def)) { //using a for...of operator for object,=.entries which is are arrays of keys and their values
    const p = document.createElement("p"); //creating a p element
    p.textContent = `${key}: ${Array.isArray(value) ? value.join(", ") : value}`;// let the text content of the p be the key and the
      //value. there is a ternary operator there to say, if it is an array join it into a string and if not just leave it as is
    defEl.appendChild(p); //append the p to the newly created div
  }

  container.appendChild(defEl); //append the newly created div to the parent-container
});


//    const first = input[0]

// const obj = { name: "Alice", age: 25 };  //object in question
// const container = document.getElementById("output"); //div for display

// Object.entries(obj).forEach(([key, value]) => { //use the object.entries feature and the for each iterator through [key], [value] properties
//   const p = document.createElement("p"); //create a p element
//   p.innerHTML = `<strong>${key}:</strong> ${value}`; //set the inner HTML of that p to be the key and its value
//   container.appendChild(p); append the p element to the container
// });

//ONE THING: 