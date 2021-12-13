add(value) {
        let newNode = new BSTNode(value)
        if(this.root == null){
            this.root = newNode;
        }
        else {
            var runner = this.root;
            while (runner){
                if (value < runner.value){
                    if (runner.left == null){
                        runner.left = newNode;
                        return null;
                    }
                    runner = runner.left;
                }
                if (value > runner.value){
                    if (runner.right == null){
                        runner.right = newNode;
                        return null;
                    }
                    runner = runner.right;
                }
                if (value == runner.value){
                    console.log("That value already exists in the BST!");
                    return null;
                }
            }
        }
    }

    // Given a BST, return the value of the min node in the tree
    findMin(){
        if (this.root == null){
            console.log("This BST empty! Yeet!");
            return null;
        }
        else if (!this.root.left){
            return this.root.value;
        }
        else {
            var runner = this.root;
            while (runner.left){
                runner = runner.left;
            }
            return runner.value;
        }
    }
    
    // Given a BST, return the value of the max node in the tree
    findMax(){
        if (this.root == null){
            console.log("This BST empty! Yeet!");
            return null;
        }
        else if (!this.root.right){
            return this.root.value;
        }
        else {
            var runner = this.root;
            while (runner.right){
                runner = runner.right;
            }
            return runner.value;
        }
    }

    // print values: [EXTRA Challenge]
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