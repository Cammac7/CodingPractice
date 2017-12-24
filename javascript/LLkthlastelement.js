var LL = function(){
    this._root = null;
}

LL.prototype.insertNode = function(inputvalue){
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

LL.prototype.removeDups = function(){
    var current = this._root;
    var seen = {};
    while(current !== null){
        console.log(current.value);
        if(current.next===null){break;}
        if(seen.hasOwnProperty(current.next.value)){
            current.next = current.next.next;
        }
        else{
            seen[current.next.value] = true;
        }
        current = current.next;
    }
}

LL.prototype.kthLast = function(k){
    var current = this._root;
    var count = 0
    while(current !== null){
        count = count+1;
        current = current.next;
    }
    var countUp = 1;
    current = this._root;
    while(countUp < count-k+1){
        console.log(current.value+"  "+countUp);
        countUp = countUp+1;
        current = current.next;
    }
    console.log(current.value);
}

var LinkedList = new LL();
LinkedList.insertNode(5);
LinkedList.insertNode(1);
LinkedList.insertNode(5);
LinkedList.insertNode(11);
LinkedList.insertNode(54);
LinkedList.kthLast(4);
console.log(LinkedList);
