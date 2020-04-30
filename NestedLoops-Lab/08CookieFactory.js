function cookieFactory(input) {
    let batchNumbers = Number(input.shift());
    let flour = 0;
    let eggs = 0;
    let sugar = 0;
    for (let i = 1; i <= batchNumbers; ) {
        let ingredient = input.shift();
        while(ingredient != "Bake!") {
            if (ingredient == "flour") {
                flour++;
            } else if (ingredient == "eggs") {
                eggs++;
            } else if (ingredient == "sugar") {
                sugar++;
            }
            ingredient = input.shift();
        }
        if(flour > 0 && eggs > 0 && sugar > 0) {
            console.log(`Baking batch number ${i}...`);
            i++;
            flour = 0;
            eggs = 0;
            sugar = 0;
        } else {
            console.log("The batter should contain flour, eggs and sugar!");
        }
    }
}
cookieFactory([3, "flour", "eggs","jam","Bake!","sugar","Bake!", "flour", "eggs","chocolate","sugar", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"]);