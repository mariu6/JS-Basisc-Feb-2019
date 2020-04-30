function smallShop(input) {
    let productName = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());
    let price = 0;
    switch (productName) {
        case "coffee": 
            switch (city) {
                case "Sofia": 
                    price = (0.50 * quantity);
                break;
                case "Plovdiv": 
                    price = (0.40 * quantity);
                break;
                case "Varna": 
                    price = (0.45 * quantity);
                break; 
            }
            break;
           
        case "water": 
            switch (city) {
                case "Sofia": 
                    price = (0.80 * quantity);
                break;
                case "Plovdiv": 
                    price = (0.70 * quantity);
                break;
                case "Varna": 
                    price = (0.70 * quantity);
                break; 
            }
            break;
       
        case "beer": 
            switch (city) {
                case "Sofia": 
                    price = (1.20 * quantity);
                break;
                case "Plovdiv": 
                    price = (1.15 * quantity);
                break;
                case "Varna": 
                    price = (1.10 * quantity);
                break; 
                }
            break;
            
        case "sweets": 
            switch (city) {
                case "Sofia": 
                    price = (1.45 * quantity);
                break;
                case "Plovdiv": 
                    price = (1.30 * quantity);
                break;
                case "Varna": 
                    price = (1.35 * quantity);
                break; 
            }
            break;
        
            case "peanuts": 
            switch (city) {
                case "Sofia": 
                    price = (1.60 * quantity);
                break;
                case "Plovdiv": 
                    price = (1.50 * quantity);
                break;
                case "Varna": 
                    price = (1.55 * quantity);
                break; 
            }
            break;
            
        break;
    }
    console.log(price);
}
smallShop(["beer","Sofia",6]);