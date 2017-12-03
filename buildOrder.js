function graph(){
    this.nodes = {};
    this.outs = {};
    this.buildOrder = [];
}

function node(){
    this.name;
    this.children = [];
}

graph.prototype.add = function(inputName){
    var adNode = new node();
    adNode.name = inputName;
    this.nodes[inputName] = adNode;
};

graph.prototype.connect = function(from, to){
    if(this.nodes[from]===undefined){
        return;
    }else{
        this.nodes[from].children.push(this.nodes[to]);
        this.outs[to] = true;
    }
};

graph.prototype.build = function(){
    for(var e in this.nodes){
        if(this.outs[e]===undefined){
            this.buildOrder.push(this.nodes[e]);
        }
    }
    var j = 0;
    while(j < this.buildOrder.length){
        this.buildOrder = this.buildOrder.concat(this.buildOrder[j].children);
        j++;
    }
    var seen = {};
    this.buildOrder = this.buildOrder.filter(function(item){
        return (seen.hasOwnProperty(item.name)) ? false : seen[item.name] = true;
    });
    if(this.buildOrder.length !== this.nodes.length){
        return  false;
    }
};

var myGraph = new graph();
myGraph.add("a");
myGraph.add("b");
myGraph.add("c");
myGraph.add("d");
myGraph.add("e");
myGraph.add("f");
myGraph.connect("a","d");
myGraph.connect("f","b");
myGraph.connect("b","d");
myGraph.connect("f","a");
myGraph.connect("d","c");
myGraph.build();
console.log(myGraph.buildOrder);