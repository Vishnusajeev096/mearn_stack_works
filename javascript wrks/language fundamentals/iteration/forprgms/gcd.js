var num1=12,num2=48
var gcd=1
for(let i=1;i<=num2;i++){
    if((num1%i==0)&&(num2%i==0))
    {
        gcd=i
        
    }
}
console.log(gcd);