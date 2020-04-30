function trapezoidArea(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let h = Number(input.shift());
    console.log(((a+b)*h/2).toFixed(2));
}
trapezoidArea([8,13,7]);