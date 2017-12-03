var mybank = ["AATTGGCC","AATTGGCA","AATTTGCA"];
var log = console.log.bind(console);

function findMutationDistance(start, end, bank) {
    if(bank.indexOf(start)===-1){
        bank.push(start);//include start gene in bank if it's not there
    }
    if(bank.indexOf(end)===-1){
        return -1; //if end gene is not in bank, return -1
    }
    if(start === end){return 0;}
    var oneAwaySet = bank.filter(function(el){
        if(el === end){return false;}
        var differences = 0;
        for(var i=0; i<end.length;i++){
            if(el.charAt(i) !== end.charAt(i)){
                if(++differences >1){
                    return false;
                }
            }
        }
        return true;
    });
    var distance = 0;
    while(bank.length >0){
        distance = distance+1;
        bank = bank.filter(function(el){
            if(el === end){return false;}
            else if(oneAwaySet.indexOf(el) !== -1){return false;}
            else{return true;}
        });
        var bankHash={};
        for(e of bank){
            bankHash[e] = true;
        }
        var newAwaySet = [];
        for(e of oneAwaySet){
            if(e===start){
                return distance;
            }
            for(var letter in e){
              	var charArr = ["A","T","G","C"];
                var letIn = charArr.indexOf(e[letter]);
                charArr = charArr.slice(0,letIn).concat(charArr.slice(letIn+1));
                for(char of charArr){
                    var newGene = e.slice(0,parseInt(letter))+char+(e.slice(parseInt(letter)+1));
                    newAwaySet.push(newGene);
                }
            }
        }
        newAwaySet = newAwaySet.filter(function(el){
            if(bankHash[el]===undefined){
                return false;
            }
            else{return true;}
        });
        var seen={};
            newAwaySet = newAwaySet.filter(function(gene){
                return seen.hasOwnProperty(gene) ? false : (seen[gene] = true);
            });
        
        if(newAwaySet.length === 0){
            return -1;
        }
        oneAwaySet = newAwaySet;
    }
    return -1;
}

console.log(findMutationDistance("AATTGGCC","AATTTGCA",mybank));