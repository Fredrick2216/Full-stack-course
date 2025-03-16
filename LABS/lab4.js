// Step 1: Create an Array of Employees
let employees = [
    { employeeId: 101, name: "Alice Johnson", designation: "Software Engineer", salary: 60000 },
    { employeeId: 102, name: "Bob Smith", designation: "Data Analyst", salary: 55000 },
    { employeeId: 103, name: "Charlie Brown", designation: "Project Manager", salary: 75000 },
  ];
  
  // Step 2: Manipulate the Array
  // Function to add a new employee
  function addEmployee(id, name, designation, salary) {
    employees.push({ employeeId: id, name: name, designation: designation, salary: salary });
    console.log(`Employee ${name} added successfully.`);
  }
  
  // Function to remove an employee by index
  function removeEmployee(index) {
    if (index >= 0 && index < employees.length) {
      let removed = employees.splice(index, 1);
      console.log(`Employee ${removed[0].name} removed successfully.`);
    } else {
      console.log("Invalid index. No employee removed.");
    }
  }
  
  // Step 3: Display Employee Records
  function displayEmployees() {
    console.log("\nEmployee Records:");
    employees.forEach((emp, index) => {
      console.log(
        `Index: ${index}, ID: ${emp.employeeId}, Name: ${emp.name}, Designation: ${emp.designation}, Salary: ${emp.salary}`
      );
    });
  }
  
  // Initial display of employees
  displayEmployees();
  
  // Adding a new employee
  addEmployee(104, "David Lee", "UI/UX Designer", 58000);
  displayEmployees();
  
  // Removing an employee (by index)
  removeEmployee(1);
  displayEmployees();
  