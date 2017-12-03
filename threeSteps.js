var steps = 60;

function numWaysUp(numSteps){
    var numWays = 0;
    var memo = [];
    memo[0]=0;
    memo[1]=1;
    memo[2]=2;
    memo[3]=4;
    for(var i =4; i<=numSteps;i++){
        memo[i] = memo[i-1]+memo[i-2]+memo[i-3];
    }
    numWays = memo[numSteps-1]+memo[numSteps-2]+memo[numSteps-3];
    return numWays;
}

console.log(numWaysUp(steps));