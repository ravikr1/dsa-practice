const arr = ["re"];
console.log(arr)

const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

let a = new Array(3);
console.log(a)

console.log(a[2])

a[3] = "af";
console.log(a)

console.log(a.length)

//Loop through the array
for (let i=0; i< a.length; i++){
    console.log(a[i])
}

//Append/Add new elements to array
a.push("dd")
console.log(a);

//Check if a variable is array
console.log("Using instanceof method: ",a instanceof Array)