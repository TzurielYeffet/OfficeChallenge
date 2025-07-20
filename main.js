//write your code here to make the tests pass

class Document{
    constructor(employeeName){
        this.EmployeeName = employeeName;
    }

    get employeeName(){
        return this.EmployeeName
    }
}

class Employee{
    constructor(name){
        this.name = name;
    }

    work(office){
        for(let i=0;i<10;i++){
            let document = new Document(this.name) 
            office.documents.push(document);
        } 
    }
}

class Manager{
    constructor(name){
        this.name=name;
        this.employees = [];
    }

    hireEmployee(name){
        let emp = new Employee(name)
        this.employees.push(emp)
    }

    askEmployeesToWork(office){
        for(let emp of this.employees){
            emp.work(office);
        }
    }
}

class Cleaner{
    constructor(name){
        this.name = name;
    }
    clean(){
        console.log("Clean");
        
    }
}

class Office{
    constructor(){
        this.documents= [];
        this.managers=[];
        this.cleaners = [];
    }
    hireCleaner(name){
        let cleaner = new Cleaner(name)
        this.cleaners.push(cleaner);
    }
    hireManager(name){
        let manager = new Manager(name)
        this.managers.push(manager);
    }
    startWorkDay(){
        this.managers.forEach(man => man.askEmployeesToWork(this));
        for(let cle of this.cleaners){
            cle.clean();
        }
    }
}