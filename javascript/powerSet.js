var mySet = [1,2,3,4,5];

function powerSet(inputSet){
    var arrofSets = [];
    var memo = [];
    memo[0] = [[]];
    memo[1] = [[],[inputSet[0]]];
    memo[2] = [[],[inputSet[0]],[inputSet[1]],[inputSet[0],inputSet[1]]];
    for(var i = 3;i<=inputSet.length;i++){
        memo[i] = [];
        var tempArr = memo[i-1];
        for(var e of tempArr){
            memo[i].push(e.concat(inputSet[i-1]));
        }
        memo[i] = memo[i].concat(memo[i-1]);
    }
    return memo[inputSet.length];
}

console.log(powerSet(mySet));