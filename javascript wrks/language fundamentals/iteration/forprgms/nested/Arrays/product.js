// var products=[
//     [100,"oreo",40,50],
//     [101,"goodday",30,50],
//     [102,"hidendseek",50,0],
//     [103,"moms's",20,10],
//     [104,"treat",70,5],
//     [105,"oreo",50,80],
//     [106,"oreo",70,50],
// ]


// print costly product detail reduce

// var costlyPrdct=products.reduceRight((p1,p2)=>p1[2]>p2[2]?p1:p2)
// console.log(costlyPrdct);

// print outofstock products filter

// var outofstock=products.filter((p1,p2)=>p1[3]==0)
// console.log(outofstock);

// print oreo details find

// var oreo=products.find(p=>p[1]=="oreo")
// console.log(oreo);

// sort products based on available stock order by desc sort

// var sort=products.sort((p1,p2)=>p2[3]-p1[3])
// console.log(sort);

// print product details having maximum available stock reduce

// var maxstock=products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
// console.log(maxstock);








//*************************************************************************************************************************************

// some() method  is used if we need to know if the stock is avilable , the  value will be true or false

// var isAvailable=products.some(p=>p[2]==10)
// console.log(isAvailable);

// var stock=products.some(p=>p[3]>50)
// console.log(stock);

//is there any products available in range of 10-20

// var cost=products.some(p=>p[2]>=10 && p[2]<=20)
// console.log(cost);

// if we need to display the details we can use the filter() method in this code in the place of some() method

// forEach() is used to print the values  one by one 

// reduce are used to find --max, min,low,highest, sum etc.

// var arr=[[10,2],[12,3],[1,13]]
// arr.flat().filter(num=>num>10).forEach(n=>console.log(n));

// flat() method is used to connectb all arrays in one Array
// [[10,2],[12,3],[1,13]]
// this array changes to  this [10,2,12,3,1,13] using of Flat()

// include() method is used to check if any value is there we needed otherwise it display false

// var arr=["ravi","ram","arun"]
// console.log(arr.includes("ravi"));


//************************************************************************************************************************************