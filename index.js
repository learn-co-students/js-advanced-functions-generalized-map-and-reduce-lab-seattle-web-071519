import { start } from "repl"

// Add your functions here

function map(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]))
    }
    return newArray
}

function reduce(array, fn, startingPoint=false) {
    let sum;
    let counter;
    if (!!startingPoint) {
        sum = startingPoint;
        counter = 0;
    } else {
        sum = array[0];
        counter = 1;
    }
    while (counter < array.length) {
        sum = fn(array[counter], sum);
        counter++;
    }
    return sum;
}