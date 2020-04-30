function walking(input) {
    let steps = input.shift();
    let goal = 0;
    while (goal < 10000) {
       if (steps == "Going home") {
        steps = input.shift();
        let number = Number(steps);
        goal += number;
        break;
       } else {
            let number = Number(steps);
            goal += number;
            steps = input.shift();
       }
    }
    if(goal < 10000) {
        console.log(`${(10000 - goal)} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
    }
}
walking([1500,3000,250,1548,2000,"Going home",2000]);