const employee = { name: 'Steve', streetAddress: '123 Main Street'}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    Object.assign(employee);
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    Object.assign(obj);
    delete obj[key];
    return obj;
}

