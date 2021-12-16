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
        // your code here
    }

    // return the size (number of nodes) of a BST
    size() {
        // your code here
        // ** don't modify the constuctors for this!
    }
}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
console.log("====================");
console.log(bst.contains(15));
console.log(bst.contains(32));
console.log(bst.size());

//Jacob
contains(value) {
    if (this.root == null){
        console.log("BST is empty!");
        return null;
    }
    var runner = this.root;
    while (runner){
        if (value == runner.value){
            return runner;
        }
        else if (value > this.root.value){
            runner = runner.right;
        }
        else if (value < this.root.value){
            runner = runner.left;
        }
    }
    console.log("Value not found in BST");
    return null;
}
//Dunavan
size(runner = this.root, total = 0) {
    // your code here
    let finalCount = total;
    if(runner){            
        finalCount = this.size(runner.left, finalCount);
        finalCount++;
        finalCount = this.size(runner.right, finalCount);
    }
    return finalCount;
}

//Christopher
contains(value) {
    // your code here
    if (this.root == null){
        console.log("This tree is empty")
        return
    }
    let runner = this.root
    while(runner){
        if(value>runner.value){
            runner = runner.right
        }
        else if(value<runner.value){
            runner = runner.left
        }
        else{
            return runner
        }
    }
    return "Node not found"
}

//TA Robert
public Boolean contains(BSTNode node,Integer val){
    if(node == null) return false;
    if(node.value.equals(val))return true;
    if(val > node.value) return this.contains(node.right,val);
    return this.contains(node.left,val);
}

public Integer size(BSTNode pointer){
    if(pointer == null)return 0;
    return size(pointer.left) + size(pointer.right) + 1;
}

//Matthew
   
contains(value) {
    if (this.root == null){=[[]]
        return false;
    }

    let currentNode = this.root;
    while(currentNode != null) {
        if (value > currentNode.value) {
            if (!currentNode.right) {
                return false;
            }
            currentNode = currentNode.right;
        } else if (value < currentNode.value) {
            if (!currentNode.left) {
                return false;
            }
            currentNode = currentNode.left;
        } else {
            return currentNode;
        }
    }
}

// return the size (number of nodes) of a BST // counter = 3
size(root = this.root, counter = 0) {
    if (root == null) {
        return counter;
    }
    counter++;
    if (root.left) {
        counter = this.size(root.left, counter);
    }
    if (root.right) {
        counter = this.size(root.right, counter);
    }
    return counter;
}

// size() {
//     if (this.root == null) {
//         return 0;
//     }

//     let counter = 0;
//     function sizeRecur(root) {
//         counter++;
//         if (root.left) {
//             sizeRecur(root.left);
//         }
//         if (root.right) {
//             sizeRecur(root.right);
//         }
//     }

//     sizeRecur(this.root);
//     return counter;
// }
}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
console.log("====================");
let node = bst.contains(15);
console.log(bst.contains(15));
console.log(bst.contains(32));
console.log(bst.size());