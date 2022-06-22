try {
    console.log(a);
    let a = 3
} catch (err) {
    console.log("Let must be declared before use");
}

// next task

try {
    let a = 1 / 1;
    if (a === Infinity) {
        throw Error('Cannot be divided by zero');
    }
    console.log('Result is ' + a)
} catch (err) {
    console.log(err);
}
