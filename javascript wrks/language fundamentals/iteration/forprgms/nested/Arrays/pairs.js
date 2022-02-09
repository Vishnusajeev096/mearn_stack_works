var arr=[2,3,4,5]
// var sum=9
// count=1
// for(let i of arr)
// //i=2
// {
//     for(let j of arr)
//     {
//         count++
    
//         //j=2,3,4
//         if((i+j)==sum){
//             console.log(`${i},${j} pairs`);
//             break
//         }

//     }
// }
// console.log("iteration",count);
var flag=0
var low=0,upp=3
arr.sort((n1,n2)=>n1-n2)
var pairNum=7
while(low<upp)
{
    let curSum=arr[low]+arr[upp]
    if(curSum==pairNum)
    {
        flag=1
        console.log(`pairs(${arr[low]},${arr[upp]})`);
        break
    }
    else if(curSum<pairNum)
    {
        low++
    }
    else if(curSum>pairNum)
    {
        upp--
    }

}
if(flag==0)
{
    console.log("no pairs found");
}

