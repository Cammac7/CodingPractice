var string1 = "hello";
var string2 = "wolrd";
var string3 = "hellworldo";

function isShuffle(s1, s2, s3){
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    s3 = s3.toLowerCase();
    if(s1.length === 0 && s2.length === 0 && s3.length === 0){
        return true;
    }
    else if(s1.charAt(0)===s2.charAt(0)){
        var j = 0;
        while(s1.charAt(j)===s2.charAt(j)){
            j++;
        }
        if(s1.charAt(j)===s3.charAt(1)){
            return isShuffle(s1.slice(1),s2,s3.slice(1));
        }
        if(s2.charAt(j)===s3.charAt(1)){
            return isShuffle(s1,s2.slice(1),s3.slice(1));
        }
        else{
            return false;
        }
    }
    else if(s1.charAt(0)===s3.charAt(0)){
        return isShuffle(s1.slice(1),s2,s3.slice(1));
    }
    else if(s2.charAt(0)===s3.charAt(0)){
        return isShuffle(s1,s2.slice(1),s3.slice(1));
    }
    else{
        return false;
    }
}

console.log(isShuffle(string1,string2,string3));