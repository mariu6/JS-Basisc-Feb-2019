function circleAreaAndPerimeter(input) {
    let r= Number(input.shift());
    console.log((Math.PI*r*r).toFixed(2));
    console.log((Math.PI*r*2).toFixed(2));
}
circleAreaAndPerimeter([4.5]);
