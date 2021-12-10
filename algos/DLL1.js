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
        // your code here
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        // your code here
    }

    // remove the first node in a DLL
    removeFromFront() {
        // your code here
    }

    // remove the last node in a DLL
    removeFromBack() {
        // your code here
    }

    // prints the items of a DLL from front to back
    printValuesForward() {
        // your code here
    }
    
    // given a value, return true or false for whether or not the list contains the value
    contains(value) {
        // your code here
    }

    // return the length of a given DLL
    lengthOfList() {
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