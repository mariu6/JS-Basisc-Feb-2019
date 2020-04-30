function tradeCommissions(input) {
    let town = (input.shift()).toLowerCase();
    let volume = Number(input.shift());
    switch (town) {
        case "sofia": {
            if(volume >= 0 && volume <= 500) {
                console.log((volume*.05).toFixed(2));
            } else if(volume > 500 && volume <= 1000) {
                console.log((volume*.07).toFixed(2));
            } else if(volume > 1000 && volume <= 10000) {
                console.log((volume*.08).toFixed(2));
            } else if(volume > 10000) {
                console.log((volume*.12).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        }
        case "varna": {
            if(volume >= 0 && volume <= 500) {
                console.log((volume*.045).toFixed(2));
            } else if(volume > 500 && volume <= 1000) {
                console.log((volume*.075).toFixed(2));
            } else if(volume > 1000 && volume <= 10000) {
                console.log((volume*.10).toFixed(2));
            } else if(volume > 10000) {
                console.log((volume*.13).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        }
        case "plovdiv": {
            if(volume >= 0 && volume <= 500) {
                console.log((volume*.055).toFixed(2));
            } else if(volume > 500 && volume <= 1000) {
                console.log((volume*.08).toFixed(2));
            } else if(volume > 1000 && volume <= 10000) {
                console.log((volume*.12).toFixed(2));
            } else if(volume > 10000) {
                console.log((volume*.145).toFixed(2));
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
tradeCommissions(["kaspichan",3874.50]);