// load Custom Module
const util = require('./utility');
const mobiles = require('./data/mobileData/mobiles');

util.getDate();

// reverse String
let msg = util.reverseString('Good Morning');
util.addToFile('message.txt',msg);

// Get Random Mobile Numbers
let numbers = mobiles.generateMobileNumbers('9887');
util.addToFile('mobiles_9887.txt',numbers);