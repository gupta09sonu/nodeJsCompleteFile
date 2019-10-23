const _ = require('lodash');
const moment = require('moment');

// Lodash module Demonstration

let name = 'John';
console.log(`is String ? ${_.isString(name)}`);

let date = new Date();
console.log(`is Date : ${_.isDate(date)}`);

// array of mixed data
let array = [100,'abc',200,'xyz',true,false,'test',250,'john'];

let findCount = (array) => {
  let numberCount = 0;
  let stringCount = 0;
  let booleanCount = 0;
   _.forEach(array, (value) => {
        _.isNumber(value) ? numberCount++ : numberCount;
        _.isString(value) ? stringCount++ : stringCount;
        _.isBoolean(value) ? booleanCount++ : booleanCount;
    });
   return { numberCount,
            stringCount,
            booleanCount};
};
let count = findCount(array);
console.log(count);


// Moment js module Demonstration
let val = moment().format('MMMM Do YYYY, h:mm:ss a');
val = moment('20181122').format('dddd'); // Monday
val = moment().format('[The Year :] YYYY');

val = moment("19881228", "YYYYMMDD").fromNow();
val = moment().startOf('day').fromNow();

val = moment().subtract(3, 'days').calendar();
console.log(val);

/*
    for more information refer https://momentjs.com/
 */