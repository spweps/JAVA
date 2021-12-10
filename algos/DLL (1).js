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
    }

    // given a value, add a node containing that value to the front of your DLL
    addToFront(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
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
        if(this.head == null) {
            console.log("The list is empty!");
        } else {
            var runner = this.head;
            var length = 0;
            while (runner) {
                length += 1;
                runner = runner.next;
            }
            return length;
        }
    }

    // Given and value and index, insert a Node of that value before the given index
    insertBefore(value, index) {
        // your code here
    }

    // Given and value and index, insert a Node of that value after the given index
    insertAfter(value, index) {
        // your code here
    }

    // Extra Challenge: Given a DLL, reverse the order of the nodes
    reverseList() {
        // your code here
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
// console.log(list.lengthOfList());
console.log("=====================");
// console.log(list.contains(12));
// console.log(list.contains(8));
console.log("=====================");
// list.removeFromBack();
// list.removeFromFront();
console.log("=====================");
// console.log(list.lengthOfList());
console.log("=====================");
list.insertBefore(500, 3);
list.insertAfter(500, 3);
list.printValuesForward();
console.log("=====================");
list.reverseList();
list.printValuesForward();



//Dunavan
insertBefore(value, index) {
    let count = 0;
    let runner = this.head;
    while(count < index && runner!==null){
        runner = runner.next;
        count++;
    }
    if(runner === null){
        console.log("There is not a node at the index you listed to insert this new value before");
    }
    else{
        let newNode = new Node(value);
        if(count !==0){
            runner.prev.next = newNode; // makes the node before runner point its next to the new node
        }
        newNode.prev = runner.prev; // newNode point its prev to the node before runner
        newNode.next = runner; //newNode point its next to the runner
        runner.prev = newNode; //runner point is prev to the new Node
    }
}

insertAfter(value, index) {
    let count = 0;
    let runner = this.head;
    while(count < index && runner !== null){
        runner = runner.next;
        count++;
    }
    if(runner === null){
        console.log("There is not a node at the index you listed to insert this new value before");
    }
    else{
        let newNode = new Node(value);
        if(count !==0){
            runner.next.prev = newNode; // makes the node after runner point its next to the new node
        }
        newNode.next = runner.next; // newNode point its next to the node before runner
        newNode.prev = runner; //newNode point its prev to the runner
        runner.next = newNode; //runner point is next to the new Node
    }
}
reverseList() {
    if(this.head == null || this.head.next == null) {
        return;
    }
    let runner = this.head;
    while(runner){
        let temp = runner.next;
        runner.next = runner.prev;
        runner.prev = temp;
        runner = runner.prev;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
}

//Devin
insertBefore(value, index) {
    let runner = this.head;
    let node = new Node(value);
    if(index == 0){
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }else{
        for(let i=0; i < index-1; i++){
            runner = runner.next;
        }
        console.log("index", runner.val);
        let temp = runner.next;
        node.next = temp;
        temp.prev = node;
        node.prev = runner;
        runner.next = node;
    }
}

insertAfter(value, index) {
    let runner = this.head;
    let node = new Node(value);
    for(let i=0; i < index; i++){
        runner = runner.next;
        if(runner === this.tail){
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            return
        }
    }
    console.log("runner.val = ", runner.val);
    let temp = runner.next;
    node.next = temp;
    temp.prev = node;
    node.prev = runner;
    runner.next = node;
}

//Jacob

