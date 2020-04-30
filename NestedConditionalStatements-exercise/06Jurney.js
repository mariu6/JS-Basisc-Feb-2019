function jurney(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let destination = ["Bulgaria", "Balkans", "Europe"];
    if (budget <= 100) {
        console.log(`Somewhere in ${destination[0]}`);
        switch (season) {
            case "summer": {
                console.log(`Camp - ${(budget * 0.3).toFixed(2)}`);
                break;
            }
            case "winter": {
                console.log(`Hotel - ${(budget * 0.7).toFixed(2)}`);
                break;
            }
        }
    } else if (budget <= 1000) {
        console.log(`Somewhere in ${destination[1]}`);
        switch (season) {
            case "summer": {
                console.log(`Camp - ${(budget * 0.4).toFixed(2)}`);
                break;
            }
            case "winter": {
                console.log(`Hotel - ${(budget * 0.8).toFixed(2)}`);
                break;
            }
        }
    } else  {
        console.log(`Somewhere in ${destination[2]}`);
        console.log(`Hotel - ${(budget * 0.9).toFixed(2)}`);       
    }
}
jurney ([1500,"summer"]);