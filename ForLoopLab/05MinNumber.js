function minNumber(input) {
    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if(number < min) {
            min = number;
        } 
    }
    console.log(min);
}
minNumber([3,-10,20,-30,5]);