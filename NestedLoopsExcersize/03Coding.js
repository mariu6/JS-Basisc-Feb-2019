function coding(input) {
    let stringNum = (input[0]).toString();          
    for (let i = (stringNum.length - 1); i >= 0; i--) {
        let currentDigitToNum = Number(stringNum[i]);
        if (currentDigitToNum == 0) {
            console.log("ZERO");
            continue;
        }
        let printLine = "";
        for (let n = 1; n <= currentDigitToNum; n++) {
            printLine += String.fromCharCode(currentDigitToNum + 33);
        }
        console.log(printLine);
    }
}
coding([2049]);