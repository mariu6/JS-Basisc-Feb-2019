function cleverLily(input) {
    let age = Number(input.shift());
    let priceOfWashingmachine = Number(input.shift());
    let priceOfToy = Number(input.shift());
    let amount = 0;
    for (let i = 1; i <= age; i++) {
        if(i % 2 == 1) {
            amount += priceOfToy;
        } else {
            amount += (i * 5);
            amount --;
        }
    }
    if (amount >= priceOfWashingmachine) {
        console.log(`Yes! ${(amount - priceOfWashingmachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceOfWashingmachine - amount).toFixed(2)}`);
    }
}
cleverLily([21,1570.98,3]);