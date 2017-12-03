var mystring = "hello";

function allPerms(inputString){
    var last = inputString.slice(-1);
    var outputArray = [];
    if(inputString.length <=1){
        outputArray.push(inputString);
        return outputArray;
    }
    else{
        var smalArr = allPerms(inputString.substr(0,inputString.length-1));
        outputArray.concat(smalArr);
        for(var word in smalArr){
            for(var char=0; char<=smalArr[word].length; char++){
                outputArray.push(smalArr[word].slice(0,char)+last+smalArr[word].slice(char));
            }
        }
        var seen = {};
        outputArray = outputArray.filter(function(item){
            return (seen.hasOwnProperty(item)) ? false : (seen[item]=true);
        });
        return outputArray;
    }
}

console.log(allPerms(mystring));
