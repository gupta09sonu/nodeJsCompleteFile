let randomPhones =(startingNo)=>{
    let random = startingNo;
    let array = [];
    for(let i=0;i<=100;i++) {
        let mainNo = Math.floor(Math.random() * 1000000);
        if(mainNo.toString().length===5){
            let phones = random+mainNo;
            array.push(phones);
        }
    }
    return array;
};
module.exports={
    randomPhones
};
