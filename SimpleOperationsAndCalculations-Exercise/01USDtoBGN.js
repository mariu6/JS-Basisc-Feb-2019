function usdToBgn(input) {
    let usd = Number(input.shift());
    console.log((usd * 1.79549).toFixed(2));
}
usdToBgn([20]);