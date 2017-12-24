var numPairs = 3;

function parenPerms(num){
    var arrPerms=[];
    if(num === 1){
        arrPerms.push("()");
    }
    else if(num === 2){
        arrPerms.push("()()");
        arrPerms.push("(())");
    }
    else if(num > 2){
        var prevPerms = parenPerms(num-1);
        for(var e in prevPerms){
            var str = prevPerms[e];
            var indicesL = [];
            var indicesR = [];
            for(var i=0; i<str.length;i++){
                if(str[i]==="("){ indicesL.push(i);}
            }
            for(var i=0; i<str.length;i++){
                if(str[i]===")"){ indicesR.push(i);}
            }
            for(k of indicesL){
                for(j of indicesR){
                    if(j>k){
                    arrPerms.push(prevPerms[e].slice(0,k)+"("+prevPerms[e].slice(k,j)+")"+prevPerms[e].slice(j));
                    }
                }
            }
            arrPerms.push(prevPerms[e]+"()");
        }
    }
    var seen = {}
    arrPerms = arrPerms.filter(function(item){
        return seen.hasOwnProperty(item) ? false : seen[item] = true;
    });
    return(arrPerms);
}

console.log(parenPerms(5));