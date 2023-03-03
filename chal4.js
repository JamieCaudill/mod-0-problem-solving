// Challenge 4

// Write code that prints only the words in an array that include the string "ing"

// Create an array of activities including words that include the string "ing"
var activities = ["climbing", "surf", "skiing", "run"];


// Write a for loop that iterates through each element in the activities array
for (var i = 0; i < activities.length; i++) {
    // Create a variable that represents each element individually
    var activity = activities[i];
    // Write a conditional that checks each element for the string "ing"
    if (activity.includes("ing")) {
        // Log elements that include "ing"
        console.log(activity);
    }
}