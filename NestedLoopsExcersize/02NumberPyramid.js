function numberPyramid(input) {
    let n = Number(input.shift());
    let k = "";
    let buff = 0;
    for (let i =  1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            buff++;
            k += `${buff} `;
            if(buff == n) break;
        }
        console.log(k);
        k = "";
        if(buff == n) break;
    }
}
numberPyramid([12]);