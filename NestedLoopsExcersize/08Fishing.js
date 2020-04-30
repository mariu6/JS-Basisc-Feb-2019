function fishing(input) {
    let countFishes = Number(input.shift());
    let balance = 0;
    let count = 0;
    for (let i = 1; i <= countFishes; i++) {
        let nameOfFish = input.shift();
        if (nameOfFish == "Stop") {
            break;
        } else {
            let weight = Number(input.shift());
            let charSumOfFish = 0;
            for (let j = 0; j < nameOfFish.length; j++) {
                charSumOfFish += nameOfFish.charCodeAt(j);
            }
            if (i%3 == 0){
                balance += (charSumOfFish / weight);
            } else {
                balance -= (charSumOfFish / weight);
            }
            count++;
        }
    }
    if(count == countFishes) {
        console.log("Lyubo fulfilled the quota!");
    }
    if (balance >= 0) {
        console.log(`Lyubo's profit from ${count} fishes is ${balance.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${Math.abs(balance.toFixed(2))} leva today.`);
    }
}
fishing([6,"Bluefish",17.4,"Garfish",14.9,"Stop"]);