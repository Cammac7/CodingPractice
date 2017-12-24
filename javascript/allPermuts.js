var myString = "abb"

function allPermuts(inputString){
    console.log(inputString);
    var arrperms =[];
    if(inputString.length === 0){
        return;
    }
    else if(inputString.length === 1){
        arrperms.push(inputString);
        return arrperms;
    }
    else if(inputString.length === 2){
        arrperms.push(inputString[0].concat(inputString[1]));
        arrperms.push(inputString[1].concat(inputString[0]));
        return arrperms;
    }
    else if(inputString.length > 2){
        var prevPems = allPermuts(inputString.slice(1));
        for(var i=0;i<inputString.length;i++){
            for(var e in prevPems){
                arrperms.push(prevPems[e].slice(0,i)+inputString[0]+prevPems[e].slice(i));
            }
        }
    }
    return arrperms;
}

function filterDups(inputArray){
    seen = {};
    inputArray = inputArray.filter(function(item){
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
    return inputArray;
}
var permArray = allPermuts(myString);
console.log(permArray);
permArray = filterDups(permArray);
console.log(permArray);