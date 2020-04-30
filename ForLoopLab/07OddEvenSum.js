function oddEvenSum(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 1; i <= n; i++) {
        let number = Number(input.shift());
        if (i % 2 == 0) {
            evenSum += number;
        } else {
            oddSum += number
        }
    }
    if (evenSum == oddSum) {
        console.log(`Yes`);
        console.log(`Sum = ${oddSum}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(oddSum - evenSum)}`);
    }
}
oddEvenSum([4,3,5,1,-2]);