function sumNumbers(input) {
let n = Number(input.shift());
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let nextNumber = Number(input.shift());
        sum += nextNumber;
    }
    console.log(sum);
}
sumNumbers([2,10,20]);