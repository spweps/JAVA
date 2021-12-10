class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    // given a value, add a node containing that value to the front of your DLL
    addToFront(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
        }
        this.head = node;
        this.count++;
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
        }
        this.tail = node;
        this.count++;
    }

    // remove the first node in a DLL
    removeFromFront() {
        if(this.head == null) {
            console.log("This list is empty!");
        } else {
            if(!this.head.next) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev.next = null;
                this.head.prev = null;
            }
            this.count--;
        }
    }

    // remove the last node in a DLL
    removeFromBack() {
        if(this.head == null) {
            console.log("This list is empty!");
        } else {
            if(!this.head.next) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next.prev = null;
                this.tail.next = null;
            }
            this.count--;
        }
    }

    // prints the items of a DLL from front to back
    printValuesForward() {
        if(this.head == null) {
            console.log("The list is empty!");
        } else {
            var runner = this.head;
            var str = "Starting at the head : "
            while(runner){
                str += `${runner.val} -> `;
                runner = runner.next;
            }
            str += " that was the tail";
            console.log(str);
        }
    }

    // given a value, return true or false for whether or not the list contains the value
    contains(value) {
        if(this.head == null) {
            console.log("The list is empty!");
        } else {
            var runner = this.head;
            while(runner){
                if(runner.val == value) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }
    

    // return the length of a given DLL
    lengthOfList() {
        return this.count;
    }

    // Given and value and index, insert a Node of that value before the given index
    insertBefore(value, index) {
        // your code here
        let nodeAtIndex = this.findNodeAtIndex(index);
        if(nodeAtIndex == false) {
            console.log("No node at that index");
            return 
        }
        if(index == 0) {
            return this.addToFront(value)
        }

        let newNode = new Node(value);
        newNode.next = nodeAtIndex;
        newNode.prev = nodeAtIndex.prev;
        nodeAtIndex.prev.next = newNode;
        nodeAtIndex.prev = newNode;
        this.count++;
    }

    // Given and value and index, insert a Node of that value after the given index
    insertAfter(value, index) {
        let nodeAtIndex = this.findNodeAtIndex(index);
        if(nodeAtIndex == false) {
            console.log("No node at that index");
            return 
        }
        if(index == this.count - 1) {
            return this.addToBack(value)
        }

        let newNode = new Node(value);
        newNode.next = nodeAtIndex.next;
        newNode.prev = nodeAtIndex;
        nodeAtIndex.next.prev = newNode;
        nodeAtIndex.next = newNode;
        this.count++;
    }

    findNodeAtIndex(index) {
        if(this.head == null || index >= this.count){
            return false;
        }
        let counter = 0;
        let runner = this.head;

        while(counter < index) {
            counter++;
            runner = runner.next;
        }
        return runner;
    }

    // Extra Challenge: Given a DLL, reverse the order of the nodes
    reverseList() {
        if (this.head == null || this.head.next == null) {
            return;
        }

        let leftNode = this.head;
        let rightNode = this.head.next;

        while(rightNode) {
            let nextRight = rightNode.next;
            leftNode.prev = rightNode;
            rightNode.next = leftNode;
            leftNode = rightNode;
            rightNode = nextRight;
        }

        let newHead = this.tail;
        this.tail = this.head;
        this.head = newHead;
        this.tail.next = null;
        this.head.prev = null;

    }
}

list = new DLL();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToBack(15);
list.addToBack(18);
list.printValuesForward();
console.log(list.lengthOfList());
console.log("=====================");
console.log(list.contains(12));
console.log(list.contains(8));
console.log("=====================");
list.removeFromBack();
list.removeFromFront();
console.log("=====================");
console.log(list.lengthOfList());
console.log("=====================");
list.insertBefore(500, 3);
list.insertAfter(300, 3);
list.insertAfter(400, 3);
list.printValuesForward();
console.log("=====================");
list.reverseList();
list.printValuesForward();
list.insertBefore(500, 0);
list.insertAfter(400, 7);
list.printValuesForward();
console.log(list.head.val, list.tail.val)
