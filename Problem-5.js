//Middle three. Return the middle three numbers of for an integer that is passed in.

function middle(num){
  var numString = num.toString();
  var numLength = numString.length;
  if(numLength <= 4){
    return console.log("Please enter a number with more than 4 digits.");
  }
  else if(numLength % 2 === 0){
    console.log("Unable to provide exact middle three numbers");
  }
  var middle = Math.floor( numLength / 2);
  return parseInt(numString[middle -1] + numString[middle] + numString[middle +1]);
}
