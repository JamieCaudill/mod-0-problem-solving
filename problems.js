// Challenge 4

var verbs = ["bowling", "swimming", "fishing", "read"]

for (var i = 0; i < verbs.length; i++) {
    var words = verbs[i];
    if (words.includes("ing")) {
        console.log(words);
    }
}