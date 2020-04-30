function fishingBoat(input) {
    let budget = Number(input.shift(2));
    let season = input.shift();
    let fisherman = Number(input.shift(2));
    let price = 0;
    discount = 0;
    switch (season) {
        case "Spring": {
            price = 3000;
            break;
        }
        case "Summer":
        case "Autumn": {
            price = 4200;
            break;
        }
        case "Winter": {
            price = 2600;
            break;
        }
    }
    if (fisherman <=6) price *= 0.9;
    else if (fisherman > 6 && fisherman <= 11) price *= 0.85;
    else price *= 0.75;
    if ((fisherman % 2 == 0) && season != "Autumn") {
        price *= 0.95;
    } 
    if(price > budget) 
    console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    else console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
}
fishingBoat([2000,"Winter",13]);