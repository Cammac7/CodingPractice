// remove duplicates from an unsorted linkedList


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

var myLinkL = new LL();
myLinkL.insertNode(5);
myLinkL.insertNode(1);
myLinkL.insertNode(5);
myLinkL.insertNode(11);
myLinkL.insertNode(54);
console.log(myLinkL);
myLinkL.removeDups();
console.log(myLinkL);