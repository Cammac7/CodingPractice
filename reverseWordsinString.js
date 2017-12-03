var myString = "Reverse words in string";


function reverseWords(inputString){
	var outputString ="";
	var mytable =[];
    console.log(mytable);
	var length = inputString.length-1;
	var indexleft =0;
    var temp;
    var output2;
    var count =0;
	for(var i = 0; i < length; i++){
		if(inputString.charAt(i) === " "){
            console.log(inputString.substr(indexleft,i-indexleft));
            temp = inputString.substr(indexleft,i-indexleft);
            mytable.push(temp);
            indexleft = i+1;
        }
        if(i === length-1){
            mytable.push(inputString.substr(indexleft,i));
        }
        console.log(mytable);
    }
    for(e in mytable){
        outputString = outputString.concat(mytable.pop());
        outputString = outputString.concat(" ");
    }
    return outputString;
}

console.log(reverseWords(myString));