function sumPNP(input) {
    let n = input.shift();
    let nonPrime = 0;
    let total = 0;
    while (n != "stop") {
        let m = Number(n);
        if (m < 0) {
            console.log("Number is negative.");
        } else if (m == 1){
            nonPrime ++;
            total ++;
        } else {
            total += m;
            for (let i = 2; i <= (m/2); i++) {
                if(m%i == 0){
                    nonPrime += m;
                    break;
                } 
            }
        }
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${total - nonPrime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`)
}
sumPNP([1,-9,0,"stop"])