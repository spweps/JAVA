class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
    }

    add(value) {
        if(value < this.value) {
            if(this.left) {
                this.left.add(value);
            } else {
                this.left = new BSTNode(value);
            }
        }

        if(value > this.value) {
            if(this.right) {
                this.right.add(value);
            } else {
                this.right = new BSTNode(value);
            }
        }
    }

    contains(value) {
        if(value < this.value) {
            if(this.left) {
                return this.left.contains(value);
            } else {
                return null;
            }
        }
        if(value > this.value) {
            if(this.right) {
                return this.right.contains(value);
            } else {
                return null;
            }
        }
        return this;
    }

    size() {
        return  (this.left ? this.left.size() : 0) + 
        (this.right ? this.right.size() : 0) + 1;
    }

}

class BST {
    constructor() {
        this.root = null;
    }
    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(value) {
        !this.root ? this.root = new BSTNode(value) : this.root.add(value)
    }

    // find and return the node of a given value
    contains(value) {
        return !this.root ? null : this.root.contains(value);
    }

    // return the size (number of nodes) of a BST
    size() {
        return !this.root ? 0 : this.root.size();
    }

    // returns the total height of the tree; this is the longest sequence of nodes from root to leaf node
    height() {
        // your code here
    }
    
    // returns true/false based on if the BST is balanced, meaning the nodes are balanced on each side
    isBalanced() {
        // your code here
    }
}

var bst = new BST();
bst.add(10);
bst.add(15);
bst.add(5);
bst.add(-20);
bst.add(25);
console.log("====================");
console.log(bst.contains(15));
console.log(bst.contains(32));
console.log(bst.size());



//Jacob
height(runner=this.root, max=0) {
    if (this.root == null){
        return 0;
    }
    if (this.root.left == null && this.root.right == null){
        return max+1;
    }
    let leftMax = 0;
    let rightMax = 0;
    max++;
    if (runner.left){
        leftMax = this.height(runner.left, max) //10
    }
    if (runner.right){
        rightMax = this.height(runner.right, max)
    }
    if (leftMax > rightMax){
        return leftMax;
    }
    if (rightMax > leftMax){
        return rightMax;
    }
    if (rightMax == leftMax && leftMax > max){
        max = rightMax;
    }
    return max;
}

//Matthew
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
    }

    add(value) {
        if(value < this.value) {
            if(this.left) {
                this.left.add(value);
            } else {
                this.left = new BSTNode(value);
            }
        }

        if(value > this.value) {
            if(this.right) {
                this.right.add(value);
            } else {
                this.right = new BSTNode(value);
            }
        }
    }

    contains(value) {
        if(value < this.value) {
            if(this.left) {
                return this.left.contains(value);
            } else {
                return null;
            }
        }
        if(value > this.value) {
            if(this.right) {
                return this.right.contains(value);
            } else {
                return null;
            }
        }
        return this;
    }

    size() {
        return  (this.left ? this.left.size() : 0) + 
        (this.right ? this.right.size() : 0) + 1;
    }

}

class BST {
    constructor() {
        this.root = null;
    }
    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(value) {
        !this.root ? this.root = new BSTNode(value) : this.root.add(value)
    }

    // find and return the node of a given value
    contains(value) {
        return !this.root ? null : this.root.contains(value);
    }

    // return the size (number of nodes) of a BST
    size() {
        return !this.root ? 0 : this.root.size();
    }

    // returns the total height of the tree; this is the longest sequence of nodes from root to leaf node
    height(root = this.root, counter = 0) {
        if (root == null) {
            return counter;
        }
        counter++;
        let leftCount = this.height(root.left, counter);
        let rightCount = this.height(root.right, counter);
        return leftCount > rightCount ? leftCount : rightCount;
    }
    
    // returns true/false based on if the BST is balanced, meaning the nodes are balanced on each side
    isBalanced(root = this.root) {
        if (Math.abs(this.height(root.left) - this.height(root.right)) > 1) {
            return false;
        } else {
            let leftBalance = root.left? this.isBalanced(root.left) : true;
            let rightBalance = root.right? this.isBalanced(root.right): true;
            return (leftBalance && rightBalance)
        }
    }
}

//Dunavan
height(runner = this.root){
    let leftCount=0;
    let rightCount=0;
    let bonus=0;
    if(!runner){
        return 0;
    }
    if(runner.left){
        leftCount = this.height(runner.left);
        leftCount++;
    }
    if(runner.right){
        rightCount = this.height(runner.right);
        rightCount++;
    }
    if(runner== this.root){
        bonus=1;
    }
    if(leftCount > rightCount){
        return leftCount+bonus;
    }
    else{
        return rightCount+bonus;
    }

}

isBalanced(runner = this.root) {
    if(!runner){
        return true;
    }
    let leftBalance = true;
    let rightBalance = true;
    let difference = this.height(runner.left) - this.height(runner.right);
    if(difference < 2 && difference > -2 ){
        leftBalance = this.isBalanced(runner.left);
        rightBalance = this.isBalanced(runner.right);

    }
    else{
        return false;
    }
    return leftBalance && rightBalance;
}