function fishing(input) {
    let quota = Number(input.shift());
    let fishName = input.shift();
    let fishCount = 0;
    let profit = 0;
    while(fishName != "Stop") {
        let fishKg = Number(input.shift());
        fishCount++;
        let price = 0;
        for (let i = 0; i < fishName.length; i++) {
            price += fishName.charCodeAt(i);
        }
        price /= fishKg;
        if(fishCount % 3 == 0) {
            profit += price;
        } else {
            profit -= price;
        }
        if (fishCount == quota) {
            console.log("Lyubo fulfilled the quota!");
            break;
        }
        fishName = input.shift();
    }
    if(profit >= 0) {
        console.log(`Lyubo's profit from ${fishCount} fishes is ${(profit.toFixed(2))} leva.`);
    } else {
        console.log(`Lyubo lost ${Math.abs(profit.toFixed(2))} leva today.`);
    }
}
fishing([3,"catfish",70,"carp",20,"tench",14]);