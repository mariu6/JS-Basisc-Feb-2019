function skiTrip(input) {
    let days = Number(input.shift());
    let accomodation = input.shift();
    let evaluation = input.shift();
    let prise = 0;
    switch (accomodation) {
        case "room for one person": {
            prise = (days - 1) * 18; 
            break;
        }
        case "apartment": {
            if (days < 10) {
                prise = (days - 1) * 25 * 0.7;
            } else if (days <= 15) {
                prise = (days - 1) * 25 * 0.65;
            } else {
                prise = (days - 1) * 25 * 0.5;
            }
            break;
        }
        case "president apartment": {
            if (days < 10) {
                prise = (days - 1) * 35 * 0.9;
            } else if (days <= 15) {
                prise = (days - 1) * 35 * 0.85;
            } else {
                prise = (days - 1) * 35 * 0.8;
            }
            break;
        }
        
    }
    if(evaluation == "positive") {
        prise *= 1.25;
    } else {
        prise *= 0.9;
    }
    console.log(prise.toFixed(2));
}
skiTrip([2,"apartment","positive"]);