function cinema(input) {
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let income = 0;
    switch (type) {
        case "Premiere": {
            income = (12 * rows * columns);
            break;
        }
        case "Normal": {
            income = (7.5 * rows * columns);
            break;
        }
        case "Discount": {
            income = (5 * rows * columns);
            break;
        }
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere",10,12])