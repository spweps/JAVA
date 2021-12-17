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

    // locate and remove a node with the given value
    remove(value) {
        let runner = this.root;
        if(!runner){
            console.log("this tree is empty");
            return 
        }
        if(value == this.root.value && !runner.left && !runner.right){
            this.root == null;
        }
        let prevNode = null;
        while(runner && runner.value != value){
            prevNode = runner;
            if(runner.value < value){
                runner = runner.right;
            } else{
                runner = runner.left;
            }
        }
        if(runner == null){
            console.log("The value does not exist");
            return
        }
        if(!runner.left && !runner.right){
            if(runner.value > prevNode.value){
                prevNode.right = null;
            }else{
                prevNode.left = null;
            }
            return
        }
        if(!runner.left && runner.right){
            if(runner.value > prevNode.value){
                prevNode.right = runner.right;
            }else{
                prevNode.left = runner.right;
            }
            runner.right = null;
            return
        }
        if(runner.left && !runner.right){
            if(runner.value > prevNode.value){
                prevNode.right = runner.left;
            }else{
                prevNode.left = runner.left;
            }
            runner.left = null;
            return
        }
        let tempNode = this.findMin(runner.right);
        this.remove(tempNode.value);
        if(runner.value > prevNode.value){
            prevNode.right = tempNode;
        }else{
            prevNode.left = tempNode;
        }
        tempNode.right = runner.right;
        tempNode.left = runner.left;
        runner.right = null;
        runner.left = null;
        return 
    }

    findMin(){
        let runner = this.root
        if(this.root == null){
            console.log("The tree is empty")
            return
        }
        while(runner.left){
            runner = runner.left;
        }
        return runner;
    }

    printValues(arr=[], newRoot=this.root){ // Least to greatest, root>kids>grandkids
        //left recursion
        if (newRoot.left){
            this.printValues(arr, newRoot.left)
        }
        arr.push(newRoot.value);
        //right recursion
        if (newRoot.right){
            this.printValues(arr, newRoot.right)
        }
        return arr;
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
console.log(bst.printValues());
bst.remove(22);
console.log(bst.printValues());