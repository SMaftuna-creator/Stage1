for (const match of 'ahb acb aeb aeeb adcb axeb'.matchAll(/a.b/g)) {
  console.log(match)
}

let date = new Date();
console.log( date.getFullYear(), date.getDate(), date.getMonth() );
