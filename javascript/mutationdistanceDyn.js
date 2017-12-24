var mybank = ["GAAAAAAA","AAGAAAAA","AAAAGAAA","GGAAAAAA"];


function findMutationDistance(start, end, bank){
    var hash = {};
    hash[end] = 0;
    if(bank.indexOf(start)===-1){
        bank.push(start);
    }
    hash = buildTable(end,bank,hash,0);
    if(hash[start] === undefined){
        console.log(-1);
        return -1;
    }
    else{
        console.log(hash[start]);
        return hash[start];
    }
}

function buildTable(eGene,geneBank,hash,build){
    build = build+1;
    var filterBank = geneBank.filter(function(el){
            if(hash[el]!== undefined){return false;}else{
            return true;
            }
        });
    var oneAwaySet = filterBank.filter(function(el){
            var differences = 0;
            for(var i=0; i<eGene.length;i++){
                if(el.charAt(i) !== eGene.charAt(i)){
                    if(++differences >1){
                        return false;
                    }
                }
            }
            return true;
        });
    for(e of oneAwaySet){
        hash[e] = build;
    }
    for(e of oneAwaySet){
        buildTable(e,filterBank,hash,build);
    }
    return hash;
}
findMutationDistance("AAAAAAAA","GGAAAAAA",mybank);
/*
function recurseMut(sGene, eGene, geneBank, hash){
    console.log(sGene);
    console.log(geneBank);
    if(geneBank.indexOf(eGene)===-1){
        return -1;
    }
    else if(sGene === eGene){
        return 0;
    }
    else if(hash[sGene] !== undefined){
        return hash[sGene];
    }
    else{
        var distance = -1;
        var filterBank = geneBank.filter(function(el){
            var differences = 0;
            if(el === sGene){return false;}else{
            for(var i=0; i<sGene.length;i++){
                if(el.charAt(i) !== sGene.charAt(i)){
                    if(++differences >1){
                        return false;
                    }
                }
            }
            return true;
            }
        });
        var smallBank = geneBank.filter(function(el){
            return (el===sGene) ? false : true;
        });
        console.log(filterBank);
        for(var e in filterBank){
            var numMuts = recurseMut(filterBank[e],eGene,smallBank,hash);
            hash[sGene] = numMuts+1;
            //console.log(sGene+"   "+hash[sGene]);
            if(numMuts > -1){numMuts = numMuts+1;}
            if(numMuts > distance){
                console.log(distance);
                distance = numMuts;
            }
        }
        return distance;
    }
}
*/
//console.log(findMutationDistance("AATTGGCC","BBBBBBBB",mybank));