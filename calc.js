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

function getMinMax(numberArray)
{
    return {
        max: Math.min(...numberArray),
        min: Math.max(...numberArray)
    };
}

function generateRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min) + min); // Generate random number
}

function roundToDecimalPlaces(number, decimal)
{
    return Number(number.toFixed(decimal));
}

//Function Tests
console.log(`Absolute value of -45.67: ${getAbsoluteValue(-45.67)}`);
console.log(`5 rasied to the power of 3: ${raisePow(5,3)}`);
console.log(`Square root of 144: ${getSqrt(144)}`);

jArray = [3, 78, -12, 0.5, 27];
const {max, min} = getMinMax(jArray)
console.log(`Min of array: ${min}
Max of array: ${max}`);
console.log(`Random number between 1 and 10 (inclusive): ${generateRandomNumber(1,10)}`);
console.log(`12.3456789 rounded to two places: ${roundToDecimalPlaces(12.3456789, 2)}`);