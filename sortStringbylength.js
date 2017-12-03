var s1 = "octop";
var s2 = "yup";
var s3 = "beanstalk";
var s4 = "a";
var s5 = "dang";

var myArray = [s1,s2,s3,s4,s5];

function sortString(inputArray){
    mergeSort(inputArray);
}


function mergeSort(inputArray){
    if(inputArray.length <=1){
        return inputArray;
    }
    else{
        var leftArray =[];
        var rightArray =[];
        var center = Math.floor((inputArray.length/2));
        leftArray = inputArray.slice(0,center);
        rightArray = inputArray.slice(center);
        console.log(leftArray);
        console.log(rightArray);
         return merge(mergeSort(leftArray),mergeSort(rightArray));
    }
}

function merge(inputArray1, inputArray2){
    console.log(inputArray1);
    console.log(inputArray2);
    var outputArray = [];
    var index1=0;
    var index2=0;
    var temp1;
    var temp2;
    while(index1 < inputArray1.length || index2 < inputArray2.length){
        temp1 = inputArray1[index1];
        temp2 = inputArray2[index2];
        if(inputArray1[index1]===undefined){
            outputArray.push(inputArray2[index2]);
            index2 = index2+1;
        }
        else if(inputArray2[index2]===undefined){
            outputArray.push(inputArray1[index1]);
            index1 = index1+1;
        }
        else if((temp1.length < temp2.length) || index2 === inputArray2.length){
            outputArray.push(inputArray1[index1]);
            index1 = index1+1;
        }
        else{
            outputArray.push(inputArray2[index2]);
            index2 = index2+1;
        }
    }
    console.log(outputArray);
    return outputArray;
}

sortString(myArray);