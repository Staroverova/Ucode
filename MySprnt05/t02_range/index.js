exports.checkDivision = (a = 1, b = 60) => {
    let result = '';
    if(a <= b && Number.isInteger(a) && Number.isInteger(b)){
      for(let i = a; i <= b; i++){
      let flag = false;
      result += `The number ${i}`;
      if(i % 2 === 0) {
          result += ` is divisible by 2`;
          flag = true;
      }
      if(i % 3 === 0) {
          result += (flag ? ',' : '') +` is divisible by 3`;
          flag = true;
      }
      if(i % 10 === 0) {
          result += (flag ? ',' : '') +` is divisible by 10`;
      }
      if(!flag){
          result += ` - `
      }
      //  if(i % 10 == 0 && i % 3 == 0 && i % 2 == 0){
      //      result += `The number ${i} is divisible by 2, is divisible by 3, is divisible by 10`
      //  }else if(i % 10 == 0 && i % 2 == 0){
      //     result += `The number ${i} is divisible by 2 is divisible by 10`
      //  }else if(i % 3 == 0 && i % 2 == 0){
      //     result += `The number ${i} is divisible by 2, is divisible by 3`
      //  }else if(i % 2 == 0){
      //     result += `The number ${i} is divisible by 2`
      //  }else if(!isDivisible){
      //      result += `The number ${i} - `
      //  }else{
      //     console.log(`Wrong input`)
      //  }
       result += '\n'
   }
   
   console.log(result)  
    }else {
        console.log(`Wrong input, first number must be smaller than second`)
    }
      
}

//------TEST---------//

// const i = require('./index')

// console.log('*** Range is 3 - 7 checkDivision(3,7) ***');
// i.checkDivision(3, 7);

// console.log('\n*** Range is 58 - ... checkDivision(58) ***');
// i.checkDivision(58);

// console.log('\n*** Range is ... - ... checkDivision() ***');
// i.checkDivision();