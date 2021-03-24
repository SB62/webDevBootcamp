function isEven(num) {
    if (typeof num === "number") {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Input is not a number";
    }
}

//shorter way to write the same thing, because return evaluates before returning a boolean value

function isEvenToo(num) {
    return num % 2 === 0;
}

function factorial(num) {
    let fact = 1;
    for (var i = num; i > 0; i--) {
        fact = fact * i;
        // console.log(i);
        // console.log(fact);
    }
    return fact;
}


function kebabToSnake(input) {
    return input.replace(/-/g, "_");
}