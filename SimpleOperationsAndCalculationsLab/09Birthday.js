function birthday(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let persent = Number(input.shift());
    let volume = (lenght*width*height)/1000;
    console.log((volume*((100-persent)/100)).toFixed(3));
}
birthday([85,75,47,17]);