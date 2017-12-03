function isBST(inputBTroot){
    if(inputBTroot === null){
        return true;
    }
    if(inputBTroot.left === null && inputBTroot.right===null){
        return true;
    }
    else if(inputBTroot.left === null){
        if(inputBTroot.right.val <= inputBTroot.val){
            return false;
        }else{
        return isBST(inputBTroot.right);
        }
    }
    else if(inputBTroot.right === null){
        if(inputBTroot.left.val >= inputBTroot.val){
            return false;
        }else{
        return isBST(inputBTroot.left);
        }
    }else{
        if((inputBTroot.left.val >= inputBTroot.val)||(inputBTroot.right.val <= inputBTroot.val)){
            return false;
        }else{
        return (isBST(inputBTroot.left) && isBST(inputBTroot.right));
        }
    }
}