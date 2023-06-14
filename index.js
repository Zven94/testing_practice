// return the length of a string

const stringLength = (string) => {

  if ( string.length >= 1 && string.length <= 10 ) {
    console.log (string.length);
    return string.length;
  } else {
    console.log ('ERROR length not supported');
    return 'ERROR length not supported';
  }
};

// return the reverse of a string

const reverseString = (string) =>{
  let newString = '';

  if ( string.length >= 1 && string.length <= 10 ) {
    for ( let i = string.length - 1; i >= 0; i--){
      newString += string[i];
    }
    return newString
    
  } else {
    return 'ERROR length not supported';
  }
  
};

// return the first character of a string capitalize

const capitalize = (string) => {
  const newStr = string.charAt(0).toUpperCase() + string.slice(1);
  console.log(newStr)
  return newStr
};

// create calculator with class

class Calculator {
  constructor(value1,value2){
    this.value1 = value1;
    this.value2 = value2;
    this.total = 0;
  }
  add(){
    this.total = this.value1 + this.value2;
    console.log(this.total);
    return this.total;
  }
  subtract(){
    this.total = this.value1 - this.value2;
    console.log(this.total);
    return this.total;
  }
  divide(){
    this.total = this.value1 / this.value2;
    console.log(this.total);
    return this.total;
  }
  multiply(){
    this.total = this.value1 * this.value2;
    console.log(this.total);
    return this.total;
  }
}

stringLength('hello world');
reverseString('hello');
capitalize('home sweet home');

const calculadora = new Calculator(10,10);

calculadora.add();
calculadora.subtract();
calculadora.divide();
calculadora.multiply();

module.exports = {stringLength, reverseString, Calculator, capitalize};