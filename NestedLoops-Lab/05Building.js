function building(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    
    for (let i = floors; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < rooms; j++) {
            if(i == floors) {
                row += `L${floors}${j} `;
            } else if(i%2 == 0) {
                row += `O${i}${j} `;     
            } else {
                row += `A${i}${j} `;    
            }
        }
        console.log(row);
    }
}
building([6,4]);