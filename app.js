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

// Write a function to greet a person. Function will take name as
// input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.
function greet(name) {
    if (name === null || name === '') {
        return null;
    } else {
        return `hello ${name}!`
    }
}

// You are given an array strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    let newArr = []
    let lengthArr = []
    for (var i = 0; i < k; i++) {
        newArr.push(strarr[i])
    }
    for (var i = 0; i < newArr.length; i++) {
        lengthArr.push(newArr[i].length)
    }
    lengthArr.sort((a, b) => b - a)
    return lengthArr[0]
}

// In DNA strings, symbols "A" and "T" are complements of each other,
// as "C" and "G". You have function with one side of the DNA (string, except for Haskell);
// you need to get the other complementary side. DNA strand is never empty or there is no DNA at all
// (again, except for Haskell).
// DNAStrand ("ATTGC") # return "TAACG"

function DNAStrand(dna) {
    let arr = [];
    let arr2 = [];
    arr = dna.split('')
    arr.forEach(element => {
        if (element == "A") {
            arr2.push('T')
        } else if (element == 'T') {
            arr2.push('A')
        } else if (element == 'C') {
            arr2.push('G')
        } else {
            arr2.push('C')
        }
    })
    let result = arr2.join('');
    return result;
}

console.log(DNAStrand('ATTGC'));


// The sequence is defined by 3 non-negative values: begin, end, step.
//
// If begin value is greater than the end, function should returns 0

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

function sequenceSum(begin, end, step) {
  let arr = [];
  if (begin > end) {
    return false
  } else {
    arr.push(begin)
    for (var i = 0; i < (end/2)-1; i++) {
      arr.push(arr[i] + step)
    }

  let sum = arr.reduce((a, b) => {
    // console.log(a)
    console.log(b);
    return a + b;
  })
  return sum
}
}

console.log(sequenceSum(1,5,1));
