function trainTheTrainers(input) {
    let juryCount = Number(input.shift());
    let presentationName = input.shift();
    let finalAssesment = 0;
    let presentationCount = 0;
    while(presentationName != "Finish") {
        let sumGrades = 0;
        for (let i = 0; i < juryCount; i++) {
            sumGrades += Number(input.shift());
        }
        let averageGrade = sumGrades / juryCount;
        finalAssesment += sumGrades;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        presentationCount++;
        presentationName = input.shift();
    }
    finalAssesment /= (juryCount * presentationCount);
    console.log(`Student's final assessment is ${finalAssesment.toFixed(2)}.`);
}
trainTheTrainers([3,"Arrays",4.53,5.23,5.00,"Lists",5.83,6.00,5.42,"Finish"]);