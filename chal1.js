// Write code that iterates through an array and only returns strings of four characters.

// Create an array.
var moods = ["mood", "happy", "sad", "open"] ;

// Create a for loop that iterates through each element in the array.
for (var i = 0; i < moods.length; i++) {
    // Create a conditional that checks if the length of each element is four characters.
    if (moods[i].length === 4) {
        // Log elements of four characters.
        console.log(moods[i]);
    }
}
