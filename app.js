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

// Array.prototype.numberOfOccurrences = function(element) {
//   let counter = 0;
//   for (var i = 0; i < this.length; i++) {
//     if (this[i] === element) {
//       counter++
//     }
//   }
//   return counter;
// }
function numberOfOccurrences(arr) {
  let obj = {};
  arr.forEach(e => {
    if(obj.hasOwnProperty(e)) {
      obj[e]++
    } else {
      obj[e] = 1;
    }
  })

  return obj;
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

// Write a function numberJoy() which tests if a positive integer n is
// Harshad and returns True if the product of its digit sum,
// and its digit sum reversed, equals n. Otherwise return False.

function numberJoy(n) {
  let sum = 0;
  let rev;
  let arr = [];

  arr = n.toString().split('')
  arr.forEach(e => {
    sum += Number(e)
  })
  rev = sum.toString().split('').reverse().join('')
  if (sum*rev === n) {
    return true
  } else {
    return false
  }
}

// find out which one of the given numbers differs from the others in evenness
function iqTest(numbers){
  let even = [];
  let odd = [];
  let arr = numbers.split(' ');
  arr.forEach(e => {
    if (e%2 === 0) {
      even.push(e)
    } else {
      odd.push(e)
    }
  })
  if (even.length === 1) {
    return arr.indexOf(even[0]) + 1
  } else {
    return arr.indexOf(odd[0]) + 1
  }
}

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);



// Build a reverse pyramid with #:
//     #
//    ##
//   ###
//  ####
// #####

function pyramid(int) {
  let output = '';
  for (var i = 1; i < int; i++) {
    for (var k = 1; k < i; k++) {
      output += '#';
    }
  }
}

pyramid(5);


function arrayPlay(str) {
  numArr = [];
  sortedArr = [];
let arr = str.split(' ')
arr.forEach(e => {
  numArr.push(Number(e))
})
sortedArr = numArr.sort((a,b) => {
  return b - a ;
})
return sortedArr
}

// console.log(arrayPlay('hello apples oranges dogs'));


function arrToObj(arr) {
  let obj = {};
  for (var i = 0; i < arr.length; i+=2) {
    obj[arr[i]] = arr[i+1]
  }
  return obj;
}

function objToArr(obj) {
  let arr = [];
  for (var key in obj) {
    arr.push(key)
    arr.push(obj[key])
  }
  return arr
}

// Write a function that returns both the
// minimum and maximum number of the given list/array.
// minMax([1,2,3,4,5])   == [1,5]

function minMax(arr){
  let arr2 = [];
  let min = arr[0];
  let max = arr[0];
  arr.forEach(e => {
    if (min > e) {
      min = e;
    } else if (max < e) {
      max = e;
    }
  })
  arr2.push(min, max)
  return arr2;
}

// Write a function that takes a
// string and return a new string with all vowels removed.

function disemvowel(s) {
  let str = '';
  let arr2 = [];
  let arr = s.split('')
  arr.forEach(e => {
    if (e !== 'a' && e !=='A' && e !== 'e' && e !=='E' && e !=='i' && e !=='I' && e !=='o' && e !=='O' && e !=='u' && e !=='U') {
      arr2.push(e)
    }
  })
  str = arr2.join('')
  return str;
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings
// representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You know it takes you one minute to traverse one city block, so create a function
// that will return true if the walk the app gives you will take you exactly ten minutes
// (you dont want to be early or late!) and will, of course, return you to your starting point.
// Return false otherwise.

function isValidWalk(walk) {
  let n = 0;
  let w = 0;
  let total = 0;
  walk.forEach(el => {
    if (el === 'n') {
      n++
      total++
    } else if (el === 's') {
      n--
      total++
    } else if (el === 'w') {
      w++
      total++
    } else if (el === 'e') {
      w--
      total++
    }
  })
  if (n === 0 && w === 0 && total === 10) {
    return true
  } else {
    return false
  }
}

function isValidWalk2(walk) {
let n =  walk.filter(element => {
    return element === 'n'
  }).length
let s =  walk.filter(element => {
    return element === 's'
  }).length
let e =  walk.filter(element => {
    return element === 'e'
  }).length
let w =  walk.filter(element => {
    return element === 'w'
  }).length

if (n - s === 0 && e - w === 0 && walk.length === 10) {
  return true
} else {
  return false
  }
}

let transformedObject = {
  myEmail: "rose@edge.com",
  	myAddress: {
  		myMailingStreet: "620 SW 5th Avenue Suite 400\nPortland City, Oregon City 97204\nUSA"
  	},
  	myFirstName: "Rose",
  	myLastName: "Gonzalez",
  	myBusinessPhone: "(512) 757-6000"
}

function addressClean(transformedObject) {
  let arr = []
  let street = [];
  let city = [];
  let state = [];
  let zip = [];

  done(transformedObject)

  transformedObject.myMailingStreet = originalObject.MailingStreet

  if (transformedObject.myMailingStreet.includes('\n') && (transformedObject.myMailingStreet.includes('United States') || transformedObject.myMailingStreet.includes('USA'))) {
    arr = transformedObject.myMailingStreet.split('\n')
    street = arr[0]
    city = arr[1].split(',')[0]
    state = arr[1].split(',')[1].trim('').split(' ').slice(0, -1).join(' ')
    zip = arr[1].split(',')[1].split(' ').pop()

    transformedObject.myMailingStreet = street;
    transformedObject.myMailingCity = city;
    transformedObject.myMailingState = state;
    transformedObject.myMailingPostalCode = zip;
  }
  done(transformedObject)
}


transformedObject.myMailingStreet = '123 Elm'


// Given a number, return a string with dash'-'marks
// before and after each odd integer, but do not begin
// or end the string with a dash mark.

function dashatize(num) {
  if (isNaN(num)) {
    return 'NaN'
  }
  if (num < 0) {
    num = num* -1;
  }
  let arr2 = []
  let arr = num.toString().split('')
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i]%2 === 0 && arr[i+1]%2 === 0) {
      arr2.push(arr[i])
    } else {
      arr2.push(arr[i])
      arr2.push('-')
    }
  }
  arr2.push(arr[arr.length -1])
  return arr2.join('')
};

