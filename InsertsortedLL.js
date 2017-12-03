
function LL() {
    this._root = null;
}

LL.prototype.insertNode = function(newvalue){
    var LLnode = {
    value: newvalue,
    next: null
    }, current;
    
    if(this._root == null){
        this._root = LLnode;
    }
    else{
        current = this._root;
            if (current.value > newvalue){
                LLnode.next = current;
                this._root = LLnode;
            }

            else {
                while(current.next != null) {
                    if(current.value < newvalue && current.next.value < newvalue){
                        current = current.next;
                    }
                    else{
                        LLnode.next = current.next;
                        current.next = LLnode;
                        return;
                    }
                    
                }
                current.next = LLnode;
            }
        
    }
}

function printList(inputList){
    var current = inputList._root;
    
    if(current == null){
    }
    else {
        while(current.next != null){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}

var myLinkedList = new LL;
myLinkedList.insertNode(10);
myLinkedList.insertNode(5);
myLinkedList.insertNode(15);
myLinkedList.insertNode(11);
myLinkedList.insertNode(600);
myLinkedList.insertNode(59);
myLinkedList.insertNode(0);
myLinkedList.insertNode(75);
myLinkedList.insertNode(15);
printList(myLinkedList);
