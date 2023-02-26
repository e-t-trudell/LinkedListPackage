class Node {
    constructor(data){
        // what this mode contains
        this.data=data; 
        // pointer to the next node
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        // must point to start of list
        this.head = null;
    }
    addFront(val){
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }
    removeFront(){
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
    }
    front(){
        let curNode = this.head;
        if(!this.head) {
            return null;
        }
        console.log("front is ", curNode.data);
    }
    findSum() {
        //We first have to tell our train attendant that we want them to start at the front of the train
        let runner=this.head
        let sum=0
        if(!this.head) {
            return null;
        }
        //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
        //Also we need to tell them when to stop otherwise they will just run off the end of the train
        while(runner !== null){
            //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
            sum+=runner.data
            //Tell our attendant to move to the next car
            runner=runner.next
        }
        console.log("sum is", sum);
        return sum
    }
    length(){
        if(!this.head) {return 0;}
        let count = 0;
        let runner=this.head
        while(runner !== null){
            count += 1;
            // if(runner.data == value){
            //     console.log("match!", runner.data)
            //     return runner.data;
            // }
            runner=runner.next;
            console.log(count);
        }
        return null;
    }
    contains(value) {
        if(!this.head) {return null;}
        let runner=this.head
        while(runner !== null){
            if(runner.data == value){
                console.log("match!", runner.data)
                return runner.data;
            }
            runner=runner.next;
        }
        return null;
    	// is "value" to be found anywhere in this list?
    }
}
let first = new LinkedList(5);

first.addFront(5).addFront(10);
first.removeFront();
first.front();
first.addFront(3).addFront(1);
first.findSum();
first.contains(3);
console.log(first);
first.length();