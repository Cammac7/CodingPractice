var queue1 = [];
var queue2 = [];

queue1.push(2);
queue2.push(2);

queue1.push(5);
queue2.push(5);

queue1.push(0);
queue2.push(0);

queue1.push(9);
queue2.push(9);

queue2.push(4);
queue1.push(4);

function areIdenticalQ(inputQ1, inputQ2){
    var lengthQ1 = inputQ1.length;
    var lengthQ2 = inputQ2.length;
    if(lengthQ1!=lengthQ2){
        return false;
    }
    else {
        for(var i=0; i<=lengthQ1; i++){
            var topQ1 = queue1.shift();
            var topQ2 = queue2.shift();
            if(topQ1 != topQ2){
                return false;
            }
        }
        return true;
    }
}

document.write(areIdenticalQ(queue1,queue2));