class student{
    constructor(rolno,sname,course,total){
        this.roll=rolno;
        this.name=sname;
        this.course=course;
        this.total=total
    }
    printDetails(){
        console.log(this.roll,this.name,this.course,this.total);
    }
}

var st=new student(10,"amal","ms",400)
var st1=new student(10,"viz","ms",400)
st.printDetails()
//variable are prepended with this instance variables
//initializing instance variable 
//constructor =>initializing instance variable 
//python __init__()
//java same as class name 
//javascript constructor()