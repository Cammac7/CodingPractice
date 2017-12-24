var myprint = function(matrix){
        var row = "";
        for(var j=1;j<=matrix.length;j++){
            for(var i =1;i<=matrix[j].length;i++){
                row = row+" "+matrix[i][j];
            }
            console.log(row);
            row = "";
        }
    };
    
var canPartition = function(nums) {
    var goal;
    var outputArr;
    for(var j of nums){
        goal = goal+j;
    }
    if(goal%2 !== 0){
        return false;
    }
    goal = goal/2;
    memo =[];
    for(var col =0;col<nums.length;col++){
        console.log("hello");
        for(var row=0;row<=goal;row++){
            if(col === 0){
                memo[col][row]=false;
            }
            if(row === 0){
                memo[col][row]=true;
            }
        }
    }
    var row = "";
        for(var j=1;j<=memo.length;j++){
            for(var i =1;i<=memo[j].length;i++){
                row = row+" "+memo[i][j];
            }
            console.log(row);
            row = "";
        }
    
};

canPartition([1,5,11,5]);