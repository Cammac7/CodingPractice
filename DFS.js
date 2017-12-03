
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

var mytree = new Tree("one");
mytree._root.children.push(new Node("two"));
mytree._root.children[0].parent = mytree;
 
mytree._root.children.push(new Node("three"));
mytree._root.children[1].parent = mytree;
 
mytree._root.children.push(new Node("four"));
mytree._root.children[2].parent = mytree;
 
mytree._root.children[0].children.push(new Node("five"));
mytree._root.children[0].children[0].parent = mytree._root.children[0];
 
mytree._root.children[0].children.push(new Node("six"));
mytree._root.children[0].children[1].parent = mytree._root.children[0];
 
mytree._root.children[2].children.push(new Node("seven"));
mytree._root.children[2].children[0].parent = mytree._root.children[2]

Tree.prototype.DFS = function(){
    var current = this._root;
    
    for(var i=0; i<current.children.length; i++){
        
    }
}

function DFS(inputTree, searchVal){
    var current = inputTree._root;
    var output = recurse(current, searchVal);
    if(output == true){
        return true;
    }
    else{
        return false;
    }
}

function recurse(inputNode, searchVal){
    var output;
    if(inputNode.data == searchVal){
        console.log(inputNode.data);
        return true;
    }
    else{
        for(var i =0; i<inputNode.children.length; i++){
            console.log(inputNode.children[i].data);
            output = recurse(inputNode.children[i],searchVal);
            if (output === true){
                return true;
            }
        }
    }
    return output;
}

console.log(DFS(mytree,"three"));