function equalPairs(input) {
    let n = Number(input.shift());
    let first = Number(input.shift());
    let second = Number(input.shift());
    let buffer = (first + second);
    let diff = 0;
    for (let i = 1; i < n; i++) {
        first = Number(input.shift());
        second = Number(input.shift());
        if(buffer != (first + second)){
            diff = Math.abs(buffer - (first + second));
        }
        buffer = (first + second);
    }
    if (diff == 0) {
        console.log(`Yes, value=${buffer}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}
equalPairs([2,1,2,2,2]);