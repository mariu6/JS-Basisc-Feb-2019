function alcoholMarket(input) {
    let priceWiskey = Number(input.shift());
    let amountBeer = Number(input.shift());
    let amountWine = Number(input.shift());
    let amountRakia = Number(input.shift());
    let amountWiskey = Number(input.shift());
    let priceRakia = priceWiskey / 2;
    let priceWine = priceRakia * 0.6;
    let priceBeer = priceRakia * 0.2;
    console.log(((amountBeer * priceBeer) + (amountRakia * priceRakia) + (amountWine * priceWine) + (amountWiskey * priceWiskey)).toFixed(2));
}
alcoholMarket([50,10,3.5,6.5,1]);