// Step 1: Create an Object
const employee = {
    employeeId: 101,
    name: "John Doe",
    designation: "Software Developer",
    salary: 50000,
  
    // Method to give a raise
    giveRaise: function (amount) {
      this.salary += amount;
      console.log(`Salary updated. New salary: ${this.salary}`);
    },
  
    // Method to change designation
    changeDesignation: function (newDesignation) {
      this.designation = newDesignation;
      console.log(`Designation updated. New designation: ${this.designation}`);
    },
  };
  
  // Step 2: Manipulate the Object
  // Initialize with sample data
  console.log("Initial Employee Data:");
  console.log(`ID: ${employee.employeeId}`);
  console.log(`Name: ${employee.name}`);
  console.log(`Designation: ${employee.designation}`);
  console.log(`Salary: ${employee.salary}`);
  
  // Update employee's salary and designation
  employee.giveRaise(10000);
  employee.changeDesignation("Senior Software Developer");
  
  // Step 3: Display Object Data
  function displayEmployeeDetails(emp) {
    console.log("\nUpdated Employee Details:");
    console.log(`ID: ${emp.employeeId}`);
    console.log(`Name: ${emp.name}`);
    console.log(`Designation: ${emp.designation}`);
    console.log(`Salary: ${emp.salary}`);
  }
  
  // Call the function to display updated details
  displayEmployeeDetails(employee);
  