function BT(){
    this._root = null;
    this.depths = [];
}

BT.prototype.contains = function(value){
    var current;
    if(this._root === null){
        return false;
    }else{
        current = this._root;
        var found = false;
        while(!found){
            if(value > current.val){
                if(current.right === null){
                    return false;
                }else{
                    current = current.right;
                }
            }
            else if(value < current.val){
                if(current.left === null){
                    return false;
                }else{
                    current = current.left;
                }
            }else{
                return true;
            }
        }
    }
}

BT.prototype.add = function(value){
    var newNode = {
        val: value,
        left: null,
        right: null
    };
    var current;
    if(this._root === null){
        this._root = newNode;
    }
    else{
        current = this._root;
        var inserted = false;
        while(!inserted){
            if(newNode.val > current.val){
                if(current.right === null){
                    current.right = newNode;
                    inserted = true;
                }else{
                    current = current.right;
                }
            }
            else if(newNode.val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    inserted = true;
                }else{
                    current = current.left;
                }
            }else{
                inserted = true;
            }
        }
    }
}

function LL(){
    this._root = null;
}

LL.prototype.add = function(value){
    var newNode = {
        val: value,
        next: null
    };
    newNode.next = this._root;
    this._root = newNode;
}

BT.prototype.record = function(){
    var queue = [];
    queue.unshift(this._root);
    var row = 0;
    this.depths[row] = new LL();
    while(queue.length !== 0){
        var current = queue.pop();
        if(current === "new"){
            row++;
            this.depths[row] = new LL();
            current = queue.pop();
        }
        this.depths[row].add(current.val);
        if(current.left !== null){
            queue.unshift("new");
            queue.unshift(current.left);
        }
        if(current.right !== null){
            if(current.left===null){
                queue.unshift("new");
                queue.unshift(current.right);
            }else{
                queue.unshift(current.right);
            }
        }
    }
}

function isBalanced(inputBT){
    if(Math.abs(depthCount(inputBT._root)) > 1){
        return false;
    }
    else{return true;}
}

function depthCount(inputBT){
    console.log(inputBT);
    if(inputBT === null){
        return 0;
    }
    else if(inputBT.right === null && inputBT.left === null){
        return 1;
    }
    else if(inputBT.right === null){
        return depthCount(inputBT.left)+1;
    }
    else if(inputBT.left === null){
        return depthCount(inputBT.right)+1;
    }
    else{
        return depthCount(inputBT.right)-depthCount(inputBT.left);
    }
}


var myBT = new BT();
myBT.add(50);
myBT.add(25);
myBT.add(100);
myBT.add(14);
myBT.add(30);
myBT.add(8);


