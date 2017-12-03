var myArrayBig = ["Bill","Bobb","Joe","Jack","Mary"];
var myArraySmall = ["Bill", "Joe", "Mary"];

var printB = myArrayBig.toString();
document.write(printB);
document.write("<br>");
    
isSubset(myArraySmall,myArrayBig);

function isSubset(A, B){

var hash ={};
    
for(var i=0; i < B.length-1; i++){
     hash[B[i]] = true;
}

var j = 0;
while (j < A.length-1){
	if(hash[A[j]] == null){
	document.write("array IS NOT a subset");
    document.write("<br>");
    return false;
	}
	j++
}
document.write("array IS a subset");
return true;
    
}