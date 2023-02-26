// Write your solution in this file!

let employee = {
    name: "Sofia",
    streetAddress: "Canal"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newUpdatedEmployee = {...employee}
    newUpdatedEmployee[key] = value
    return newUpdatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee[key]}
    delete newEmployee[key]       
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}