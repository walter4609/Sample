class EmployeeDetials{

    setEmployeeDetials(name,Id,Phnomber){
        this.name = name;
        this.Id= Id;
        this.Phnomber= Phnomber;
    }

    getEmpName(){
        return this.name;
    }

    getEmpId(){
        return this.Id;
    }

    getEmpPhnomber(){
        return this.Phnomber;
    }
}

let emp1= new EmployeeDetials();
emp1.setEmployeeDetials('Walter','4609','495945948');
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhnomber());