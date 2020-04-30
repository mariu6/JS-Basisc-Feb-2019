function onTime(input) {
    let hourPrime = Number(input.shift());
    let minutesPrime = Number(input.shift());
    let hourSecond = Number(input.shift());
    let minutesSecond = Number(input.shift());
    let hoursDifference = 0;
    let minutesDifference = 0;
    let totalTimePrime = 0;
    let totalTimeSecond = 0;
    let totalTimeDifference = 0;
    totalTimePrime = (hourPrime * 60) + minutesPrime;
    totalTimeSecond = (hourSecond * 60) + minutesSecond;
    totalTimeDifference = totalTimePrime - totalTimeSecond;
    hoursDifference = (Math.floor((Math.abs(totalTimeDifference)) / 60).toFixed(0));
    minutesDifference = Math.abs(totalTimeDifference % 60);
    if (totalTimeDifference == 0) {
        console.log("On time");
    }else if (totalTimeDifference <= 30 && totalTimeDifference > 0) {
        console.log("On time");
        console.log(`${minutesDifference} minutes before the start`);
    } else if (totalTimeDifference > 30 && totalTimeDifference < 60) {
        console.log("Early");
        console.log(`${minutesDifference} minutes before the start`); 
    } else if (totalTimeDifference >=60) {
        console.log("Early");
        if(minutesDifference < 10){
            console.log(`${hoursDifference}:0${minutesDifference} hours before the start`); 
        } else {
            console.log(`${hoursDifference}:${minutesDifference} hours before the start`); 
        }
    } else if (totalTimeDifference < 0 && totalTimeDifference > -60) {
        console.log("Late");
        console.log(`${minutesDifference} minutes after the start`);
    }  else if (totalTimeDifference <= -60) {
        console.log("Late");
        if(minutesDifference < 10){
            console.log(`${hoursDifference}:0${minutesDifference} hours after the start`); 
        } else {
            console.log(`${hoursDifference}:${minutesDifference} hours after the start`); 
        }
    }  
}
onTime([11,30,12,29]);