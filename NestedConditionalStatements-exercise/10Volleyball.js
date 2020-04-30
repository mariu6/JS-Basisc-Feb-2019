function volleyball(input) {
    let yearType = input.shift();
    let holydays = Number(input.shift());
    let weekendAtHome = Number(input.shift());
    let weeks = 48;
    let volleySaturdays = (weeks - weekendAtHome) * 3/4;
    let volleySundays = weekendAtHome;
    let volleyHolydays = holydays * 2/3;
    if (yearType == "leap") {
        console.log(Math.floor((volleySaturdays + volleySundays + volleyHolydays)*1.15));
    } else {
        console.log(Math.floor(volleySaturdays + volleySundays + volleyHolydays));
    }
}
volleyball(["leap",2,3]);