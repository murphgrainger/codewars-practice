// Welcome. In this kata you are required to, given a string,
// replace every letter with its position in the alphabet. If anything in the text isn't a letter,
// ignore it and don't return it. a being 1, b being 2, etc. As an example:
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabet_position(str) {
    let arr = str.replace(/[^a-zA-Z]+/g, '').toLowerCase().split('')
    let arr2 = []
    arr.forEach(function(element) {
        arr2.push(element.charCodeAt() - 96)
    })
    return arr2.toString('').replace(/,/g, ' ')
}

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    return eval(`${value1} ${operation} ${value2}`);
}


// We need a function that can transform a number into a string.
function numberToString(num) {
    let strNum = num.toString()
    return strNum
}

// Remove smalles number in array, if two are the same remove the one with the smallest index.

function removeSmallest(arr) {
    arr.splice(arr.indexOf(Math.min.apply(Math, arr)), 1)
    return arr;
}

console.log(removeSmallest([2, 23, 2, 1, 3, 10]));



// Write a function to greet a person. Function will take name as
// input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.
function greet(name) {
    if (name === null || name === '') {
        return null;
    } else {
        return `hello ${name}!`
    }
}

console.log(greet('Derek'));

// You are given an array strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    let newArr = []
    let lengthArr = []
    for (var i = 0; i < strarr.length; i++) {
        newArr.push(strarr[i].concat(strarr[i + 1]))
    }
    for (var i = 0; i < newArr.length; i++) {
        lengthArr.push(newArr[i].length)
    }
    lengthArr.sort((a, b) => b - a)
    return lengthArr[0]
}

console.log(longestConsec(['hello', 'how', 'are', 'consecutive', 'tommies'], 2));
