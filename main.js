let raceNumber = Math.floor(Math.random() * 1000);

const early = true;
const age = 34;

if (early && age > 18) {
    raceNumber += 1000;
}

if (early && age > 18) {
    console.log(`Your race begins at 9:30 am, and your race number is ${raceNumber}.`);
} else if (!early && age > 18) {
    console.log(`Your race begins at 11:00 am, and your race number is ${raceNumber}.`);
} else if (age < 18) {
    console.log(`Your race begins at 12:30 pm, and your race number is ${raceNumber}.`);
} else {
    console.log('Please see the registration desk.');
}