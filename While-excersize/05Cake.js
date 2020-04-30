function cake(vhod) {
    let lenght = Number(vhod.shift());
    let width = Number(vhod.shift());
    let piecesOfCake = lenght * width;
    let numberOfPieces = 0;
    let input = vhod.shift();
    while(input != "STOP") {
        let n = Number(input);
        numberOfPieces += n;
        if (numberOfPieces > piecesOfCake) {
            break;
        }
        input = vhod.shift();
    }
    if (numberOfPieces <= piecesOfCake) {
        console.log(`${piecesOfCake - numberOfPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${numberOfPieces - piecesOfCake} pieces more.`);
    }
}
cake([5,2,01,"STOP"]);
