// USE OF CONSOLE.LOG
console.log("Pepperoni");
console.log("Bible");

// TYPES
console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);

// MATH OPERATORS
console.log(66 + 3.5);
console.log(2018 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

// PROPERTIES
console.log('Teaching the world how to code'.length);

// BUILT-IN METHODS
// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 

// LIBRARIES
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100 ));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// COMMENTS
// Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

// VARIABLES
// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

// CONSTANT VARIABLES
const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);

entree = 'Tacos';

// LET VARIABLES
let changeMe = true;
changeMe = false;
console.log(changeMe);

// UNDEFINED
let notDefined;
let valueless;
console.log(valueless);

// NATHEMATICAL ASSIGNMENT OPERATORS
let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;

// Multiply and assign to particle below
particle *= 6.02;

// Increment assay by 1
assay++;

// STRING INTERPOLATION
let favoriteAnimal = 'cat';
console.log('My favorite animal: ' + favoriteAnimal);

// INTERPOLATION II
let myName = 'Alan';
let myCity = 'Denver';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// KELVIN WEATHER PROJECT
// Todays' forecast
const kelvin = 293;

// convert kelvin to celsius
let celsius = kelvin - 273;

// convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round fahrenheit down to the nearest integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert celsius to newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

// DOG YEARS PROJECT
// My age
const myAge = 66;

// Early years
let earlyYears = 2;
earlyYears *= 10.5;

// convert my later years to dog years
let laterYears = myAge - 2
laterYears *= 4;

console.log(`Early years = ${earlyYears}. Later years = ${laterYears}.`);

// Total dog years for my age
let myAgeInDogYears = earlyYears + laterYears;

// My name in all lowercase
let myName = 'Alan'.toLowerCase();

// print my name and age in dog years
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

// CONTROL FLOW INTRODUCTION
let userName = 'Alan';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

// IF/ELSE STATEMENTS
let isSoccerFan = false;
if (isSoccerFan === true) {
  console.log('Goal!');
} else {
  console.log('No goal!');
}

// TRUE AND FALSE VALUES
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'xyz';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// TRUE AND FALSE VALUES II
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'xyz';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// COMPARISON OPERATORS
let hungerLevel = 10;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// COMPARISON OPERATORS II
let moonPhase = 'full';
if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf');
}

// ELSE IF STATEMENTS
let moonPhase = 'solar eclipse';
if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// LOGICAL OPERATORS
let moonPhase = 'full';
let isFoggyNight = false;
if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// SWITCH STATEMENTS
let moonPhase = 'full';
switch (moonPhase) {
  case 'full':
  	console.log('Howl!');
    break;
  case 'mostly full':
	  console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
	  console.log('Back on two feet');
    break;
  default:
	  console.log('Invalid moon phase');
    break;
}

// TERNARY OPERATOR
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// INTRODUCTION TO FUNCTIONS
let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

// FUNCTIONS
const takeOrder = () => {
  console.log('Order: pizza');
}

takeOrder();

// PARAMETERS
const takeOrder = (topping) => {
  console.log(`Order: pizza topped with ${topping}`);
};

takeOrder('Pepperoni');

