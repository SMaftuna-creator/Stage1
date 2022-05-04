for (const match of 'ahb acb aeb aeeb adcb axeb'.matchAll(/a.b/g)) {
  console.log(match)
}

let date = new Date();
console.log( date.getHours(), date.getMinutes(), date.getSeconds(), date.getDate(), date.getMonth(), date.getFullYear() );
