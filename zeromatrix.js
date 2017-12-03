var matrix = [];
var cols = 5;
var rows = 5;
for(var i =0; i< rows; i++){
    matrix[i] = [];
    for(var j=0; j<cols; j++){
        matrix[i][j] = Math.floor(Math.random()*10);
    }
}
console.log(matrix);

var rwZero = [];
for(var s =0; s<rows;s++){
    rwZero.push(0);
}
var zeroRows = [];
var zeroCols = [];
for(var i =0; i< rows; i++){
    for(var j=0; j<cols; j++){
        if(matrix[i][j] === 0){
            zeroCols.push(j);
            zeroRows.push(i);
        }
    }
}
var seen = {};
zeroRows = zeroRows.filter(function(item){
    return seen.hasOwnProperty(item) ? false : seen[item] = true;
});
var seen2 = {};
zeroCols = zeroCols.filter(function(item){
    return seen2.hasOwnProperty(item) ? false : seen2[item] = true;
});

for(var i =0; i< rows; i++){
    for(var e in zeroCols){
        matrix[i][zeroCols[e]] = 0;
    }
}
for(var k in zeroRows){
    matrix[zeroRows[k]] = rwZero;
}
console.log(matrix);
