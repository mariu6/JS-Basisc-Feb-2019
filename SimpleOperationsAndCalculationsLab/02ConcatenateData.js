function concatenateData(input) {
    let name = input.shift();
    let surname = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    console.log(`You are ${name} ${surname}, a ${age}-years old person from ${town}.`);
}
concatenateData(["ivan","ivanov", 42, "Plovdiv"]);