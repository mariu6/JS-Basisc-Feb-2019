function summerOutfit(input) {
    let temperature = Number(input.shift());
    let time = input.shift();
    if(temperature <= 18) {
        if (time == "Morning") {
            console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`);
        } else if (time == "Afternoon") {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        } else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    } else if (temperature > 18 && temperature <= 24) {
        if (time == "Morning") {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        } else if (time == "Afternoon") {
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        } else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    } else {
        if (time == "Morning") {
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        } else if (time == "Afternoon") {
            console.log(`It's ${temperature} degrees, get your Swim Suit and Barefoot.`);
        } else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    }         
}
summerOutfit([28,"Evening"]);