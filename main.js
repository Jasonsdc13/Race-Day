let raceNumber = Math.floor(Math.random() * 1000);

let early = true;

let age = 29;

if (early && age > 18)  {
        raceNumber += 1000;
}
if (age >= 18 && early) {
    console.log(`"Race will begin at 9:30am and your race number will be ${raceNumber}`);
}
else if(age >= 18 && !early)    {
    console.log(`"Race will begin at 11:00am and your race number will be ${raceNumber}`);
}
else if(age < 18)   {
    console.log(`"Your race begins at 12:30pm and your race number is ${raceNumber}"`)
}
