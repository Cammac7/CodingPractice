

function buildMatrix(x,y){
    var paintMatrix = [];
    for(var i=0;i<x;i++){
        paintMatrix[i] = [];
        for(var j=0;j<y;j++){
            paintMatrix[i][j] = Math.floor(Math.random()*2);
        }
    }
    console.log(paintMatrix);
    return paintMatrix;
}

function printMatrix(inputMatrix){
    var row = "";
    for(var i=0;i<inputMatrix.length;i++){
        for(var j=0;j<inputMatrix[i].length;j++){
            row = row.concat(inputMatrix[i][j]);
        }
        console.log(row);
        row = "";
    }
}

function paintGraph(){
    this._root = null;
    this.nodes = [];
}
function gNode(x,y){
    this.val = [x,y];
    this.children = [];
}

function paintFill(inputMatrix,newColor,x,y){
    var fillGraph = new paintGraph();
    var oldColor = inputMatrix[x][y];
    var newNode = new gNode(x,y);
    if(fillGraph._root === null){
        fillGraph._root = newNode;
    }
    fillGraph.nodes.push(newNode);
    var j = 0;
    while(j < fillGraph.nodes.length){
        var current = fillGraph.nodes[j];
        var xco = current.val[0];
        var yco = current.val[1];
        var adjacent = [[xco+1,yco],[xco-1,yco],[xco,yco+1],[xco,yco-1]];
        for(var k in adjacent){
            if(inputMatrix[adjacent[k][0]] !== undefined){
                if(inputMatrix[adjacent[k][0]][adjacent[k][1]] === oldColor){
                    current.children.push(new gNode(adjacent[k][0],adjacent[k][1]));
                    fillGraph.nodes.push(new gNode(adjacent[k][0],adjacent[k][1]));
                }
            }
        }
        j++;
        inputMatrix[xco][yco] = newColor;
    }
}

var myMatrix = buildMatrix(5,5);
printMatrix(myMatrix);
paintFill(myMatrix,2,0,1);
console.log(" ");
printMatrix(myMatrix);
