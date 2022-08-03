// const firstNumber = 32;
// const secondNumber = 9;
// const thirdNumber = 14;
// const fourthNumber = 33;
// const fifthNumber = 48;
// const powerBall = 5;

// function logWinningNumbers(first, second, third, fourth, fifth, power) {
//     console.log("Winning numbers:", first, second, third, fourth, fifth, power);
// }

// logWinningNumbers(
//     firstNumber,
//     secondNumber,
//     thirdNumber,
//     fourthNumber,
//     fifthNumber,
//     powerBall
// );

const greet = ["This", "is", "an", "array", "of", "strings."];
const hello = ["Hello, world!", 42, null, NaN];
console.log(greet[0]);
console.log(hello[0]);

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
const tvShows = ["Game of Thrones", "Breaking Bad", "Veep", "Mad Men"];

const myArray = ["This", "array", "has", 5, "elements"];

myArray.length;
// => 5

const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
    console.log("winning numbers:", numbers);
}
logWinningNumbers(winningNumbers);


const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
// => undefined

console.log(alphabet.length);
// => 26

console.log(alphabet[alphabet.length - 1]);
// => "z"

const planets = ["Mercury", "Venus",
    "Earth",
    "Mars",
    "Juptier",
    "Saturn",
    "Uranus",
    "Neptune",
];
console.log(planets[4]);
planets[4] = "Jupiter";
console.log(planets);

// planets = ["new", "array"];
//    ^
// TypeError: Assignment to constant variable.

const egregiouslyNestedArray = [
    "How", ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
];
// console.log(egregiouslyNestedArray[0]);
// //=> 'How'

// console.log(egregiouslyNestedArray[1]);
// //=> [ 'deep', [ 'can', [ 'we', [Array], 'dang' ], 'deep,' ], 'it' ]

// console.log(egregiouslyNestedArray[2]);
// //=> 'seems.'

console.log(egregiouslyNestedArray[1][0]);
console.log(egregiouslyNestedArray[1][1]);
console.log(egregiouslyNestedArray[1][2]);
console.log(egregiouslyNestedArray[1][1][1][1][1]);
console.log(egregiouslyNestedArray[1][1][1][1][1][0]);

//general, it is best to keep your Arrays to no more than two levels deep
const board = [
    ["X", "O", " "],
    [" ", "X", "O"],
    ["X", " ", "O"],
];

console.log(board[1]);

console.log(board[1]);
// => [" ", "X", "O"]
board[0][0];
// => "X"

board[0][2];
// => " "

board[2][2];
// => "O"