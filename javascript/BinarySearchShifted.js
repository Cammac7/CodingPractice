var sortedarray = [5,11,0,1,2,4];



function findMinimum(inputArray){
    var maxIndex = inputArray.length-1;
    var minIndex = 0;
    var midIndex = Math.floor((maxIndex-minIndex)/2);
    
    while (midIndex != maxIndex){
        console.log("Min Index: "+minIndex);
        console.log("Max Index: "+maxIndex);
        console.log("Mid Index: "+midIndex);
        if(inputArray[minIndex] < inputArray[midIndex]){
            minIndex = midIndex;
            midIndex = maxIndex - (Math.floor((maxIndex-minIndex)/2));
        }
        else{
            maxIndex = midIndex;
            midIndex = maxIndex - (Math.floor((maxIndex-minIndex)/2));
        }
    }
    return inputArray[maxIndex];
}

console.log(findMinimum(sortedarray));