// function add(num1,num2){
//     return num1+num2
// }
// function add(n1,n2,n3)
// {
//     return n1+n2+n3
// }

// function add(n1,n2,n3,n4)
// {
//     console.log("4 params argument");
//     return n1+n2+n3+n4
// }
// console.log(add(10,20,30,40));
// console.log(add(10,20,30));
 
//its an function overloading situation in javascript doesn't have function overloading 

//spread operator is used in two or more params in an argument

//spread is denoted by 3 dots (...)

function add(...name){
    console.log("arg method");
    console.log(name);
}
add(10,12,3)

function add(...arg)
{
    return arg.reduce((n1,n2)=>n1+n2)
    console.log(add(10,20));
}

function findMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findMax(10,20,30));