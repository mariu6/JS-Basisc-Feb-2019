function operationsNumbers (input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();
    let result = 0;
    let flag = "even";
    switch (operator) {
        case "+":
        case "-":
        case "*": {
            if (operator == "+") {
                result = n1 + n2;
                if (result %2 == 1) flag = "odd";
            } else if (operator == "-") {
                result = n1 - n2;
                if (result %2 == 1) flag = "odd";
            } else if (operator == "*") {
                result = n1 * n2;
                if (result %2 == 1) flag = "odd";   
            } 
            console.log(`${n1} ${operator} ${Math.abs(n2)} = ${(result)} - ${flag}`);
            break;
        }
        case "/":
        case "%": {
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                if (operator == "/") {
                    result = n1 / n2;
                    console.log(`${n1} ${operator} ${n2} = ${(result).toFixed(2)}`);
                } else if (operator == "%") {
                    result = n1 % n2;
                    console.log(`${n1} ${operator} ${n2} = ${(result)}`);
                }  
            }
            break;
        }
    }
}

operationsNumbers([0,20,"-"]);