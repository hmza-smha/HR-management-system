'use-strict';

var employees = [];

function Employee(empID, fullName, department, level, image) {
        this.empID = empID,
        this.fullName = fullName,
        this.department = department,
        this.level = level,
        this.image = image,
        this.salary = 0
}

Employee.prototype.calculateNetSalary = function () {

    let salary;

    if (this.level == "Senior") {
        salary = getRandomNumberBetween(1500, 2000);
    }
    else if (this.level == "Junior") {
        salary = getRandomNumberBetween(500, 1000);
    }
    else {
        salary = getRandomNumberBetween(1000, 1500);
    }

    this.salary = salary;
    this.netSalary = salary - (salary * (7.5 / 100));
}

Employee.prototype.render = function () {

    // get this members container
    let members = document.getElementById('members-container');

    // create a card for the employee
    let card = document.createElement("div");
    card.classList.add("team-member");

    // create profile-pic for the employee
    let imgElement = document.createElement("img");
    imgElement.classList.add("profile-pic");
    imgElement.setAttribute("src", this.image);

    card.appendChild(imgElement);

    // create employee's info container
    let empInfo = document.createElement("div");
    empInfo.classList.add("info");

    // create info elements
    let id = document.createElement("p");
    let name = document.createElement("p");
    let department = document.createElement("p");
    let level = document.createElement("p");
    let salary = document.createElement("p");

    id.innerHTML = "ID: " + this.empID;
    name.innerHTML = "Name: " + this.fullName;
    department.innerHTML = "Department: " + this.department;
    level.innerHTML = "Level: " + this.level;
    salary.innerHTML = "Salary: " + this.salary;

    empInfo.appendChild(id);
    empInfo.appendChild(name);
    empInfo.appendChild(department);
    empInfo.appendChild(level);
    empInfo.appendChild(salary);

    card.appendChild(empInfo);

    members.appendChild(card);
}


document.getElementById('submit-btn').addEventListener("click", function () {

    let full_name = document.getElementById('name');
    let department = document.getElementById('department');
    let level = document.getElementById('level');
    let image = document.getElementById('image');

    if(full_name.value == ""){
        alert("Name is required!");
        return;
    }

    let empId = getUniqueRandomID();

    let newEmp = new Employee(empId, full_name.value, department.value,level.value,image.value );
    newEmp.calculateNetSalary();

    newEmp.render();

    employees.push(newEmp);
});

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUniqueRandomID() {

    let id = getRandomNumberBetween(1000, 9999);

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].empID == id) {
            id = getRandomNumberBetween(1000, 9999);
            i = 0;
        }
    }

    return id;
}

// render some emps
function addEmployee(emp){
    emp.calculateNetSalary();
    emp.render();
    employees.push(emp);
}

addEmployee(new Employee(getUniqueRandomID(), "Ghazi Samer", "Administration","Senior", "assets/Ghazi.jpg"));
addEmployee(new Employee(getUniqueRandomID(), "Lana Ali", "Finance","Senior", "assets/Lana.jpg"));
addEmployee(new Employee(getUniqueRandomID(), "Tamara Ayoub", "Marketing","Senior", "assets/Tamara.jpg"));
addEmployee(new Employee(getUniqueRandomID(), "Safi Walid", "Administration","Mid-Senior", "assets/Safi.jpg"));
addEmployee(new Employee(getUniqueRandomID(), "Omar Zaid", "Development","Senior", "assets/Omar.jpg"));
addEmployee(new Employee(getUniqueRandomID(), "Rana Saleh", "Development","Junior", "assets/Rana.jpg"));
addEmployee(new Employee(getUniqueRandomID(), "Hadi Ahmad", "Finance","Mid-Senior", "assets/Hadi.jpg"));


