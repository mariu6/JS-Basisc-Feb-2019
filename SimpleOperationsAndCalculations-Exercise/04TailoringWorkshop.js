function tailoring(input) {
    let number = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());
    let areaForCover = ((length + 0.6) * (width + 0.6) * number);
    let areaForKare = ((length / 2) * (length / 2) * number);
    let priceUSD = (areaForCover * 7) + (areaForKare * 9);
    let priceBGN = priceUSD * 1.85;
    console.log(`${priceUSD.toFixed(2)} USD`);
    console.log(`${priceBGN.toFixed(2)} BGN`);
}
tailoring([5,1.00,0.50]);