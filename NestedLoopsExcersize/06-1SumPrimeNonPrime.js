function sumPNP(input) {
    let command = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;
    while (command != "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = input.shift();
            continue;
        }
        let isPrime = true;
        if (num == 1) {
            isPrime = false;
        } else {
            for (let i = Math.floor(num / 2); i >=2; i--) {
                if(num % i == 0) {
                    isPrime = false;
                    break;
                }               
            }
        }
        if(isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPNP([30,83,33,-1,20,"stop"]);