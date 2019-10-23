// Load custom module
const util = require('./utility');
const phone = require('./info/phone/numbers');
//Get Date
util.getDate();
//Reverse String
let msg =util.reverseString("My Name Is Sonu");
//Add To File
util.addToFile('myName.txt',msg);

//Get Random Mobile Number
let tel =phone.randomPhones('9893');
util.addToFile('contacts.txt',tel);