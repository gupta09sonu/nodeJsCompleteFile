let generateMobileNumbers = (startingNumber) => {
    let mobileNumbers = [];
    for(let i=1; i<=1000; i++){
        let tempNumber = startingNumber;
        let random = Math.floor(Math.random() * 1000000);
        if(random.toString().length ===5 ){
            let mobileNumber = tempNumber + random;
            mobileNumbers.push(mobileNumber);
        }
    }
    return mobileNumbers;
};

module.exports = {
    generateMobileNumbers
};