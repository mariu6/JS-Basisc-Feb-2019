function histogram(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (number < 200) {
            p1 += 1;
        } else if (number < 400) {
            p2 += 1;
        } else if (number < 600) {
            p3 += 1;
        } else if (number < 800) {
            p4  += 1;
        } else {
            p5  += 1;
        }
    }
    console.log(`${((p1 * 100)/ n).toFixed(2)}%`);
    console.log(`${((p2 * 100)/ n).toFixed(2)}%`);
    console.log(`${((p3 * 100)/ n).toFixed(2)}%`);
    console.log(`${((p4 * 100)/ n).toFixed(2)}%`);
    console.log(`${((p5 * 100)/ n).toFixed(2)}%`);
}
histogram([3,1,2,999]);