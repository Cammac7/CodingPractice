/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var myNums1 = [9,0,3];
var myNums2 = [4,5];
var k = 2;

var maxNumber = function(nums1, nums2, k) {
    var outputArray =[];
    var nums1Shift = [];
    var nums2Shift = [];
    nums1Shift = nums1.slice(1,nums1.length);
    nums2Shift = nums2.slice(1,nums2.length);
    console.log(nums1);
    console.log(nums2);
    console.log(k);
    if(k<=1){
        if(k===0){
            return ArrayNumber(outputArray);
        }
        else{
            var currentNum=0;
            var largestNum =0;
            for(var e in nums1){
                if(nums1[e]>largestNum){
                    largestNum = nums1[e];
                }
            }
            for(var j in nums2){
                if(nums2[j]>largestNum){
                    largestNum = nums2[j];
                }
            }
            k--;
            var pushA = [largestNum];
            outputArray = outputArray.concat(pushA);
            return ArrayNumber(outputArray);
        }
    }
    if(nums1.length === 1 && nums2.length ===1){
        console.log("base hit");
        if(nums1[0]>nums2[0]){
            k--;
            outputArray = outputArray.concat(nums1);
        }
        else{
            k--;
            outputArray = outputArray.concat(nums2);
        }
    }
    else{
        k--;
        console.log("entered ELSE");
        if(maxNumber(nums1Shift,nums2,k)===maxNumber(nums1,nums2Shift,k)){
            console.log("first IF");
            return maxNumber(nums1Shift,nums2Shift,k);
        }
        if(maxNumber(nums1Shift,nums2,k)>maxNumber(nums1,nums2Shift,k)){
            console.log("second IF");
            outputArray = outputArray.concat(nums2[0]);
            k--;
            return maxNumber(nums1Shift,nums2,k);
        }
        else{
            console.log("DID THS RUNS?");
            outputArray = outputArray.concat(nums1[0]);
            k = k-1;
            return maxNumber(nums1Shift,nums2,k);
        }
        console.log("end of first else");
    }
};

var ArrayNumber = function(inputArray2){
    var outputstring = "";
    var outputInt=0;
    for(var e in inputArray2){
        outputstring = outputstring+inputArray2[e];
    }
    outputInt = parseInt(outputstring);
    return outputInt
};

console.log(maxNumber(myNums1,myNums2,k));