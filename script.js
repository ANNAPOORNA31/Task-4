// Employee class
class Employee {
    constructor(name, age, department, salary) {
      this.name = name;
      this.age = age;
      this.department = department;
      this.salary = salary;
    }
  }
  
  // Function to add employee
  function addEmployee() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
  
    const employee = new Employee(name, age, department, salary);
    displayEmployee(employee);
  }
  
  // Function to display employee
  function displayEmployee(employee) {
    const employeesList = document.getElementById('employees-list');
  
    const employeeDiv = document.createElement('div');
    employeeDiv.classList.add('employee');
    employeeDiv.innerHTML = `
      <p><strong>Name:</strong> ${employee.name}</p>
      <p><strong>Age:</strong> ${employee.age}</p>
      <p><strong>Department:</strong> ${employee.department}</p>
      <p><strong>Salary:</strong> ${employee.salary}</p>
    `;
  
    employeesList.appendChild(employeeDiv);
  }
  