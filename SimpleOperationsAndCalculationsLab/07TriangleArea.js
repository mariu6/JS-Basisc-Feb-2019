function triangleArea(input) {
    let a= Number(input.shift());
    let h= Number(input.shift());
    console.log((a * h / 2).toFixed(2));
}
triangleArea([20,30]);