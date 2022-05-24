for (const match of 'ahb acb aeb aeeb adcb axeb'.matchAll(/a.b/g)) {
  console.log(match)
}


let str = "2 + 3 223 2223";
let result = str.match(/2 + 3/);
console.log(result);


let date = new Date();
console.log( date.getFullYear(), date.getDate(), date.getMonth() );
