function eqSums(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let printLine = "";
    for (let i = firstNum; i <= secondNum; i++) {
        let stringNum = i.toString();
        var left = Number(stringNum.charAt(0)) + Number(stringNum.charAt(1));
        var right = Number(stringNum.charAt(3)) + Number(stringNum.charAt(4));
        if (left > right) {
            right += Number(stringNum.charAt(2));
        } else if (left < right) {
            left += Number(stringNum.charAt(2));
        }
        if(left == right) {
            printLine += i + " ";
        }
    }
    console.log(printLine);
}
eqSums([19995,20000]);