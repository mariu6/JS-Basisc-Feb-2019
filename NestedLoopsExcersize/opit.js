function bus(params){
    let startNumberPassengers = Number(params.shift());
    let numberStops = Number(params.shift());
    let peopleGetOff = 0;
    let peopleGetOn = 0;
    let totalPeople = 0;
 
    for(i = 1; i <= numberStops; i++){
        peopleGetOff = Number(params.shift());
        peopleGetOn = Number(params.shift());
        if(i % 2 != 0){
            peopleGetOn += 2;
        }
        if(i % 2 == 0){
            peopleGetOff +=2;
        }
        totalPeople += peopleGetOn;
        totalPeople -= peopleGetOff;
 
    }
    totalPeople = startNumberPassengers + totalPeople;
    console.log(`The final number of passengers is : ${totalPeople}`);
}
bus([17,3,6,7,8,9,3,4]);