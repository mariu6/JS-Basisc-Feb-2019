function passwordGenerator(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = "";
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            for (let k = 97; k < (97 + l); k++){
                for (let l1 = 97; l1 < (97 + l); l1++){
                    if (i > j){
                        for (let m = (i + 1); m <= n; m++){
                            result += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(l1)}${m} `;
                        }
                    } else {
                        for (let m = (j + 1); m <= n; m++){
                            result += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(l1)}${m} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
passwordGenerator([4,2]);