// Given and value and index, insert a Node of that value before the given index
    insertBefore(value, index) { //index = 4
        if (index >= this.lengthOfList()){ //length = 4
            console.log("There aren't that many nodes in the list!");
        }
        else if (index == 0){
            this.addToFront(value);
        }
        else {
            var runner = this.head; //i = 0 => i = 3 // 0 - 4, 1 - 7, 2 - 12, 3 - -3
            var newNode = new Node(value) // null <--> *4 <--> 7 <--> 12 <--> -3 <--> null //length = 4
            for (var i = 0; i < index; i++){
                runner = runner.next;
            }
            runner.prev.next = newNode;
            newNode.prev = runner.prev;
            runner.prev = newNode;
            newNode.next = runner;

        }
    }

    // Given and value and index, insert a Node of that value after the given index
    insertAfter(value, index) {
        if (index >= this.lengthOfList() - 1){
            this.addToBack(value);
        }
        else {
            var runner = this.head;
            var newNode = new Node(value);
            for (var i = 0; i < index; i++){
                runner = runner.next;
            }
            runner.next.prev = newNode;
            newNode.prev = runner;
            newNode.next = runner.next;
            runner.next = newNode;
        }
    }

    // Extra Challenge: Given a DLL, reverse the order of the nodes
    reverseList() {
        if (this.lengthOfList() == 1){
            console.log("Boom, done.");
        }
        else {
            var runner = this.head;
            var backwardsRunner = this.tail;
            for (var i = 0; i < this.lengthOfList(); i++){
                runner.prev = runner.next;
                runner = runner.next;
            }
            runner = this.head;
            var walker = null;
            var sprinter = this.head;
            while(sprinter){
                sprinter = sprinter.next;
                runner.next = walker;
                walker = runner;
                runner = sprinter;
            }
            this.tail = this.head;
            this.head = walker;
            this.head.prev = null;
        }
    }
}