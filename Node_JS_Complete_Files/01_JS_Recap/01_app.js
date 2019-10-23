let greet = () => {
    console.log('Welcome to Node JS');
};

greet();

let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    college : 'IIT Mumbai',
    address : {
        city : 'Mumbai',
        state : 'MH',
        country : 'India'
    }
};
console.log(student);

// Get Date
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
},1000);