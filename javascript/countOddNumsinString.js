var myString = "1,2,3,4,5,6,7,8,9,53,85,56,21,11,14";

function countOdds(inputString){
    var arr = inputString.split(",");
    console.log(arr);
    var count =0;
    for(var e in arr){
        if(isOdd(parseInt(arr[e]))){
            count++;
        }
    }
    return count;
}
function isOdd(number){
    return number%2;
}

console.log(countOdds(myString));