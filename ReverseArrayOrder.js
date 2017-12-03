var myArray = ["cat", "dog", "dirty bag of dicks", "bucket", "monkey"];

stringArray = myArray.toString();
document.write(stringArray);
document.write("<br>");

reverse(myArray);

function reverse(submitarray){
    var alength = submitarray.length;
    var halflength = alength/2;
    halflength = Math.floor(halflength);
    var temp;
    var i = 0;
    while(alength > halflength){
        temp = submitarray[alength-1];
        submitarray[alength-1] = submitarray[i];
        submitarray[i] = temp;
        alength--;
        i++;
    }
    document.write(submitarray.toString());
}