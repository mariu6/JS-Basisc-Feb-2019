function coins(input) {
    let change = Number(input.shift());
    change *= 100.0;
    let i=0;
    let coins = 0;
    let coin = [200,100,50,20,10,5,2,1];
    while (change > 0) {
        coins = coins + Math.floor(change / (coin[i]));
        change = (change % (coin[i])).toFixed(0);
        i++;
    }
    console.log(coins);
}
coins([2.73]);