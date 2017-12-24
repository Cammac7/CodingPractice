//count the number of vowels and consonants in a string

var myString = "Hellsdfn&(%Ed3wubASoicsd cdcd;;?/!@!@o World";

function countVandC(inputString){
    var vowels = [];
    var consonants = [];
    vowels = inputString.match(/[aeiou]/gi);
    consonants = inputString.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    console.log("vowels: "+vowels.length);
    console.log("consonants: "+consonants.length);
    console.log(consonants);
}

countVandC(myString);