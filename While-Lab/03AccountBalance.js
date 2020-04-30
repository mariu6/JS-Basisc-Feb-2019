function accountBalance(input) {
    let numberOfPayments = Number(input.shift());
    let counter = 0;
    let amount = 0;
    let total = 0;
    while(counter < numberOfPayments) {
        amount = Number(input.shift());
        if (amount < 0 || numberOfPayments < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${(amount).toFixed(2)}`);
        total += amount;
        counter++;
    }
    console.log(`Total: ${(total).toFixed(2)}`);
}
accountBalance([5,120,45.55,-150]);