function calcFactor(base,exponent){
  if(exponent == 0){
    return 1;
  }
  else{
    return base *= calcFactor(base, exponent -1);
  }
}

console.log(calcFactor(8,3));