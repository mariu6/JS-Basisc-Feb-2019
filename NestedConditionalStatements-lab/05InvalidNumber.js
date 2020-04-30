function invalidNumber(input) {
    let number = Number(input.shift());
    if (number != 0 && (number > 200 || number < 100)) {
        console.log("invalid");
    }
}
invalidNumber([0]);