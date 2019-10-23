let greet = () => {
    return 'Hello';
};

let sum = (a , b) => {
    return a + b;
};

let createUser = () => {
    let employee = {
        name : 'John',
        age : 40
    };
    return employee;
};

module.exports = {
    greet,
    sum,
    createUser
};