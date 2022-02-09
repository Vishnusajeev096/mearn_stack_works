var a = 20
var b = 25
var c = 30
if (a > b && a > c) {
    console.log(`${a} is largest`);
    if (b > c) {
        console.log(`${b}is second largest`);
        console.log(a,b,c);
    }
    else {
        console.log(`${c} is second largest`);
        console.log(a,c,b);
    }
}
else if (b > a && b > c) {
    console.log(`${b} is largest`);
    if (a > c) {
        console.log(`${a} is second largest`);
        console.log(b,a,c);
    }
    else {
        console.log(`${c} is second largest`);
        console.log(b,c,a);
    }

}
else if (c > a && c > b) {
    console.log(`${c}  is largest`);
    if (a > b) {
        console.log(`${a} is second largest`);
        console.log(c,a,b);
    }
    else {
        console.log(`${b} is second largest`);
        console.log(c,b,a);
    }
}
else if (a == b && a == c) {
    console.log(`3 are equal`);
}
