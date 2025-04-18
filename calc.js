//Functions

function getAbsoluteValue(number)
{
    return Math.abs(number);
}

function raisePow(number, pow)
{
    return Math.pow(number, pow);
}

function getSqrt(number)
{
    return Math.sqrt(number);
}

function getMin(numberArray)
{
    return Math.min(...numberArray);
}

function generateRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min) + min); // Generate random number
}

function roundToTwoPlaces(number)
{
    return Math.round(number * 100)/100;
}

//Function Tests
console.log(`Absolute value of -45.67: ${getAbsoluteValue(-45.67)}`);
console.log(`5 rasied to the power of 3: ${raisePow(5,3)}`);
console.log(`Square root of 144: ${getSqrt(144)}`);

jArray = [3, 78, -12, 0.5, 27];
console.log(`Min of array ${jArray}: ${getMin(jArray)}`);
console.log(`Random number between 1 and 10 (inclusive): ${generateRandomNumber(1,10)}`);
console.log(`12.3456789 rounded to two places: ${roundToTwoPlaces(12.3456789)}`);