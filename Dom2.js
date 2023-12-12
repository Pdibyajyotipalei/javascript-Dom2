//set
//how to declare set

const mySet = new Set();
console.log(mySet)

//Add Element into set
mySet.add(3)
mySet.add(3)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(3)
mySet.add(5)
mySet.add(8)
console.log(mySet)

//how to find size of set

console.log(mySet.size);
//how to delet element from set
 
console.log(mySet.delete(5))
console.log(mySet)

//how to cheak element is exist in the set or not

console.log(mySet.has(60))

//iteration in the set 
for(let values of mySet)
console.log(values)