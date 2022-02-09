var arr = [10, 20, 10, 20, 11, 12]
flag=0
for(let pos in arr)
{
    num=arr[pos]
    for (let pos=0;pos==num;pos++)
    {
        console.log("duplicates are ",num);
    }
}