// console.log("Print all numbers between -10 and 19")

// let num = -10
// while (num >= -10 && num <= 19) {
//     console.log(num);
//     num++;
// }

// console.log("Print all even numbers between 10 and 40")

// let numTwo = 10
// while (numTwo >= 10 && numTwo <= 40) {
//     console.log(numTwo);
//     numTwo += 2;
// }

// console.log("Print All odd numbers between 300 and 333")

// let numThree = 300
// while (numThree >= 300 && numThree <= 333) {
//     if (numThree % 2 === 1) {
//         console.log(numThree);
//     }
//     numThree++;
// }

// console.log("Print All Numbers Divisible by 5 & 3 between 5 and 50")

// let numFour = 5
// while (numFour < 51) {
//     if (numFour % 3 === 0 && numFour % 5 === 0) {
//         console.log(numFour);
//     }
//     numFour++;
// }

console.log("Print all numbers between -10 and 19")
for (let i = -10; i < 20; i++) {
    console.log(i);
}
console.log("Print all even numbers between 10 and 40")
for (let i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Print All odd numbers between 300 and 333")
for (let i = 300; i <= 333; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

console.log("Print All Numbers Divisible by 5 & 3 between 5 and 50")
for (let i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}