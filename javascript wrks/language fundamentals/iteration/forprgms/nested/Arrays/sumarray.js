var arr=[4,5,6]
var sum=0
var op=[]
for(let n of arr)
{
    sum+=n

}
for(let n of arr){
    op.push((sum-n));
}
console.log(op);