// PARAMETERS II
const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} pizza topped with ` + topping);
};

takeOrder('mushrooms', 'thin');
takeOrder('Pepperoni', 'original');
takeOrder('sausage', 'pan');

// RETURN
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount++;
}

let getSubTotal = (itemCount) => {
	return itemCount * 7.5;  
}

let orderCount = 0;

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount));

// RETURN II
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
}

const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
}
console.log(getTotal(orderCount));

// FUNCTION DECLARATIONS
function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(3, 6);

// FUNCTION EXPRESSIONS
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
};

isGreaterThan(4, 8);

// ARROW FUNCTIONS
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// GLOBAL SCOPE
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = function() { 
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
                              }
console.log(myNightSky());

// GLOBAL SCOPE II
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = function() { 
  stars = 'Sirius';
  return 'Nigh Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}

console.log(myNightSky());
console.log(stars);

// BLOCK SCOPE
const visibleLightWaves = function () {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
}

visibleLightWaves();
console.log(lightWaves);

// BLOCK SCOPE II
const visibleLightWaves = function () {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
}

visibleLightWaves();

// ARRAYS
const starCount = function () {
	let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i++) {
    console.log(i);
  }
}

starCount();
console.log(i);

// CREAT AN ARRAY
const newYearsResolutions = [
  'Pray more',
  'Read the Word more',
  'Be bolder in my witness'
];

console.log(newYearsResolutions);

// PROPERTY ACCESS
const newYearsResolutions = [
  'Pray more',
  'Read the Word more',
  'Be bolder in my witness'
];

console.log(newYearsResolutions);

const listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

// UPDATE ELEMENTS
const newYearsResolutions = [
  'Pray more',
  'Learn a new language',
  'Be bolder in my witness'
];

console.log(newYearsResolutions);

const listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

// LENGTH PROPERTY
const newYearsResolutions = [
  'Pray more',
  'Learn a new language',
  'Be bolder in my witness'
];

console.log(newYearsResolutions);

const listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

console.log (newYearsResolutions.length);

// PUSH METHOD
const newYearsResolutions = [
  'Pray more',
  'Learn a new language',
  'Be bolder in my witness'
];

newYearsResolutions.push('Item 4');
newYearsResolutions.push('Item 5');

newYearsResolutions.pop();

console.log(newYearsResolutions);

const listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

console.log (newYearsResolutions.length);

// MORE ARRAY METHODS
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

// ARRAYS WITH LET AND CONST
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Mayonaise');
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils.pop();
console.log(utensils);

utensils = ['Fork'];

// LOOPING MANUALLY
const vacationSpots = [
  'Black Hills',
  'Great Smoky Mountains',
  'Washington, DC'
];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// FOR LOOPS
const vacationSpots = [
  'Black Hills',
  'Great Smoky Mountains',
  'Washington, DC'
];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
	console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]); 
}

// FOR LOOPS, BACKWARDS
const vacationSpots = [
  'Black Hills',
  'Great Smoky Mountains',
  'Washington, DC'
];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
	console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]); 
}

// NESTED FOR LOOPS
const myPlaces = [
  'Mount Rushmore',
  'Eugene',
  'Portland'
];

const friendPlaces = [
  "Georgia",
  "Oregon",
  "Portland"
];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]);
    }
  }
}

// WHILE LOOPS
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('found a spade');

// .FOREACH()
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruit) {
  console.log('I want to eat a ' + fruit);
});

// .MAP()
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animals => animals[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(number) {
  return number / 100;
});

// .FILTER()
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(number => number < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});

// Refactor the code above using arrow function syntax
longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// ITERATOR DOCUMENTATION
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(function(word) {
  return word.length > 5;
});


// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every(word =>       word.length > 5 ));

// CHOOSE THE RIGHT ITERATOR
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

// OBJECTS
let person = {
  name: 'Alan',
  age: 66
};

// ACCESSING OBJECT PROPERTIES I
let person = {
  name: 'Alan',
  age: 40
};

console.log(person.name);
console.log(person.age);  

// ACCESSING OBJECT PROPERTIES II
let person = {
  name: 'Alan',
  age: 40
};

console.log(person['name']);
console.log(person['age']);

// ACCESSING OBJECT PROPERTIES III
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

// ADDNG A PROPERTY
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = [
  'Woodworking',
  'Coding'
];

console.log(person.hobbies);

// EDITING A PROPERTY
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = [
  'Woodworking',
  'Coding'
];

person.hobbies = ['Coding'];

console.log(person.hobbies);

// METHODS
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
	sayHello: () => { return 'Hello, there!'; }
};

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = [
  'Woodworking',
  'Coding'
];

person.hobbies = ['Coding'];

console.log(person.hobbies);

console.log(person.sayHello());

// METHODS (ES6)
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
	sayHello: () => { return 'Hello, there!'; },
  sayGoodbye() {return 'Goodbye!';}
};

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = [
  'Woodworking',
  'Coding'
];

person.hobbies = ['Coding'];

console.log(person.hobbies);

console.log(person.sayHello());

// THE THIS KEYWORD I
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  sayGoodbye() {return 'Goodbye!';}
};

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = [
  'Woodworking',
  'Coding'
];

person.hobbies = ['Coding'];

console.log(person.hobbies);

console.log(person.sayHello());

// THE THIS KEYWORD II
let person = {
  name: 'Alan',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  sayGoodbye() {return 'Goodbye!';}
};

let friend = {name: 'John'};
friend.sayHello = person.sayHello;

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = [
  'Woodworking',
  'Coding'
];

person.hobbies = ['Coding'];

console.log(person.hobbies);

console.log(person.sayHello());

console.log(friend.sayHello());

// GETTERS AND SETTERS I
let person = {
  _name: 'Lu Xun',
  _age: 137,
 set age (newAge) {
   if (typeof newAge === 'number') {
     this._age = newAge;
   } else {
     return 'Invalid input';
   }
 }
};

