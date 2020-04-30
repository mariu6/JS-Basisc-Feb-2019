function minNumber(input) {
    let n = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if(number > max) {
            max = number;
        } 
    }
    console.log(max);
}
minNumber([3,-10,20,-30,5]);