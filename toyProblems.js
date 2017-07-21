//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt:

  // uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  // reverse it

  function reverseIt(string){
    var str = string.split("").reverse().join("");
    return str;
  }

  removeDups:
  function removeDups(array){
  var newArr = array.filter(function(elem, idx) {
      return array.indexOf(elem) === idx;
  })
    return newArr;
  }
  // uncomment and finish the removeDups function. It will take in one parameter which is an Array
  // remove all duplicates
  //


  titleIt:
  function titleIt(string){
    return string.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  // uncomment and finish the titleIt function. It will take in one parameter which is a String and
  // capitalize the first letter of each word



  vowelCounter:
  function vowelCounter(string){
    var count = 0;
    var string = string.toLowerCase()

    for(var i = 0; i < string.length; i++){
        if(string[i] == 'a' || string[i] == 'i' || string[i] == 'o' ||string[i] == 'e' ||string[i] == 'u'){
      count+=1;
    }
  }
 return count;
}
  // uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  // return the number of vowels in the string



  isPrime:
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;}
    }
    return num > 1;
  }
  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not



  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: undefined;

  // what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World";
  log2: null;
}
