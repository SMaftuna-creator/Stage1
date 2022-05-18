let car = {
  color: "black",
}
// to check the color of the car:
console.log( car.color ) // black


let car = {
  color: "green",
}
// to check the color of the car:
console.log( car.color ) // green


function power() {
    let engine = 500;
    console.log(engine);
}
power();


let warehouse = {
  apple: 82,
  pear: 58,
};

let sum = 0;
for (let key in warehouse) {
  sum += warehouse[key];
}

console.log(sum + ' kg');


let user = {
  name: "Maftuna",
};

for (let key in user){
prompt("Hello", "name");
}
prompt("There is no such name")

alert(user[key]);


let x = 24, y = 12, z = '12';
console.log((x + y), typeof(x + y)) // 36 'number
console.log((x + z), typeof(x + z)) // 2412 string, second form of addition number with string, z is string, this is why output is string
console.log((x - y), typeof(x - y)) // 12 'number'
console.log((x * y), typeof(x * y)) // 288 'number'
console.log((x / y), typeof(x / y)) // 2 'number'



const isPrime = prompt("Please enter any number", " ");
for(let i = 2, s = Math.sqrt(isPrime); i <= s; i++)
if(isPrime % i === 0){
    x = "This is not prime number!";
}else {
    x = "This is prime number!";
}
console.log (x);
