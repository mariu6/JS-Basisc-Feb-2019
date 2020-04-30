function halfSum(input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
        if (num > maxNumber) {
            maxNumber = num;
        }
    }
    if(maxNumber == (sum / 2)) {
        console.log(`Yes`);
        console.log(`Sum = ${maxNumber}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(maxNumber - (sum - maxNumber))}`);
    }
}
halfSum([3,5,5,1]);