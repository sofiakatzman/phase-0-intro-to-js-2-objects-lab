// Write your solution in this file!


const employee = {
    name: "Sofia" , 
    streetAddress: "12 Broadway" };

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {
    ...employee, [key] : value,}
    }

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}



function deleteFromEmployeeByKey (employee, key) {
       const newEmployee = {...employee[key]};
       delete newEmployee.key;        
       return newEmployee;
}



function destructivelyDeleteFromEmployeeByKey (employee, key) {
    const originalEmployee = {employee, key};
    delete employee.firstname;
    return originalEmployee; 
}



