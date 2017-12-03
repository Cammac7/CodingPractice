var myA = [1,4,7,8,18,25,45,67,88,100,234,45346];
var myB = [3,6,11,19,56,66,77,89,98,99,439,939];



function merge2(array1, array2){
    var totalArray = array1.concat(array2);
    var mergedArray = MergeSort(totalArray);
    return mergedArray;
}

function MergeSort (inputArray){
    if(inputArray.length <= 1){
        return inputArray;
    }
    else {
        var halfLength = inputArray.length/2;
        var i = Math.floor(halfLength);
        var subArrayL = [];
        var subArrayR = [];
            subArrayL = inputArray.slice(0,i);
            subArrayR = inputArray.slice(i);
        return merge(MergeSort(subArrayL), MergeSort(subArrayR));
    }

}

function merge (inputA1, inputA2){
    var L1 = inputA1.length;
    var L2 = inputA2.length;
    var L1step = 0;
    var L2step = 0;
    var outputArray = [];
    var Ostep = 0;
    
    while(L1step < L1 || L2step < L2){
        if((inputA1[L1step] < inputA2[L2step]) || L2step == L2){
            outputArray[Ostep] = inputA1[L1step];
            L1step = L1step+1;
            Ostep = Ostep+1;
        }
        else{
            outputArray[Ostep] = inputA2[L2step];
            L2step = L2step+1;
            Ostep = Ostep+1;
        }
    }
       return outputArray; 
    }

var stringA = myA.toString();
var stringB = myB.toString();
document.write(stringA);
document.write("<br>");
document.write(stringB);
document.write("<br>");
var finalComb = merge2(myA,myB);
document.write("<br>");
console.log(finalComb);
var stringC = finalComb.toString();
document.write(stringC);
