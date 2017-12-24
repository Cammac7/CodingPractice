[25,10,5,1]


var cents = 5;

function makeChange(inputCents){
    var denoms = [25,10,5,1];
    return numWays(inputCents,denoms,0);
}


function numWays(inputCents,arrayDenoms,index){
	if(index >= arrayDenoms.length-1){
        return 1;
    }
    var coin = arrayDenoms[index];
    var ways = 0;
    for(var i=0; i*coin <= inputCents;i++){
        var amountRemaining = inputCents-(i*coin);
        ways = ways+numWays(amountRemaining,arrayDenoms,index+1);
    }
    return ways;
}

console.log(makeChange(30));

