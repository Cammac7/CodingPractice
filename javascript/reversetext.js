var inputString = "Hello World"


function reverseVowels(inputString){
var arrIndex=[]; 
	var outputStr="";
	for(var i=0;i<inputString.length;i++){
	if(isaVowel(inputString[i])){
	arrIndex.push(inputString[i]);
}
}
	var strArr = inputString.split("");	
	var index = arrIndex.length-1;
for(var i in strArr){
		if(isaVowel(strArr[i])){
			strArr[i] = arrIndex[index];
			index = index-1;
}
}	
	outputStr = strArr.join("");


return outputStr;
}


function isaVowel(inputChar){
	return ['a','e','i','o','u','y'].indexOf(inputChar.toLowerCase()) !== -1}

console.log(reverseVowels("Hello World"));