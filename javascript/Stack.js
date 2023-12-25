//Implementation of Stack
class Stack{

    constructor(){
        this.items = [];
    }

    //Add element to the stack
    push(item){

        this.items.push(item);

    }

    //Remove element from the stack
    pop(){

        if (this.items.length==0){
            return "Underflow"
        }
        else{
            return this.items.pop();
        }
    }

    //Returns the topmost item but doesn't delete it
    peek(){

        if (this.items.length==0){
            return "Underflow"
        }
        else{
            return this.items[this.items.length - 1];
        }

    }

    // isEmpty function
    isEmpty()
    {
        // return true if stack is empty
        return this.items.length == 0;
    }

    
    // printStack function
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    

}


// creating object for stack class
var stack = new Stack();
 
// testing isEmpty and pop on an empty stack
 
// returns false
console.log(stack.isEmpty()); 
 
// returns Underflow
console.log(stack.pop()); 