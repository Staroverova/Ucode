module.exports = class StrFrequency {
    constructor(str) {
      this.str = str;
      this.strUp = str.toUpperCase();
    }
    obj;
    letterFrequencies() {
       this.obj = {};
      let regExp = /[a-z]/i;
      for (let i = 0; i < this.strUp.length; i++) {
         if (regExp.test(this.strUp[i])) {
            if (this.obj[this.strUp[i]]){
              this.obj[this.strUp[i]] += 1
            }else {
              this.obj[this.strUp[i]] = 1;
            }
        }
      }
      return this.obj;
    }
    wordFrequencies() {
        let result = '';
        this.obj = {};
        let regExp = /[a-z\s]/i;
        for (let i = 0; i < this.strUp.length; i++){
          if(regExp.test(this.strUp[i])){
            result += this.strUp[i]
            
          }              
        }
        result.split(' ').map(item => {
          if(item.length > 0){
            this.obj[item] = this.obj[item] ? this.obj[item] + 1 : 1
          }});
        return this.obj
    }
    reverseString() {
      return [...this.str].reverse().join('')
    }
  };
  