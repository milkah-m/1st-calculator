                                              //GOAL//
1. to create an spa that returns the definition of words with synonyms, pronunciation and audio features. all this happens without page reload. so help me God.
2. Search for Words: Allow users to input a word into an HTML form and fetch its definition from an external dictionary API.
   //input event listener that calls fetcher function
   //how will i display my words without being ugly and displaying that entire object
   //
3. Display Definitions: Dynamically show the word’s definition, part of speech, and example usage on the same page without a reload.
4. Style the Page: Use JavaScript to dynamically update the CSS, highlighting saved words or changing themes for better readability.
5. Error Handling: Display an error message if a word is not found or if the API request fails.

STEP 1: design html file
    1. how does the form feature work?
    2. how to place the submit button below the input field?
    3. i don't get where the placeholder elements for word definitions and audio playback should be. does it not come as a package? like can I really determine where they will go? i simply don't get this part...

STEP 2. create async function for fetching
    1. word will be the variable for whatever is input into the search box. how will i go about this??
    2. for await, do i use .then?? i feel like NOT, the 3rd line of the fetch thing was not .then, what is it??
       - keep in mind that for await i need to assign variables because the system doesn't magically know stuff, i need to tell it who it is we are dealing with. for the third line in the other one, i used a function but i could potentially use console.log
