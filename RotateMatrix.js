var myMatrix = [];
var rows = 5;
var cols = 5;
for(var i = 0; i<rows;i++){
    myMatrix[i] = [];
    for(var j=0; j<cols;j++){
        myMatrix[i][j] = Math.floor(Math.random()*10);
    }
}

function rotate(inputMat){
    var rows = inputMat.length;
    var cols = inputMat[0].length;
    var half = Math.floor(cols/2);
    var tempright = [];
    var tempbot = [];
    var templeft = [];
    var temptop = [];
    for(var layers = 0; layers < half; layers++){
        for(var r = 0+layers; r<rows-layers;r++){
            tempright.push(inputMat[r][cols-layers-1]);
        }
        for(var c = cols-layers-1; c>=0+layers;c--){
            tempbot.push(inputMat[rows-1-layers][c]);
        }
        for(var r = rows-layers-1; r>=0+layers;r--){
            templeft.push(inputMat[r][layers]);
        }
        for(var c = 0+layers; c<cols-layers;c++){
            temptop.push(inputMat[layers][c]);
        }
        
        for(var r = 0+layers; r<rows-layers;r++){
            inputMat[r][cols-layers-1] = temptop.shift();
        }
        for(var c = cols-layers-1; c>=0+layers;c--){
            inputMat[rows-1-layers][c] = tempright.shift();
        }
        for(var r = rows-layers-1; r>=0+layers;r--){
            inputMat[r][layers] = tempbot.shift();
        }
        for(var c = 0+layers; c<cols-layers;c++){
            inputMat[layers][c] = templeft.shift();
        }
        
    tempright = [];
    tempbot = [];
    templeft = [];
    temptop = [];
    
    }
    console.log(inputMat);
}
console.log(myMatrix);
rotate(myMatrix);