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

