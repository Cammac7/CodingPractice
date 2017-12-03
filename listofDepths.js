function BT(){
    this._root = null;
}

BT.prototype.add = function(inputValue){
    var treeNode = {
        val: inputValue,
        left: null,
        right: null
    };
    var current;
    
    if(this._root === null){
        this._root = treeNode;
    }
    else{
        current = this._root;
        
        var inserted = false;
        while(!inserted){
            if(inputValue < current.val){
                (current.left===null) ? (current.left = treeNode) : (current = current.left);
            }
            else if(inputValue > current.val){
                (current.right===null) ? (current.right = treeNode) : (current = current.right);
                
            }else if(inputValue===current.val){
                inserted = true;
            }
        }
    }
}

function LL(){
    this._root = null;
}

LL.prototype.add = function(newValue){
    var node = {
        value: inputvalue,
        next: null
    };
    var current;
    if(this._root===null){
        this._root = node;
    }
    else{
        node.next = this._root;
        this._root = node;
    }
}


var myTri = new BT();

myTri.add(5);
myTri.add(40);
myTri.add(41);
myTri.add(0);
myTri.add(8);
myTri.add(7);
myTri.add(6);

console.log(myTri);