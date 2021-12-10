```js
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
        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
            this.head.next.prev = this.head
        }else{
            this.head = newNode;
            this.head.prev = null;
            this.tail = newNode;
            this.tail.next = null;
        }
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        let newNode = new Node(value);
        if(this.tail){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.tail.next = null;
            this.tail.prev.next = this.tail
        } else{
            this.head = newNode;
            this.head.prev = null;
            this.tail = newNode;
            this.tail.next = null;
        }
    }

    // remove the first node in a DLL
    removeFromFront() {
        if(this.head){
            this.head = this.head.next;
            this.head.prev.next = null;
            this.head.prev = null;
        }else{
            return console.log("This list is empty!");
        }
    }

    // remove the last node in a DLL
    removeFromBack() {
        if(this.tail){
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }else{
            return console.log("This list is empty!");
        }
    }

    // prints the items of a DLL from front to back
    printValuesForward() {
        let runner = this.head;
        let str = ""
        while(runner){
            str += `${runner.value} ->` 
            runner = runner.next;
        }
        str += " null"
        console.log(str);
    }
    
    // given a value, return true or false for whether or not the list contains the value
    contains(value) {
        let runner = this.head;
        while(runner.next != null){
            if(runner.value == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // return the length of a given DLL
    lengthOfList() {
        let runner = this.head;
        let length = 0;
        while(runner){
            length++;
            runner = runner.next;
        }
        console.log("Length: ", length);
        return length;
    }
}

list = new DLL();
list.removeFromBack();
list.removeFromFront();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToBack(15);
list.addToBack(18);
list.printValuesForward();
list.lengthOfList();
console.log("=====================");
console.log(list.contains(12));
console.log(list.contains(8));
console.log("=====================");
list.removeFromBack();
list.removeFromFront();
list.printValuesForward();
console.log("=====================");
list.lengthOfList();
```