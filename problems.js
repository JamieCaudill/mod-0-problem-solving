// Challenge 4

var verbs = ["bowling", "swimming", "fishing", "read"]

for (var i = 0; i < verbs.length; i++) {
    var words = verbs[i];
    if (words.includes("ing")) {
        console.log(words);
    }
}

// Challenge 5

var travel = ["Italy", "Brazil", "Colombia", "Aspen"];
var place = travel.sort();
console.log(place)

for (var i = 0; i < place.length; i++) {
    console.log(`I'm going to ${place[i]}`);
}
