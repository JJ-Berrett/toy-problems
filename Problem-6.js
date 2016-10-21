'use strict';

/**
 * Write a function that accepts a string as an argument
 * and breaks up that string into pieces anywhere there
 * is a new line and not a regular space.
 * The function should return an array of pieces
 */

let theString = 'Hello \n my name is \n JJ';

function newLine(myString){
 return myString.split('\n');
}



console.log(newLine(theString));