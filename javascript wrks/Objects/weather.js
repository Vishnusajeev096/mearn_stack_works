var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
    

]
var weatherOut={}
for(let recrd of data)
{
    let cityName=recrd["districtname"]
    let temp=recrd["weather"]
    if(cityName in weatherOut)
    {
        let oldtemp=weatherOut[cityName]
        if(temp>oldtemp)
        {
        weatherOut[cityName]=temp
        }
    }  
    else
    {
        weatherOut[cityName]=temp
    }
}
console.log(weatherOut);
console.log(Object.entries(weatherOut).sort((r1,r2)=>r2[1]-r1[1]));
