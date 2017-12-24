var sortedarray = [3,4,5,6,8,9,11,15,20];


function BinarySearch(inputArray, inputValue){
    var minIndex = 0;
    var maxIndex = inputArray.length-1;
    var midIndex = Math.floor((maxIndex-minIndex)/2);
    
    while(midIndex!=0){
        if(inputValue > inputArray[midIndex]){
            minIndex = midIndex+1;
            midIndex = maxIndex-(Math.floor((maxIndex-minIndex)/2));
        }
        else{
            maxIndex = midIndex;
            midIndex = Math.floor((maxIndex-minIndex)/2);
        }
    }
    if(inputValue == inputArray[maxIndex]){
        return maxIndex;
    }
    else if (inputValue == inputArray[minIndex]){
        return minIndex;
    }
    else{
        return false;
    }
}


console.log(BinarySearch(sortedarray,20));

function testFunct(inputArray, inputValue){
    return true;
}