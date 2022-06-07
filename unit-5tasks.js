let movies = ["Code 355", "Unbroken", "Little women"];
movies.forEach(console.log)

    ****or****
    
["Code 355", "Unbroken", "Little women"].forEach(console.log);


let numbers = [10, 15, 20, 30];
let numbersToString = numbers.toString();

console.log(numbersToString);

const str = numbersToString;
const arrayNum = str.split(',');

console.log(arrayNum)



var friends = ["Guli", "Shohsanam", "Sayyora"];    
friends = friends.map(i => 'Hello ' + i);
console.log(friends);



var array = [1, 2, 3],
    object = Object.assign(...array.map(k => ({ [k]: true })));

console.log(object);




let arr = [1,6,7,8,3,4,5,6];
arr.sort().reverse();

console.log(arr); 

// another way that has given in learning materials

let arr = [1,6,7,8,3,4,5,6];
arr.sort((a, b) => b - a);

console.log(arr);


let numbers = [1,6,7,8,3,4,5,6];
let filteredNumbers = numbers.filter(item => item > 3);

console.log(filteredNumbers); 


function myFunction(arr, num) {
    let number = arr.find(item => item.index = a);
}
getIndexOfIns(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'], 5)


function getIndexOfIns(arr, num) {
    let number = arr.find(item => item.index = num);
}
getIndexOfIns(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'], 5)
console.log(number)

//console a until it is less than 10
let a = 0
while (a > 10) {
    console.log(a)
    a++;
}

//print prime numbers until 10
let n = 10;

primeNum:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue primeNum; 
  }

  console.log( i ); 
}

//console odd number until 10
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    console.log( i );
  }

}
