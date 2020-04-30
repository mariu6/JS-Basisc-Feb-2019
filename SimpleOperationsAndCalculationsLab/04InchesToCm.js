function calculator(input) {
    let inches = Number(input.shift());
    console.log((inches * 2.54).toFixed(2));
}
calculator([5])