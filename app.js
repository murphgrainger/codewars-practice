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

alphabet_position("The sunset sets at twelve o' clock 222.")


// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    return eval(`${value1} ${operation} ${value2}`);
}
