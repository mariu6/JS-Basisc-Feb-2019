function cToF(input) {
    let c = Number(input.shift());
    console.log(((c*1.8)+32).toFixed(2));
}
cToF([25]);