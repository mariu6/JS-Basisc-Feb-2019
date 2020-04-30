function examPrep(input) {
    let badGrades = Number(input.shift());
    let command = input.shift();
    let countBad = 0;
    let counter = 0;
    let grade = 0;
    let grades = 0;
    let lastTask;
    
    while(command != "Enough") {
        grade = Number(input.shift());
        if (grade <= 4) {
            countBad ++;
            if (countBad >= badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        } 
        grades += grade;
        counter ++;
        lastTask = command;
        command = input.shift();
    }
    if(countBad < badGrades) {
        console.log(`Average score: ${(grades / (counter)).toFixed(2)}`);
        console.log(`Number of problems: ${(counter)}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
examPrep([3,"Money",6,"Story",4,"Spring time",5,"Bus",6,"Enough"]);