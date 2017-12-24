var sortedarray = [1,2,4,5,10,23,34,45,56,78,88,98,123,64356,null];
var submitnumber = 60;

var stringArray = sortedarray.toString();
document.write(stringArray);
document.write("<br>");

insertNum(submitnumber);

stringArray = sortedarray.toString();
document.write(stringArray);


function insertNum(newNum) {
    var index = sortedarray.length-2;
    while(index>=0 && sortedarray[index]>newNum){
        sortedarray[index+1] = sortedarray[index];
        index--;
    }
    sortedarray[index+1] = newNum;
    return sortedarray;
}
