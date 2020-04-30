function matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());
    for (let x1 = a; x1 <= b; x1++) {
        for (let x2 = a; x2 <= b; x2++) {
            for (let y1 = c; y1 <= d; y1++) {
                for (let y2 = c; y2 <=d; y2++) {
                    if((x1 + y2) == (y1 + x2) && (x1 != x2) && (y1 != y2)) {
                        console.log(`${x1}${x2}`);
                        console.log(`${y1}${y2}`);
                        console.log(" ");
                    }
                }
            }
        }
    }
}
matrix([1,2,3,4]);