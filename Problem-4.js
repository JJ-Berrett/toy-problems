// Write a function that accepts a number argument
// and returns the factorial of that number (5! = 120)

var factorial = function(num){
  if(num === 0) {
    return 1;
  }
    return num * factorial(num -1);
};