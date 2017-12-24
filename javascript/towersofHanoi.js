var tower1 = [10,9,8,7,6,5,4,3,2,1];
var tower2 = [];
var tower3 = [];

function moveDisks(startTow,midTow,endTow,n){
    if(n<=0){
        return;
    }
    if(n===1){
        endTow.push(startTow.pop());
    }
    if(n===2){
        midTow.push(startTow.pop());
        endTow.push(startTow.pop());
        endTow.push(midTow.pop());
        
    }
    else if(n>2){
        moveDisks(startTow,endTow,midTow,n-1);
        endTow.push(startTow.pop());
        moveDisks(midTow,startTow,endTow,n-1);
    }
}

moveDisks(tower1,tower2,tower3,10);
console.log(tower1);
console.log(tower2);
console.log(tower3);