function ticket(s,e,c){
    this.start = s;
    this.end = e;
    this.cost = c;
}
var tickets = [];
tickets.push(new ticket("Paris","Mars",300));
tickets.push(new ticket("Paris","London",100));
tickets.push(new ticket("Mars","LA",100));
tickets.push(new ticket("LA","Istambul",100));
tickets.push(new ticket("Istambul","Tokyo",100));

var hash = {};
function isPath(ticketArr,k,start,end,visted){
    if(k === 0){
        return false;
    }else{
        for(var i = 0; i<ticketArr.length;i++){
            var curTick = ticketArr[i];
            if(visted[curTick.start]===true && visted[curTick.end]===true){
                ticketArr.splice(i,1);
            }
            else{
                if(curTick.start === start){
                    if(curTick.end === end){
                        return true;
                    }
                    else{
                        visted[ticketArr[i].start] = true;
                        return isPath(ticketArr,k-1,curTick.end,end,visted);
                    }
                }
            }
        }
        return false;
    }
}

//console.log(isPath(tickets,5,"Paris","Tokyo",hash));

function node(inname){
    this.name = inname;
    this.visited = false;
    this.value = -1;
    this.edges = [];
    this.neighbors = [];
}

function graph(){
    this.nodes = [];
    this.exists = {};
    this.parser = function(inputArr){
        for(var i=0; i<inputArr.length;i++){
            if(this.exists[inputArr[i].start]===undefined){
                var nnode = new node(inputArr[i].start);
                this.nodes.push(nnode);
                this.exists[inputArr[i].start] = this.nodes.length-1;
            }
            if(this.exists[inputArr[i].end]===undefined){
                var nnode = new node(inputArr[i].end);
                this.nodes.push(nnode);
                this.exists[inputArr[i].end] = this.nodes.length-1;
            }
        }
        for(var j=0; j<inputArr.length;j++){
            this.nodes[this.exists[inputArr[j].start]].neighbors.push(this.nodes[this.exists[inputArr[j].end]]);
            this.nodes[this.exists[inputArr[j].start]].edges.push(inputArr[j]);
        }
    }
}


var cityGraph = new graph();
cityGraph.parser(tickets);
console.log(cityGraph.nodes);

function printCheapestPath(inputGraph,start,end,k){
    inputGraph.nodes[inputGraph.exists[start]].value = 0;
    var myQueue = [];
    myQueue.push(inputGraph.nodes[inputGraph.exists[start]]);
    var current;
    while(myQueue.length !== 0){
        current = myQueue.shift();
        console.log(current.name);
        console.log(current.value);
        for(var c= 0; c<current.neighbors.length;c++){
            console.log(current.neighbors[c].name);
            console.log(current.neighbors[c].value);
            for(var e =0; e<current.edges.length;e++){
                if(current.edges[e].end === current.neighbors[c].name){
                    if(current.neighbors[c].value === -1){
                        current.neighbors[c].value = current.edges[e].cost;
                    }else{
                        current.neighbors[c].value = current.edges[e].cost+current.neighbors[c].value;
                    }
                }
            }
            myQueue.push(current.neighbors[c]);
        }
    }
    console.log(inputGraph.nodes[inputGraph.exists[end]].value);
}
printCheapestPath(cityGraph,"Paris","Tokyo",7)