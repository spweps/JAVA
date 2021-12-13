class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
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
        let node = new BSTNode(value);
        let runner = this.root
        if(this.root == null){
            this.root = node;
            return
        }
        while(runner){
            if(node.value < runner.value){
                if(!runner.left){
                    runner.left = node;
                    return;
                }else{
                    runner = runner.left;
                }
            }
            else if(node.value > runner.value){
                if(!runner.right){
                    runner.right = node;
                    return;
                }else{
                    runner = runner.right;
                }
            }else{
                console.log("This node already exists in the tree");
                return; 
            }
        }
    }

    // Given a BST, return the value of the min node in the tree
    findMin(){
        let runner = this.root
        if(this.root == null){
            console.log("The tree is empty")
            return
        }
        while(runner.left){
            runner = runner.left;
        }
        return runner.value;
    }
    
    // Given a BST, return the value of the max node in the tree
    findMax(){
        let runner = this.root
        if(this.root == null){
            console.log("The tree is empty")
            return
        }
        while(runner.right){
            runner = runner.right;
        }
        return runner.value;
    }

    // print values: [EXTRA Challenge]
    printValues(runner = this.root, print = ""){
        if(runner == null){
            console.log("null");
            return;
        }
        console.log(runner.value);
        this.printValues(runner.left, print);
        this.printValues(runner.right, print);
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
bst.add(10);
bst.printValues();
console.log(bst.findMax());
console.log(bst.findMin());