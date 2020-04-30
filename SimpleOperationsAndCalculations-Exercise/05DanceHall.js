function danceHall(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let a = Number(input.shift());
    let freeArea = ((length * width) * 0.9 - (a * a)) * 10000;
    console.log(Math.floor(freeArea / 7040));
}
danceHall([50,25,2]);