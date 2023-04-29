//~~~~~Functions~~~~~
const subtractFirstFromLast = array => console.log(`First element subtracted from last element is: ${array[array.length-1] - array[0]}`);
const randomInt = (max) => Math.floor(Math.random() * max)
const findAverage = (array, name) => {
    let total = 0;
    for (i in array) { //getting total
        total += array[i];
    }
    let average = total / array.length; //caculating average
    if (name){
        console.log(`The average of the ${name} array is: ${average}`);
    } else {
        return average;
    }
}
const wordSpam = (word, n) => {
    let finalWord = ""; 
    for (let i = 0; i < n; i++){
        finalWord = finalWord.concat(word);
    }
    return finalWord;
}
const fullName = (firstName, LastName) => {
    firstName += " ";
    return firstName.concat(LastName);
}
const sumIs100 = (array, name) => { //checks if the sum of an array is equal to 100
    let sum = 0;
    for (i in array){ //finding sum
        sum += array[1];
    }
    if (sum === 100){ //printing to console
        console.log(`The sum of the ${name} array is 100`);
    } else {
        console.log(`The sum of the ${name} array is not 100`);
    }

}
const isLargerAverage = (a1, a2) => {//tells if the first array's average is larger than the seconds
    if (findAverage(a1) > findAverage(a2)){
        return true
    } else {
        return false;
    }
}
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}

//~~~~~Arrays~~~~~
const ages = [3,9,23,64,2,8,28,93];
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
const nameLengths = [];

//~~~~~Main Body~~~~~
//Subtractings first age from last age
subtractFirstFromLast(ages);

//Adding new random(1-100) age
ages.push(randomInt(100) + 1);
console.log(`The new age that was added is: ${ages[ages.length - 1]}`);

//Subtracting ages again...
subtractFirstFromLast(ages);

//Caculating average age
findAverage(ages, "ages");

//Adding contents to nameLengths array
for (i in names){
    nameLengths.push(names[i].length);
}

//Finding average number of letters per name
findAverage(nameLengths, "names");

//Looping to concatenate all names in names array
let combinedNames = "";
for (i in names){
    if (combinedNames !== ""){
    combinedNames += " ";
    }
    combinedNames = combinedNames.concat(names[i]);
}
console.log(`The names array after being concatenated: ${combinedNames}`);

//Accessing the first element in a array
console.log(`The first element in the names array is: ${names[0]}`);

//Accessing the lase element in a array
console.log(`The last element in the names array is: ${names[names.length - 1]}`);

//Adding the total of nameLengths
let nameLengthsSum = 0;
for (i in nameLengths){
    nameLengthsSum += nameLengths[i];
}
console.log(`The total of nameLengths is: ${nameLengthsSum}`);

//Using a function that concatenates a word, by a given amount of times
console.log(wordSpam("Cat",8));

//Using a function that gives a full name from first and last
console.log(fullName("Jonathan", "Joestar"));

//Using a funtion that says if a sum of an array is 100
sumIs100(ages);
sumIs100(nameLengths);

//Using a function that shows if an array's average is larger than anothers
console.log(`Average ages is larger than average nameLengths: ${isLargerAverage(ages, nameLengths)}`);

//Using a function that makes a random WHOLE number. In whatever number range I would like.
//I wanted a random whole number between 1-100, and wasn't sure if i would need to do so again.
//So I ended up making it a function...never did use it again. So a little test demo
console.log(randomInt(3));
console.log(randomInt(132));
console.log(randomInt(2));
console.log(randomInt(123456789));