var myinput = "2 2\n3 2\n2 3\n4 4";

function waystoBuild(inputString){
    memo();
}
function memo(){
    var rows = 100;
    var col = 100;
    var matrix = [];
    for(var y=1;y<=rows;y++){
        matrix[y] = [];
        for(var x=1;x<=col;x++){
            matrix[y][x] = 0;
        }
    }
    for(var j=1;j<=rows;j++){
        matrix[j][1] = 1;
    }
    for(var b=2; b<=100; b++){
        if(b<=4){
            matrix[1][b] = (matrix[1][b-1])*2;
        }
        else{
            matrix[1][b] = ((matrix[1][b-1])+(matrix[1][b-2])+(matrix[1][b-3])+(matrix[1][b-4]))%1000000007;
        }
    }
    for(var y=2;y<=rows;y++){
        for(var x=2;x<=11;x++){
            var sumBefore=0;
            for(var i=x-1;i>1;i--){
                sumBefore = sumBefore+matrix[y][i];
            }
            matrix[y][x] = (Math.pow(matrix[y-1][x],y)-(sumBefore*(x-1))-1)%1000000007;
        }
    }
    console.log(Math.pow(matrix[1][11],2));
    console.log(matrix);
}

waystoBuild(myinput);