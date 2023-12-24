//Implementation of class Arrray

class Array{

    //Create constructor
    constructor(){

        //Store length of array
        this.length = 0;

        //Object to store elements
        this.data = {};
    }

    //Custom push method
    push(element){

        this.data[this.length] = element;
        this.length++;
        return this.data;

    }

    //Custom pop method
    pop(){

        let item = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--;
        return this.data;
    }

    //Custom insert method
    insertAt(item, index){
        for(let i=this.length; i>=this.length; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    }

    //Custom delete method
    deleteAt(index){

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }

    //Get element at index
    getElementAtIndex(index){

        return this.data[index];

    }
}


const arr = new Array();
arr.push(20);
arr.push(30);
console.log(arr)
arr.insertAt(40, 3)
console.log(arr)