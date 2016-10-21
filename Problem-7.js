'use strict';

function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}
console.log(isPalindrome('taxocat'));