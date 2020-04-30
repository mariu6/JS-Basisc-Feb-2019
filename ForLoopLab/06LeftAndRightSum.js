function leftRightSum(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < n; i++) {
        let left = Number(input.shift());
        leftSum += left;        
    }
    for (let i = 0; i < n; i++) {
        let right = Number(input.shift());
        rightSum += right;    
    }
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`)
    }
}
leftRightSum([2,90,9,50,50]);