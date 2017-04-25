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
    if (a.length === 0 || b.length === 0 || a === null || b === null || a.length !== b.length) {
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
            c.push(element * element)
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
    let average = Math.round(sum / scores.length)

    return average
}


// Implement the function unique_in_order which takes as argument a
// sequence and returns a list of items without any elements with the same
// value next to each other and preserving the original order of elements.
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
function uniqueInOrder(iterable) {
    if (iterable === '') {
        let arr = []
        return arr
    } else if (Array.isArray(iterable)) {
        let arr2 = []
        arr2.push(iterable[0])
        for (var i = 0; i < iterable.length - 1; i++) {
            if (iterable[i + 1] !== iterable[i]) {
                arr2.push(iterable[i + 1])
            }
        }
        return arr2
    } else {
        arr = iterable.split('');
        let arr2 = []
        arr2.push(arr[0])
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] !== arr[i]) {
                arr2.push(arr[i + 1])
            }
        }
        return arr2;
    }
}

// Write a function that takes an array of strings as an
// argument and returns a sorted array containing the same strings,
// ordered from shortest to longest.

function sortByLength (array) {
  array.sort((a, b) => {
    return a.length - b.length
  })
  return array
};


 // Square every digit of a number.

 function squareDigits(num){
   let arr = []
   let str = num.toString()
   for (var i = 0; i < str.length; i++) {
     let squared = Number(str[i]) * Number(str[i])
     arr.push(squared)
   }
  let int = Number(arr.join(''))
  return int
}


// The numberOfOccurrences function must return
// the number of occurrences of an element in an array.

Array.prototype.numberOfOccurrences = function(element) {
  let counter = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i] === element) {
      counter++
    }
  }
  return counter;
}



// Implement the method isSortedAndHow, which accepts an array of integers,
// and returns one of the following:
//
// 'yes, ascending' - if the numbers in the array are sorted in an ascending way
// 'yes, descending' - if the numbers in the array are sorted in a descending way
// 'no'

function isSortedAndHow(array) {
  let arrStr = array.toString()
  let ascArr = array.sort((a,b) => {
    return a-b;
  })
  if (arrStr === ascArr.toString()) {
    return 'yes, ascending'
  }
  else if (arrStr === ascArr.reverse().toString()) {
    return 'yes, descending'
  }
  else {
    return 'no'
  }
}

// Count the number of exclamation marks and question marks, return the product.
// Product("!???") == 3
function product(s){
  let qCount = 0;
  let eCount = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '!') {
      eCount++
    }
    else {
      qCount++
    }
  }
  return eCount*qCount
}


// In short: an invalid sequence (a string with non numeric character) must return 1,
// an already complete (or empty) sequence must return 0;
// a broken sequence with more than one number missing should return the lowest missing number;
// otherwise return the missing number.
//
// Note that the input may be with random order.

function findMissingNumber(sequence){
  let numArr = [];
  let offArr = [];
  let status;
  let arr = sequence.split(' ').sort().forEach(e => {
    numArr.push(Number(e))
  })
  if (sequence === '') {
    return 0;
  }
  if (isNaN(numArr[0])) {
    return 1;
  }
  for (var i = 1; i < numArr.length; i++) {
  if (isNaN(numArr[i])) {
    return 1;
  }
  else if ((numArr[i] - 1) === numArr[i-1]) {
    console.log(numArr[i]);
    status = 0;
  }
  else {
    if ((numArr[i] - 1) !== numArr[i-1]) {
      offArr.push(numArr[i - 1]);
      return offArr[0] + 1
    }
  }
}
if (status === 0) {
  return status
}
}

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contains any char.

function XO(str) {
  let oCounter = 0;
  let xCounter = 0;
  let cleanStr = str.toLowerCase()
  for (var i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i] === 'o') {
      oCounter++;
    }
    else if (cleanStr[i] === 'x') {
      xCounter++;
    }
  }
    if (oCounter === xCounter) {
      return true;
    }
    else {
      return false
    }
}

// Complete the function/method so that it returns
// the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
  let shortURL = url.split('#')[0].toString();
  return shortURL
}

// Which distances, hence which towns, they will choose so that the
// sum of the distances is the biggest possible -
// to please Mary - but less than t - to please John- ?
var ts = [50, 55, 56, 57, 58]
function chooseBestSum(t, k, ls) {
  let bestSum = 0;

  //t = max sum distance
  // k = number towns to visit
  return bestSum;
}

console.log(chooseBestSum(163, 3, ts));

//Array of strings, find which one is most common

function mostCommonString(arr) {
  let obj = {};
  let max = 0;
  let maxEl;
  for (var i = 0; i < arr.length; i++) {
      if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]]++
        if (obj[arr[i]] > max) {
          max = obj[arr[i]]
          maxEl = arr[i]
        }
      } else {
        obj[arr[i]] = 1;
      }
  }
  return maxEl
}

console.log(mostCommonString(['hi', 'yo', 'hi', 'hello', 'yo', 'hi', 'dog']));
