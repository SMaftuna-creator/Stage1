// performing addition
// addition of string with boolean
alert( '4 ' +  true );  // 4 true
alert( '4 ' + "" ); // 4

//string + number
alert( '5' + 6 ); // 56
alert('12' + 34); // 1234

// number + boolean 
alert(7 + true); // 8
alert (7 + ""); // 7


// performing multiplication
// multiplication of string with boolean
alert( '4 ' *  true );  // 4
alert( '4 ' * "" ); // 0

//string * number
alert( '5' * 6 ); // 30
alert('12' * 34); // 408

// number * boolean 
alert(8 * true); // 7
alert (7 * ""); // 0


//Division
// division of string with boolean
alert( '10 ' /  true );  // 10
alert( '6 ' / "" ); //  infinity

//string / number
alert( '12' / 6 ); // 2
alert('102' / 34); // 3

// number / boolean 
alert(7 / true); // 7
alert (9 / ""); //  Infinity


//explicit conversion
// number conversion
alert( "15" / "3" ); // 5, strings are converted to numbers

//string conversion
let value = true;
alert(typeof value); // boolean

//boolean conversion
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false