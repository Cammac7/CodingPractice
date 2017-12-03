var mybank = ["AATTGGCC","AATTGGCA","TATTGGCC","TTTTGGCC","TTTTGGCA","TTTTTGCA","TTTTTTCA","TTTTTTCA","TTTTTTTA","TTTTTTTT","TTTTTTBT","TTTTTTBB","TTTTTBBB","TTTTBBBB","TTTBBBBB","TTBBBBBB","TBBBBBBB","BBBBBBBB"];

function findMutationDistance(start, end, bank){
    var hash = {};
    return recurseMut(start,end,bank,hash)
}

function recurseMut(start, end, bank, hash){
    if(bank.indexOf(end)===-1){
        return -1;
    }
    else if(hash[start] !== undefined){
        return hash[start];
    }
    else{
        var countDistance = -1;
        var filterBank = bank.filter(function(el){
            var differences = 0;
            for(var i=0; i<start.length;i++){
                if(el.charAt(i) !== start.charAt(i)){
                    if(++differences >1){
                        return false;
                    }
                }
            }
            return true;
        });
        var smallBank = bank.filter(function(el){
            return (el===start) ? false : true;
        });
        if(filterBank.length === 0){
            return -1;
        }
        for(var e in filterBank){
            if(filterBank[e] === end){
                return 1;
            }
            else{
                var numMuts = recurseMut(filterBank[e],end,smallBank,hash);
                hash[filterBank[e]] = numMuts;
                console.log(numMuts);
                if(numMuts > countDistance){
                    countDistance = numMuts;
                }
            }
        }
        return countDistance;
    }
}



console.log(findMutationDistance("AATTGGCC","TTTTGGCC",mybank));