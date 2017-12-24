
function BinaryLinkedList() {
    this._root = null;
}

BinaryLinkedList.prototype.add = function(newvalue){
    var LLnode = {
        value: newvalue,
        next: null
    };
    var current;
    
    if(this._root == null){
        this._root = LLnode;
    }
    else {
        current = this._root;
        LLnode.next = current;
        this._root = LLnode;
}
}

BinaryLinkedList.prototype.sort = function(){
    var current = this._root;
    var count0 = 0;
    var countLength = 0;
    if (current.next == null){
        return;
    }
    while (current.next != null){
        if(current.value == 0){
            count0++;
        }
        countLength++;
        current = current.next;
    }
    current = this._root;
    for(var i = 0; i <= countLength; i++){
        if(i <= count0){
            current.value = 0;
        }
        else{
            current.value = 1;
        }
        current = current.next;
    }
}

function printList(inputList){
    var current = inputList._root;
    
    if(current == null){
    }
    else {
        while(current.next != null){
            document.write(current.value);
            current = current.next;
        }
        document.write(current.value);
    }
}

var myBLL = new BinaryLinkedList;
myBLL.add(0);
myBLL.add(1);
myBLL.add(0);
myBLL.add(0);
myBLL.add(0);
myBLL.add(0);
myBLL.add(0);
myBLL.add(0);
myBLL.add(0);
myBLL.add(0);
printList(myBLL);
myBLL.sort();
printList(myBLL);