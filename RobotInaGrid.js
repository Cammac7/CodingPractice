//Imagine a robot sitting on the upper left corner of a grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.

function Puzzle(rows,columns,deadSpaces){
    this.Rows = rows;
    this.Columns = columns;
    this.OffLimits = deadSpaces;
    this.path = [];
    this.Grid = [];
    this.Solnpath = [];
    this.buildGrid = function(){
        for(var x=1;x<=columns;x++){
            this.Grid[x] = [];
            for(var y=1;y<=rows;y++){
                this.Grid[x][y] = 1;
            }
        }
        for(var i of deadSpaces){
            this.Grid[i[0]][i[1]] = "X";
        }
        for(var f of this.Solnpath){
            this.Grid[f[0]][f[1]] = "o";
        }
        };
    this.buildGrid();
    this.print = function(){
        this.buildGrid();
        var row = "";
        for(var j=1;j<=this.Rows;j++){
            for(var i =1;i<=this.Columns;i++){
                row = row+" "+this.Grid[i][j];
            }
            console.log(row);
            row = "";
        }
    }
};

/*Puzzle.prototype.buildPath = function(){
    var memo = [];
    console.log(this.Grid.length-1);
    var pos = [this.Grid.length-1, this.Grid[1].length-1];
    console.log(pos);
    if(this.Grid.length-1 === 1 && this.Grid[1].length-1 === 1){
        Solnpath.push([this.Grid]);
    }
    
    this.path = Solnpath;
};*/

Puzzle.prototype.buildPath = function(){
    var memo = [];
    var startPos = [1,1];
    var endPos = [this.Grid.length-1, this.Grid[1].length-1];
    var currPos = endPos;
    for(var x=1;x<=endPos[0];x++){
            memo[x] = [];
            for(var y=1;y<=endPos[1];y++){
                memo[x][y] = 0;
            }
        }
    for(var r=1;r<=endPos[1];r++){
        for(var c=1;c<=endPos[0];c++){
            //console.log(this.Grid[c+1][2]);
            if(c===startPos[0] && r===startPos[1]){
                memo[c][r] = 1;
            }
            else if(this.Grid[c][r] === "X"){
                memo[c][r] = endPos[1]*endPos[0]+1;
            }
            else if(this.Grid[c][r-1] === undefined){
                memo[c][r] = 1 + memo[c-1][r];
            }
            else if(this.Grid[c-1] === undefined){
                memo[c][r] = 1+memo[c][r-1];
            }
            else{
                memo[c][r] = 1+Math.min(memo[c-1][r],memo[c][r-1]);
            }
        }
    }
    while((currPos[0] !== startPos[0]) || (currPos[1]!==startPos[1])){
        this.Solnpath.push(currPos);
        console.log(currPos);
        var x = currPos[0];
        var y = currPos[1];
        if(memo[x-1] === undefined){
            currPos = [x,y-1]
        }
        else if(memo[x][y-1] === undefined){
            currPos = [x-1,y]
        }
        else{
        currPos = memo[x][y-1] < memo[x-1][y] ? [x,y-1] : [x-1,y];
        }
    }
    console.log(currPos);
    this.Solnpath.push(currPos);
    console.log(this.Solnpath);
};

var myMatrix = new Puzzle(5,5,[[2,2],[2,3]]);

myMatrix.print();
myMatrix.buildPath();

myMatrix.print();