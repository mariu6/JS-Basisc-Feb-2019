function equalSum(input) {
    let firstNum = Number(input.shift());          // взима от масива поредно число
    let secondNum = Number(input.shift());         // взима от масива поредно число
    let printLine = "";                             // инициализираме изхода като стринг
    for (let i = firstNum; i <= secondNum; i++) {   // цикъл от по-малкото до по-голямото число
        let currentNum = "" + i;                    // инициализираме променлива с 'i' като стринг
        let oddSum = 0;                             // инициализираме числови промениви за сумите на нечетни и четни 
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {     // цикъл за обхождане на цифрите от числото -като стринг.
            let currentDigit = Number(currentNum.charAt(j)); // взимаме числото на конкретната позиция 
            if (j % 2 == 0) {                               // проверявваме за четност на позицията
                evenSum += currentDigit;                    // добавяме към сумата на четните
            } else { 
                oddSum += currentDigit;                     // добавяме към сумата на нечетните
            }
        }
        if (oddSum == evenSum) {               // проверка дали четните и нечетните са равни 
            printLine += i + " ";             // добавяме към стринга за отпечатване и добавяме интервал
        }
    }
    console.log(printLine);                  // принтираме отговорите.
}
equalSum([100000,100050]);