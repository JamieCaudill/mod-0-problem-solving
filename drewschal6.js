var mySentence = "turing is the best"
var words = mySentence.split(" ")

//console.log(words)

for (i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].substr(1)
}

console.log(words.join(" "))