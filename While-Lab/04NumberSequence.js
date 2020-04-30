function numberSequence(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let command = input.shift();
    while(command != "END") {
        let num = Number(command);
        if (num > maxNumber) {
            maxNumber = num;
        }
        if (num < minNumber) {
            minNumber = num;
        }
        command = input.shift();
    }
    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}
numberSequence([10,20,304,0,50,"END"]);