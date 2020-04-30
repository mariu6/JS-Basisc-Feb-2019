function newHouse(input) {
    let typeFlowers = input.shift();
    let volume = Number(input.shift());
    let budget = Number(input.shift());
    let price = 0;
    if(typeFlowers == "Roses") {
        price = volume * 5;
        if (volume > 80)  price *= 0.9;
    } else if(typeFlowers == "Dahlias") {
        price = volume * 3.8;
        if (volume > 90)  price *= 0.85;
    } else if(typeFlowers == "Tulips") {
        price = volume * 2.8;
        if (volume > 80)  price *= 0.85;
    } else if(typeFlowers == "Narcissus") {
        price = volume * 3.0;
        if (volume < 120)  price *= 1.15;
    } else if(typeFlowers == "Gladiolus") {
        price = volume * 2.5;
        if (volume < 80)  price *= 1.2;
    }  
    if (price > budget) {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${volume} ${typeFlowers} and ${(budget - price).toFixed(2)} leva left.`);
    }
}
newHouse(["Narcissus",119,360]);