function moving(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let command = input.shift();
    let volume = (lenght * width * height);
    let boxes = 0;
    while(command != "Done") {
        let number = Number(command);
        boxes += number;
        if(boxes > volume) {
            console.log(`No more free space! You need ${(boxes - volume)} Cubic meters more.`);
            break;
        }
        command = input.shift();
    }
    if (boxes < volume) {
    console.log(`${(volume - boxes)} Cubic meters left.`);
    }
}
moving([10,1,2,4,6,"Done"])