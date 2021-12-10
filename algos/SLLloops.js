class SLNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(value){
        var newNode = new SLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        var newNode = new SLNode(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

// Given a Singly Linked List of Nodes, reverse the order of the list
//           this.head
// Example:      4 --> -12 --> 43 --> 8 --> 67 --> -27 --> 19 --> null
//           this.head
// Becomes:     19 --> -27 --> 67 --> 8 --> 43 --> -12 --> 4 --> null

    reverseList() {
        if (!this.head || this.head.next == null) {
            console.log("There's no list to reverse!");
        }

        var currentNode = this.head;
        var nextNode = this.head.next;
        var prevNode = null;
        // console.log("currentNode = " + currentNode.value)
        // console.log("nextNode = " + nextNode.value)
        // console.log("prevNode = " + prevNode)

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            // console.log("currentNode = " + currentNode?.value)
            // console.log("nextNode = " + nextNode?.value)
            // console.log("prevNode = " + prevNode.value)
            // console.log("--------------------------")
        }
        this.head = prevNode;
    }

    // Given a linked list, return true/false based on whether or not there is a loop in the list.

    // part 1 : make an algo or standalone logic that will construct a loop in your SSL (can be hard coded for now)
    // part 2 : return whether or not there is a loop

    hasLoop() {
        // your code here
    }

    printValues() {
        var runner = this.head;
        let str = "";
        while (runner) {
            str += `${runner.value} -> `;
            runner = runner.next;
        }
        str += 'null';
        console.log(str);
    }
}

//   4 --> -12 --> 43 --> 8 --> 67 --> -27 --> 19 --> null
var list = new SLL();
list.addToBack(4);
list.addToBack(-12);
list.addToBack(43);
list.addToBack(8);
list.addToBack(67);
list.addToBack(-27);
list.addToBack(19);
console.log("========================")
list.printValues();
console.log("========================")
list.hasLoop();

//Jacob
hasLoop() {
    const nodeArray = [] //Keeps track of nodes we've already seen
    var runner = this.head
    while (runner){
        if (nodeArray.includes(runner)){ //If we've already seen this node...
            return true
        }
        nodeArray.push(runner) //Adds the runner node to the array
        runner = runner.next //And we'll move to the next runner
    }
    return false
}

//Benjamin
hasLoop() {
    var runner = this.head;
    var sprinter = this.head.next;

    while (sprinter != null) {
      if (runner == sprinter) {
        console.log ("This is an infinite loop");
        return true;
      }
      runner = runner.next;
      sprinter = sprinter.next.next;
    }
    return false;
  }


//Doug
hasLoop() {
    // your code here
    var runner = this.head;
    var sprinter = this.head;
    while(sprinter.next!=null){
        runner = runner.next;
        sprinter= sprinter.next.next;
        if(runner===sprinter){
            return true;
        }
    }
    return false;
}

//Devin
createLoop(value){
    var newNode = new SLNode(value);
    if(!this.head) {
        this.head = newNode;
    } else {
        var runner = this.head;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
    }
    newNode.next = this.head;
}

hasLoop() {
    let memDict = {};
    if(this.head == null){
        return false;
    }
    var runner = this.head
    while(runner.next){
        if(memDict[runner.value]){
            let testNodes = memDict[runner.value]
            for(let i = 0; i < testNodes.length; i++){
                if ( testNodes[i] === runner){
                    return true;
                }
            }
            testNodes.push(runner);
        }
        else{
            memDict[runner.value] = [runner];
        }
        runner = runner.next;
        console.log(memDict);
    }
    return false
    // store locations for each value
    // inside of each value is an array of nodes
    // when value exhists in dict, iterate over node array
}

//Heather
addLoop() {
    let runner = this.head;
    let front = this.head;
    while (runner.next != null) {
        runner = runner.next;
    }
    runner.next = front;
}

hasLoop() {
    let runner = this.head;
    let nodeArray = [this.head];
    if (runner.next == null) {
        return false;
    }
    while (runner.next != null) {
        for (let i = 1; i < nodeArray.length; i++) {
            if (runner.next == nodeArray[i]) {
                console.log(nodeArray);
                return true;
            }
        }
        nodeArray.push(runner)
        runner = runner.next;
    }
    return false;
}

//Matthew
constructor(){
    this.head = null;
    this.count = 0;
}

addToFront(value){
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
}

addToBack(value) {
    var newNode = new Node(value);
    if(!this.head) {
        this.head = newNode;
        this.count++;
    } else {
        var runner = this.head;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        this.count++;
    }
}

hasLoop() {
    if (this.head == null) {
        return false;
    }
    let runner = this.head;
    let counter = 1;
    while (runner) {
        if (counter > this.count) {
            return true;
        }
        counter++;
        runner = runner.next;
    }
    return false;
}