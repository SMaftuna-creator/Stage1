try {
    console.log(a);
    let a = 3
} catch (err) {
    console.log("Let must be declared before use");
}

// next task

try {
    console.log(a);
    let a = 1 / 0
} catch (err) {
    console.log('Cannot be divided by zero');
}
