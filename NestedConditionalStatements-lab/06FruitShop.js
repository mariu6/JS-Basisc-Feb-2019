function fruitShop(input) {
    let fruit = input.shift();
    let dayOfWeek = input.shift();
    let quantity = Number(input.shift());
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": {
            if (fruit == "banana") {
                console.log((2.5 * quantity).toFixed(2));
            } else if (fruit == "apple") {
                console.log((1.2 * quantity).toFixed(2));
            } else if (fruit == "orange") {
                console.log((0.85 * quantity).toFixed(2));
            } else if (fruit == "grapefruit") {
                console.log((1.45 * quantity).toFixed(2));
            } else if (fruit == "kiwi") {
                console.log((2.70 * quantity).toFixed(2));
            } else if (fruit == "pineapple") {
                console.log((5.50 * quantity).toFixed(2));
            } else if (fruit == "grapes") {
                console.log((3.85 * quantity).toFixed(2));
            } else {
                console.log("error");
               }
            break;
        }
        case "Saturday":
        case "Sunday": {   
            if (fruit == "banana") {  
             console.log((2.7 * quantity).toFixed(2));
           } else if (fruit == "apple") {
              console.log((1.25 * quantity).toFixed(2));
           } else if (fruit == "orange") {
               console.log((0.9 * quantity).toFixed(2));
           } else if (fruit == "grapefruit") {
              console.log((1.6 * quantity).toFixed(2));
           } else if (fruit == "kiwi") {
                console.log((3 * quantity).toFixed(2));
            } else if (fruit == "pineapple") {
                console.log((5.60 * quantity).toFixed(2));
            } else if (fruit == "grapes") {
                console.log((4.2 * quantity).toFixed(2));
           } else {
            console.log("error");
           }
           break;
        }
        default: {
            console.log("error");
        }
    }
}
fruitShop(["banana","Monday",3])