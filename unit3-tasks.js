// performing addition
// addition of string with boolean
console.log( '4 ' +  true );  // 4 true
console.log( '4 ' + "" ); // 4

//string + number
console.log( '5' + 6 ); // 56
console.log('12' + 34); // 1234

// number + boolean 
console.log(7 + true); // 8
console.log (7 + ""); // 7


// performing multiplication
// multiplication of string with boolean
console.log( '4 ' *  true );  // 4
console.log( '4 ' * "" ); // 0

//string * number
console.log( '5' * 6 ); // 30
console.log('12' * 34); // 408

// number * boolean 
console.log(8 * true); // 7
console.log (7 * ""); // 0


//Division
// division of string with boolean
console.log( '10 ' /  true );  // 10
console.log( '6 ' / "" ); //  infinity

//string / number
console.log( '12' / 6 ); // 2
console.log('102' / 34); // 3

// number / boolean 
console.log(7 / true); // 7
console.log (9 / ""); //  Infinity


//explicit conversion
// number conversion
console.log( "15" / "3" ); // 5, strings are converted to numbers

//string conversion
let value = true;
console.log(typeof value); // boolean

//boolean conversion
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
