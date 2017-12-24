var steps = 98;
//number of ways to go up steps if you can take one or two=step jumps
function numWays(steps){
    var stairs = new Array(steps+1);
    stairs[0] = 1;
    stairs[1] = 1;
    for(var i=2;i<stairs.length;i++){
        stairs[i] = stairs[i-1]+stairs[i-2];
    }
    return stairs[steps]
}

console.log(numWays(2));