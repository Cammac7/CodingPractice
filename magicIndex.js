//a magic index in an array A[0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

var myArray = [2,2,2,4,5,6,7]

function magicIndex(inputArray, start, end){
    console.log(inputArray);
    var index = Math.floor((start+end)/2);
    console.log("start: "+start+"  "+"end: "+end);
    if(start === end){
        if(inputArray[index] !== index){
            return false;
        }
    }
    if(inputArray[index] === index){
        console.log("returned true");
        return true;
    }
    else if(inputArray[index] < index){
        return ((magicIndex(inputArray,0,inputArray[index]))||magicIndex(inputArray,index,end));
    }
    else if(inputArray[index] > index){
        return ((magicIndex(inputArray,0,index-1))||magicIndex(inputArray,index+1,end));
    }
    return false;
}

console.log(magicIndex(myArray,0,myArray.length-1))