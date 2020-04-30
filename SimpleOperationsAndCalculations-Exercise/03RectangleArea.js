function rectangleArea(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let area = Math.abs(x2-x1) * Math.abs(y2-y1);
    let perimeter = Math.abs(x2-x1) * 2 + Math.abs(y2-y1) * 2;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
rectangleArea([60,20,10,50]);