class Course{
    setCourseDetails(c_name,fee,duration){
        this.courseName=c_name;
        this.fees=fee;
        this.duration=duration;
    }
    printCourseDetails(){
        console.log(this.courseName,this.fees,this.duration);
    }
}
var ms=new Course()
ms.setCourseDetails("mearnstack",5000,5)
ms.printCourseDetails()

var dj=new Course()
dj.setCourseDetails("django",45000,5)
dj.printCourseDetails()
