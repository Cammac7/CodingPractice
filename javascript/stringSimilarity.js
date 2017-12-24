var myInput = ['ababaa'];


function stringSimilarity(inputs) {
    var finalReturn="";
    for(S of inputs){
        var compares =[];
        var sum = 0;
        for(var i=0;i<S.length;i++){
            compares.push(S.slice(i))
            var j = 0;
            for(j=0;j<compares[i].length;j++){
                console.log(j);
                if(compares[i].charAt(j)===S.charAt(j)){
                    /*console.log(compares[i][0]);
                    console.log(compares[i].charAt(j)+"   "+S.charAt(j));*/
                    console.log(compares[i]+"  "+j);
                    sum = sum+1;
                }else{
                    break;
                }
            }
        }
        console.log(compares);
        finalReturn = finalReturn.concat(sum);
    }
    console.log(finalReturn);
    return finalReturn;
}

stringSimilarity(myInput);