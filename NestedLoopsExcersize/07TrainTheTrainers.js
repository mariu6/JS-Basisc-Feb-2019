function trainTheTrainers(input) {
    let jury = Number(input.shift());
    let currentAssesment = 0;
    let finalAssesment = 0;
    let counter = 0;
    let presentationName = input.shift();
    while(presentationName != "Finish") {
        for (let i = 1; i <= jury; i++) {
            currentAssesment += Number(input.shift());
        } 
        console.log(`${presentationName} - ${(currentAssesment / jury).toFixed(2)}.`);
        finalAssesment += (currentAssesment / jury);
        counter++;
        currentAssesment = 0;
        presentationName = input.shift();
    }
    console.log(`Student's final assessment is ${(finalAssesment / counter).toFixed(2)}.`);
}
trainTheTrainers([3,"Arrays",4.53,5.23,5.00,"Lists",5.83,6.00,5.42,"Finish"]);