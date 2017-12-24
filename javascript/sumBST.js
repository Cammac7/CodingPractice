function BinarySearchTree(){
    this._root = null;
}

BinarySearchTree.prototype.contains = function(myvalue) {  
    
    var current = this._root;
    if (current.value == myvalue){
        return true;
    }
    while(current.value != myvalue){
        if(myvalue < current.value){
            if(current.left == null){
                return false;
            }
            current = current.left;
        }
        else if (myvalue > current.value){
            if(current.right == null){
                return false;
            }
            current = current.right;
        }
        else {
            return false;
        }
    }
    return true;
    
    
}

BinarySearchTree.prototype.add = function(newvalue) {
    var node = {
    value: newvalue,
    left: null,
    right: null
    }, current;
    if(this._root == null){
        this._root = node;
    }
    else {
    current = this._root; //why does this need to be containing following while loop
    while(current.value != node.value){
        if (newvalue < current.value){
            if(current.left == null){
                current.left = node;
            }
            current = current.left;
        }
        
        else if (newvalue > current.value){
            if (current.right == null){
                current.right = node;
            }
            current = current.right;
        }
    }
    }
    return true;
}

function sumTree(treeNode){ //HOW DO I IMPLEMENT THIS WITH ENTIRE TREE AS ARGUMENT
    var total = 0;
    var current = treeNode;
    
    if(current == null){
        return 0;
    }
    total = current.value + sumTree(current.left) +sumTree(current.right);
    return total;
    }


var mynewBST = new BinarySearchTree();
mynewBST.add(0);
console.log(sumTree(mynewBST._root));