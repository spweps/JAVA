class Node {
    constructor(value) {
        this.value = value;
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
        let newNode = new Node(value);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        if(this.tail){
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    // remove the first node in a DLL
    removeFromFront() {
        if(this.head){
            if(this.head.next){
                let newHead = this.head.next;
                newHead.prev = null;
                this.head.next = null;
                this.head = newHead;
            }
            else{
                this.head = null;
                this.tail = null;
            }
        }
        else{
            console.log("list is already empty");
        }
    }

    // remove the last node in a DLL
    removeFromBack() {
        if(this.tail){
            if(this.tail.prev){
                let newTail = this.tail.prev;
                newTail.next = null;
                this.tail.prev = null;
                this.tail = newTail;
            }
            else{
                this.head = null;
                this.tail = null;
            }
        }
        else{
            console.log("list is already empty");
        }
    }

    // prints the items of a DLL from front to back
    printValuesForward() {
        var runner = this.head;
        let str = "";
        while (runner) {
            str += `${runner.value} -> `;
            runner = runner.next;
        }
        str += 'null';
        console.log(str);
    }
    
    // given a value, return true or false for whether or not the list contains the value
    contains(value) {
        let runner = this.head;
        while(runner){
            if(runner.value === value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // return the length of a given DLL
    lengthOfList() {
        let count = 0;
        let runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
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
list.printValuesForward();
console.log("=====================");
console.log(list.lengthOfList());