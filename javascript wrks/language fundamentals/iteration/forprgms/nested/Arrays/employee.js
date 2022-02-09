var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]


//total salary

// var totalsalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalsalary);

//min salary

// var minsalary=employees.reduce((min1,min2)=>min1[4]<min2[4]?min1:min2)
// console.log(minsalary);


//q1 print employee names 

// for(let emp of employees){
//     console.log(emp[1]);
// }

//q2  print number of employees

// console.log(employees.length);


//q3 print developer details

// for(let emp of employees){
//     if(emp[2]=="developer"){
//         console.log(emp);
//     }
// }

// var developer=employees.filter(emp=>emp[2]=="developer")
// console.log(developer);

//q4 print employees details  whose salary > 35k

// for(let emp of employees){
//     if(emp[4]>35000){
//         console.log(emp);
//     }
// }

//q5  print details of employee arjun

// for(let emp of employees){
//     if(emp[1]=="arjun"){
//         console.log(emp);
//     }
// }

var fresherEmp=employees.reduceRight((e1,e2)=>e1[5]<e2[5]?e1:e2)
console.log(fresherEmp[1])