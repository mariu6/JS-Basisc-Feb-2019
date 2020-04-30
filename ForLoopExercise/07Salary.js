function salary(input) {
    let n = Number(input.shift());
    let salary = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let siteName = input.shift();
        switch (siteName) {
            case "Facebook": {
                salary -= 150;
                break;
            }
            case "Instagram": {
                salary -= 100;
                break;
            }
            case "Reddit" : {
                salary -= 50;
                break;
            }
            break;
        }
    }
    if (salary <=0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
salary([10,750,"Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);