class Employee{

    constructor(name,address)
    {
          this.name=name;
          this.address=address;

    }
    getEmpinfo()
    {
        return "Name"+this.name +"address "+this.address
    }

    }
let emp=new Employee("john","pune");
console.log(emp.getEmpinfo());
class Manager extends Employee{
    constructor(name,address,profile){
        super(name,address);
        this.profile=profile;
    }
    getempInfo()
{
console.log(super.getEmpinfo());  
  return this.profile;

}
 let manager=new Manager("john","pune","sr.engg");
 console.log(manager.getEmpinfo());
}



}