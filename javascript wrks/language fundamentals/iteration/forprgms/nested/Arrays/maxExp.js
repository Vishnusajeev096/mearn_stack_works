let expences=[1000,2000,3000,4000,5000]
// var total=0
// for(let amount of expences){
// total+=amount
// }
// console.log(total);



// var maxExp=0
// for(let amount of expences){
//     if(maxExp <amount)
//     {
//         maxExp=amount
//     }

// }
// console.log(maxExp);


var minExp=expences[0]
for(let amount of expences){
    if(amount<minExp)
    {
        minExp=amount
    }
}
console.log(minExp);