// arrays
let same = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
let sameNumber = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let diffNumber = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 4, 5, 5, 2, 34, 2];
let checkMax = [1, 3, 5, 6, 66, 53, 23, 86, 55, 43, 33, 234, 128, 555, 987, 120, 450, 33, 0, 100, 203, 222, 210, 354, 42, 999, 1035, 0]
let continents = ["North America", "South America", "Asia", "Europe", "Australia", "Antarctica", "Africa"];


// printReverse() - write a function that takes and array as an argument and prints out it's elements in reverse order
function printReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

// isUniform() - write a function that takes an array as argument that returns true if all elements in the array are identical
function isUniform(array) {
    let comp = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] !== comp) {
            return false;
        }
    }
    return true;
}

// **** Does not work because the return false only escapes out of the function in the forEach
// function isUniformForEach(array) {
//     let comp = array[0];
//     array.forEach(element => {
//         if (element !== comp) {
//             return false;
//         }
//     });
// }

// sumArray() - write a function that accepts array of numbers and returns the sum of all numbers in the array
function sumArray(array) {
    let total = 0;
    array.forEach(number => {
        total = total + number;
    });
    return total;
}

// max() - write a function that accepts an array of numbers and returns the maximum number in the array
function max(array) {
    let maxNumber = 0;
    array.forEach(number => {
        if (maxNumber < number) {
            maxNumber = number;
        }
    });
    return maxNumber

}