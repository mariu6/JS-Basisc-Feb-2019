function vacation(input) {
    let price = Number(input.shift());
    let balance = Number(input.shift());
    let action = input.shift();
    let counter = 5;
    let days = 0;
    while(balance < price) {
        days ++;
        let amount = Number(input.shift());
        if(action == "save") {
            balance += amount;
            counter = 5;
        } else {
            if(balance > amount) {
                balance -= amount;
            } else {
                balance = 0;
            }
        counter --;
        }
        if(counter <=0) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
        action = input.shift();
    }
    if(balance >= price) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation([110,60,"spend",10,"spend",10,"save",10,"spend",10,"spend",10,"spend",10,"spend",50,"save",100,"save",100]);