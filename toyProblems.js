//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (str){
    let split = str.split('')
    let string = split.reverse()
    return string.join('')
  },
  
  

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function (arr){
    return arr.filter((elem, i, array) => {
      return array.indexOf(elem) == i
    })
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(string){
    let str = string.toLowerCase().split(' ');
    
    
      for(var i = 0; i < str.length; i++){              
        str[i] = str[i].split('');                    
        str[i][0] = str[i][0].toUpperCase();          
        str[i] = str[i].join('');                    
    }
    
    return str.join(' ');  
    
    },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

 

  vowelCounter: function(str){
    let count = 0;
    let arr = str.split('')
    arr.forEach((letter) => {
      if(/^[aeiou]$/i.test(letter.toLowerCase()))  
        count++
    })
    return count;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num){
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false
      }
    }
    if(num > 0){
      return true
      } else {
        return false
      }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1:'Hello World',

  log2: undefined
}
