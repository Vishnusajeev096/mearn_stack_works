//object oriented programming
//class=>blue print 
//object=>
//reference=>

//class
//construct building 
//plan,design

//object =>building

//laptop is an class
//mi note name of the laptop is  called object 

//reference

//sony bravia tv
//remote is the reference in this example
//playvideo()
//changeBrightness()
//changeVolume()

class Employee{
    setEmployee(name,age,gender){
        this.name=name;
        this.age=age,
        this.gender=gender   
    }
    printEmployee(){
        console.log(this.name,this.age,this.gender);
    }
}

//creating object 
//refname=new className()
var emp=new Employee()
emp.setEmployee("ram",20,"male")
var emp1=new Employee()
emp1.setEmployee("roy",23,"male")
emp.printEmployee()
emp1.printEmployee()

