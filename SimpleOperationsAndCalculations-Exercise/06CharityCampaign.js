function charityCampaign(input) {
    let days = Number(input.shift());
    let chefs = Number(input.shift());
    let cakes = Number(input.shift());
    let waffels = Number(input.shift());
    let pancakes = Number(input.shift());
    let amount = (days *(chefs * (cakes * 45 + waffels * 5.8 + pancakes * 3.2)));
    console.log((amount - (amount / 8)).toFixed(2));
}
charityCampaign([20,8,14,30,16]);