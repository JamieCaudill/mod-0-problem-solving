// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!


var sentence = "Turing is the best";

// Create a function that converts a string of words into an array of words. 
function capitalizeFirstLetter(string) {
    //convert string to array
    var convert_string = string.split(" ");
    // define empty array to store capitalized words
    var word = [];
        // for loop to iterate through elements
        for (i = 0; i < convert_string.length; i++) {
            // capitalize first letter
            var first_letter = (convert_string[i].charAt(0).toUpperCase());
            // slice the rest of the word
            var other_letters = convert_string[i].slice(1);
            // combine first letter with rest of word
            var cap_word = first_letter + other_letters;
            // push words into array
            word.push(cap_word);           
        }
    // convert array back into string using " " separator and return to word array
    return word.join(" ");
}

console.log(capitalizeFirstLetter(sentence));