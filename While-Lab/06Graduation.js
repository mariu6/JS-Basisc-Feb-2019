function graduation(input) {
    let name = input.shift();
    let level = 1;
    let grade = 0.0;
    while(level <= 12) {
        let year = Number(input.shift());
        if (year >= 4) {
        grade += year;
        level++;
        }
    }
    console.log(`${name} graduated. Average grade: ${(grade / 12).toFixed(2)}`);
}
graduation(["Pesho",4,5.5,6,5.43,4.5,6,5.55,5,6,6,5.43,5]);