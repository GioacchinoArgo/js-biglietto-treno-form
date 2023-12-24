console.log ('JS OK');

// - 1 

//* Form Elements
const nameUser = document.getElementById('user-name');
const kmUser = document.getElementById('user-km');
const ageUser = document.getElementById('user-age');

console.log(nameUser, kmUser, ageUser);

//* Buttons
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');

console.log(generateButton, resetButton);

//* Ticket Elements
const passengerName = document.getElementById('passenger-name');
const rate = document.getElementById('rate');
const trainCar = document.getElementById('train-car');
const cpCode = document.getElementById('cp-code');
const priceUser = document.getElementById('price');

console.log(passengerName, rate, trainCar, cpCode, price);

const priceKm = 0.21;
let rateName = 'Biglietto Standard'

console.log(priceKm, rateName);


// - 2 
generateButton.addEventListener('click', function () {
    console.log('cliccato')


    // - 3

    const nameValue = nameUser.value.trim();
    const kmValue = parseInt(kmUser.value);
    const ageValue = ageUser.value;

    console.log(nameValue, kmValue, ageValue);


    // - 4

    let price = priceKm * kmValue;
    
    console.log(price)

    // - 5 
    if(ageValue === 'under') {
        rateName = 'Biglietto Under 18';
        price *= 0.8;
    } else if (ageValue) {
        rateName = 'Biglietto Over 65';
        price *= 0.6;
    }

    console.log(price, rateName);

    // - 6
    const trainCarNumber = Math.floor(Math.random() * 10) + 1;

    const cpCodeNumber = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    console.log(trainCarNumber, cpCodeNumber);
    // - 7
    passengerName.innerText = nameValue;
    rate.innerText = rateName;
    trainCar.innerText = trainCarNumber;
    cpCode.innerText = cpCodeNumber;
    priceUser.innerText = '€' + price.toFixed(2);

    console.log(passengerName, rate, trainCar, cpCode, priceUser);
})