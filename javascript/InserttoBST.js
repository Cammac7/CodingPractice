
function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.contains = function(myvalue) {
    var found = false;
    var current = this._root;
    
    while(!found && current){
        if(myvalue < current.value){
            current = current.left;
        }
        
        else if (myvalue > current.value) {
            current = current.right;
        }
        
        else if(myvalue == current.value){
            found = true;
        }
        else{found = false;}
    
    }
    return found;
}

BinarySearchTree.prototype.add = function(newvalue) {
    var node = {
    value: newvalue,
    left: null,
    right: null
    };
    var current;
    
    if (this._root === null){
        this._root = node;
    }
    else{
        current = this._root;
        
        var inserted = false;
        while(!inserted){
            if (newvalue < current.value){
                if (current.left === null){
                    current.left = node;
                }
                else {
                    current = current.left;
                }
            }
            else if (newvalue > current.value){
                if (current.right === null){
                    current.right = node;
                }
                else {
                    current = current.right;
                }
            }
            else if (newvalue == current.value){
                inserted = true;
            }
        }
    }
}


var myBST = new BinarySearchTree();

myBST.add(5);
myBST.add(40);
myBST.add(41);
myBST.add(0);
myBST.add(8);
myBST.add(7);
myBST.add(6);
console.log(myBST);
/*console.log(myBST.contains(41));
console.log(myBST.contains(5));
console.log(myBST.contains(8));
console.log(myBST.contains(6));
console.log(myBST.contains(0));
console.log(myBST.contains(7));
console.log(myBST.contains(9));
console.log(myBST.contains(40));*/
myBST.add(9);
console.log(myBST.contains(9));

