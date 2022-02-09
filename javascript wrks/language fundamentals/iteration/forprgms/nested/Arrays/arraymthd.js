var arr=[1,2,3,6,7,8]

//create  a array if num<5 num-1 else num+1

// var op=arr.map(num=>num<5?num-1:num+1)
// console.log(op);

//print all numbers >12
// console.log(arr.filter(num=>num>12));

//map()
//filter()
//sort()
//find()
//reduce()

var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);