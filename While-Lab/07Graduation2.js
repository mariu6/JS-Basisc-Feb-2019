function graduation(input) {
    let name = input.shift();
    let level = 1;
    let grade = 0.0;
    let counter = 0;
    while(level <= 12) {
        let year = Number(input.shift());
        if (year >= 4) {
        grade += year;
        level++;
        } else {
            counter++;
            if (counter >=2){
                break;
            }
        }
    }
    if (level >= 12) {
    console.log(`${name} graduated. Average grade: ${(grade / 12).toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${level} grade`);
    }
}
graduation(["Gosho",5,6,5,6,5,6,6,2,3,5,6,4]);