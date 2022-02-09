// var pattern="ABABBCC"

// var wc={}
// for(let char of pattern)
// //char=A
// {
//     if(char in wc)
//     {
//         console.log(`${char} is first recursive character`);
//         break
//     }
//     else
//     {
//         wc[char]=1
//     }
// }

var arr=[10,10,20,20,30,30,40,40,50,50,50]

var nc={}
// for(let num of arr)
// {
//     if(num in nc)
//     {
//         nc[num]+=1
//     } 
//     else{
//         nc[num]=1
//     }
// }
// console.log(nc);

arr.map(num=>num in nc?nc[num]+=1:nc[num]=1)
console.log(nc);
