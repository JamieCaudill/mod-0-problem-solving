// Challenge 5

// Write code that sorts destinations alphabetically and prints a statement using interpolation.

// Create an array of destinations.
var destination = ["Peru", "Sri Lanka", "Haiti", "Timbuktu"];
// Use the sort method to sort the destinations alphabetically and store them in a new array.
var travel = destination.sort();

// Use a for loop to iterate through each element in the array.
for (var i = 0; i < travel.length; i++) {
    // Log a statement that interpolates each element.
    console.log(`I've been to ${travel[i]}`);
}

// Log the lyrics of a great song.
console.log ("I've been everywhere man");