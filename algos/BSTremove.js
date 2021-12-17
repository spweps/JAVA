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

    // locate and remove a node with the given value
    remove(value) {
        function deleteRec(root, key){
            if (root == null)
                return root;
            if (key < root.key)
                root.left=deleteRec(root.left, key);
            else if (key > root.key)
                root.right=deleteRec(root.right, key);
            else {
                if (root.left==null)
                    return root.right;
                else if (root.right==null)
                    return root.left;
                root.key=minValue(root.right)
                root.right=deleteRec(root.right,root.key);
            }
            return root;
        }
    }

}
BST.prototype.remove = function(data) {
    if(this.root.data === data){
        var curr = this.root.left;
        while(true){
            if(curr.right.left === null && curr.right.right === null){
                this.root.data = curr.right.data;
                curr.right = null;
                break;
            }
            curr = curr.right;
        }
    }

    var curr = this.root;
    var found_data = this.find(data);
    if(found_data.left !== null && found_data.right !== null){
        var runner = found_data.right;
        var runner_prev = found_data;
        while(true){
            if(runner.left === null && runner.right === null){
                found_data.data = runner.data;
                if(runner_prev.left === runner){
                    runner_prev.left = null;
                }else{
                    runner_prev.right = null;
                }
                break;
            }
            runner_prev = runner;
            runner = runner.left;
        }
    }else if(found_data.left === null || found_data.right === null){
        var prev = this.prev(found_data.data);
        if(prev.right === found_data){
            if(found_data.left){
                prev.right = found_data.left;
            }else{
                prev.right = found_data.right;
            }
        }else{
            if(found_data.left){
                prev.left = found_data.left;
            }else{
                prev.left = found_data.right;
            }
        }
    }else{
        var prev = this.prev(found_data.data);
        if(prev.left === found_data){
            prev.left = null;
        }else{
            prev.right = null;
        }
    }

};

//Jacob
 // locate and remove a node with the given value
 remove(value) {
        if (!this.contains(value)){ //If the value isn't even in our BST
            return "Value not in BST";
        }
        var runner = this.root;
        var aboveNode = null;
        var leftRight; //Remembers which side of the parent loop we're looking at
        while (runner.value != value){ //This while loop will get us to our desired node
            if (value < runner.value){
                if (runner.left.value == value){ //Keeps track of the node above our desired node
                    aboveNode = runner;
                    leftRight = "left";
                }
                runner = runner.left;
            }
            else if (value > runner.value){
                if (runner.right.value == value){ //Keeps track of the node above our desired node
                    aboveNode = runner;
                    leftRight = "right";
                }
                runner = runner.right;
            }
        }
        if (runner.left == null && runner.right == null) { //This is our leaf condition: no children
            if (leftRight == "left"){ //We want to get rid of the left side
                aboveNode.left = null;
            }
            else {
                aboveNode.right = null;
            }
        }
        else if (runner.left != null && runner.right == null){ //Our condition for a single left child
            if (leftRight == "left"){
                aboveNode.left = runner.left;
            }
            else {
                aboveNode.right = runner.left;
            }
        }
        else if (runner.left == null && runner.right != null){ //Our condition for a single right child
            if (leftRight == "left"){
                aboveNode.left = runner.right;
            }
            else {
                aboveNode.right = runner.right;
            }
        }
        else { //If two children
            var successor = runner.right;
            if (!successor.left){
                runner.right = null;
                successor.left=runner.left;
                successor.right=runner.right;
                if (value == this.root.value){
                    this.root = successor;
                }
                else{
                    aboveNode.right=successor;
                }
            }
            else{
                while(successor.left){
                    if (successor.left.left == null){
                        aboveNode = successor;
                    }
                    successor=successor.left
                }
                successor.left=runner.left;
                successor.right=runner.right;
                aboveNode.left=null;
                if (value == this.root.value){
                    this.root = successor;
                }
            }
        }
    }