function balance(left, right) {
let leftCount = countString(left);
let rightCount = countString(right);

if(leftCount > rightCount) {
  return 'Left'
  } else if (rightCount > leftCount) {
    return 'Right'
  } else {
    return 'Balanced'
  }
}

function countString(str) {
  let count = 0;
  str.split('').forEach(e => {
    if (e === '?') {
      count += 3;
    } else if (e === '!') {
      count += 2;
    }
  })
  return count;
}

// Given a list lst and a number N, create a new list
// that contains each number of lst at most N times without
// reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3],
// you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2
// being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr, x) {
  let obj = {};
  let cleanArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i]) && obj[arr[i]] < x) {
      obj[arr[i]] ++;
      cleanArr.push(arr[i])
    } else if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
      cleanArr.push(arr[i])
    }
  }
  return cleanArr;
}


// Write a function dirReduc which will take an array of strings and returns an
// array of strings with the needless directions removed (W<->E or S<->N side by side).
function dirReduc(arr){
  for (var i = arr.length-1; i > 0; i++) {
    if ((arr[i] === 'NORTH' && arr[i-1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i-1] === 'NORTH')){
      arr.splice(arr[i], 2)
    } else if ((arr[i] === 'EAST' && arr[i-1] === 'WEST') || (arr[i] === 'WEST' && arr[i-1] === 'EAST')) {
      arr.splice(arr[i], 2)
    }
  }
  return arr;
}


// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X
//
// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
  let arr = splitOnNonLetters(string)
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 4) {
      newArr.push(arr[i][0])
      newArr.push(arr[i].length - 2)
      newArr.push(arr[i][arr[i].length -1])
    } else {
      newArr.push(arr[i])
    }
  }
  let str = newArr.join('')
  return str
}

function splitOnNonLetters(string) {
  let newArr = [];
  let symbol = [];
  let word = [];
  let symbolCount = 0;
  let arr = string.split('')
  for (var i = 0; i < arr.length; i++) {
    if (isLetter(arr[i])) {
      word.push(arr[i])
    } else {
      symbolCount++
      newArr.push(word.join(''))
      newArr.push(arr[i])
      word = []
    }
  }
  if (word !== []) {
    newArr.push(word.join(''))
  }
  return newArr
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function caps(str) {
  return str.toUpperCase() + '!';
}

// function printWhile() {
//   let num = 0;
//   while(num<10) {
//     console.log(num+= 1);
//   }
// }

function sortArray(arr) {
  let newArr = arr.sort((a,b) => {
    return a.length - b.length
  })
  return newArr;
}

function sortArray2(arr) {
  let newArr = arr.sort((a,b) => {
    return b.length - a.length
  })
  return newArr;
}

//remove all vowels from a string

function disemvowel(str) {
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !==  'a' && str[i] !== 'A' && str[i] !== 'e' && str[i] !== 'E' && str[i] !== 'i' && str[i] !== 'I' && str[i] !=='o' && str[i] !=='O' && str[i] !== 'u' && str[i] !== 'U') {
      arr.push(str[i])
    }
  }
  return arr.join('');
}

console.log(disemvowel('This wubsite is for losers LOL'));
