STEP 1: search functionality for a word
   //design input box in html: done
   //use fetch in js to get api
     1. write async function
        //how shoukd i write the third line of the fetch if i just want it to display data?
           - console.log the data
        // no .then needed for await async
        //why is my data not showing when i test??
           - hahahahaha i hadn't linked my js document LOLLLZZZZZ
        //is it better practice to use script defer or to place script at the bottom of body?
           - defer is better because it allows my HTML to download my script in parallel with the HTML parsing and then execute it after my DOM is fully built :)
        //where exactly in my html document should the script defer go?
           - inside the head below title
        //yup it definitely was the linking or lack thereof lol that was the problem. nowwww... my question is... how do i get it to show me just the defninition nice and clean without this whole object thingamajig. i know it has to dow ith object iteration, i will check on my previous document but lemme first finish designing the error section of my document
        //how do i design the error catching block of my async function?
          - implement the error display into html
        //basic async function is done
    2. connect function with input
       //how do i tell it that word is the user's input??
       //i need a click event listener for the search button not an input one...
       // is it good practice to use a type submit button for a text type input within a form field? or does it not matter?
          - it is BEST practice because it allows the form to submit when he  utton is clicked or when the user presses enter in the text input. also additional fun fact. form>input>submit button is appropriate for search features because forms are semantically appropriate for user action that triggers a response aaaaand also cause of the enter story which gives us happy clappy users
       // but so does this mean that if i use action and method that i don't have to use event.preventDefault() and what do action and method do anyway?? are they strictly necesssary?
          //answer: since i am using fetch i don't need action and method. action tells my html where to get the info from and method tells it how to get it. to be honest, i don't completely get it, but i will eventually... for now the point is, don't use them cause i am handling with fetch 
          //for forms add the submit event listener to the form not to the button
          //do i need to put in event as a param for the event handler function to implement event.preventDefault?
          //okay, i know i need to create a function that holds some sort of logic for the display but i am just wondering, why is it not giving me anything when i input a word into the serach box?
          //what am i missing here...? i reckon it has something to do with my input.
              - fetch does not display anything. i need to extract the info from it and this is the point of the display function. this is why, i am not getting anything and this is the main thing that i was missing
              - how do i display an object with its keys and values?? does object.properties do that?
                 //there's nothing like object.properties but i can use a combination of a for...of operator and object.entries to convert an object into an array and then log it in object format
              - how do i exclude certain properties of an object from displaying when i want to access an object as a whole?
                 //object.entries converts an object into an array of key-value pairs
                 //how do i get the same value if it is in two objects?

                                            //STRATEGIC QUESTIONS//
1. i just remmebered that forEach doesn't return a value, so how do i extract the text and the audio?
   //i could give the object key the value of the result

2. at the point of object definition, do object values have to be strings? if not why am i getting the undefined error??
   //the thing is that they have to be real values, they cannot be undefined placeholders. so now i have used strings

3. can an object be text content?
   //not directly because js will convert it to a string using its .toString method and this is why i get object object
   //to combat this, i use JSON.stringify(object, null,2) null,2 formats with indentation for readbility purposes

4. can i set a variable as the key of an object?
   //yes i can by using square brackets
   //

5. how do i tell my function, always give me the value of the key with this name?
   //

6. how do i get my object to display without using text content

7. how about creating an li for display and seeing how it goes?

8. how do i log all the elements of an array dynamically? for a function where the array length will defer?

9. what does argument expression expected mean in my code?

10. how do i say if a value is empty in my code, then skip it? if an object value is an empty array? if(?==={})

11. can i do this with a for...of loop??: for (const key in obj)? for(const key of obj)? valid or no??

12. how about when this object values are part of a larger object that is part of an array of objects and i am iterating through the whole array?? in my case the empty arrays are in several different objects that are part of a larger array of objects. do i still need to use for...in or is there a faster method??

13. is continue a js method that skips over?

14. can i tell my iterator to reads what is in arrays too so that they don't appear as object Object. because everything else works fine but i have my object OBJECT. how do i get rid of this?
    //by using json.stringify for the values.

15. okay stringify works but it is canceling out my cancel empty string display logic, why is this??
   //check for empty strings and empty objects as well...

16. i am still getting empty arrays even with checking for all the different emptinesses. what gives??
   //because i didn't do anything to actually get rid of the values, i simply skipped over them and since i am displaying the object then they still get their time in the sun. using delete is what does the task viproper

17. ouuukaaayyy... so now i need to figure out HOW to display this definition section. it has properly done my head in. here's what i want:
  - to log each meaning as a single object with
    : part of speech
    : definition
    : synonyms and antonyms if there are any
    : examples if there are any
    : exclude any empty keys
    : have my function dynamic so that it works with words with different number of meanings and some with empty keys and others not
- to be honest, i have been on this for hours and i can't quite crack how to do it seamlessly at once and i know there is a way to do so. this is the part hwere i ask chat as much as i am hesitant to do so. Father, inventor of chat please give me the staying power and presence to internalize whatever i learn
- meanings is an array containing pos, definitions, and occassionally some synonyms, antonyms, and examples
- create a function to remove empty properties: my isEmpty and cleanedObject functions both do that

18. how do i get my api response out of my fetcher function?


   - 

PART 1 OF MY OBJECT
  1. the actual word: i get it using array iteration methods