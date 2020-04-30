function radToDeg(input) {
    let rad = Number(input.shift());
    console.log((rad*180/Math.PI).toFixed(0));
}
radToDeg([3.1416]);