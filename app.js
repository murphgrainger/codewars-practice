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

// console.log(DNAStrand('ATTGC'));


//
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
// that checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(a, b) {
  if (a.length === 0 || b.length === 0 || a === null || b === null|| a.length !== b.length) {
    return false
  } else {
  let c = []
  let a2 = a.sort((c, d) => {
    return c - d
  });
  let b2 = b.sort((c, d) => {
    return c - d
  });
  a2.forEach(element => {
    c.push(element*element)
  })
for (var i = 0; i < b2.length; i++) {
  if (b2[i] !== c[i]) {
    return false
  }
}
return true;
}
}

// console.log(comp([11, 19, 144], [121, 361, 20736]));


function average(scores) {
let sum = scores.reduce((a, b) => {
  return a + b
})
let average = Math.round(sum/scores.length)

return average
}

console.log(average([22, 3, 6, 23]));
