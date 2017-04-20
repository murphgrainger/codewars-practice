//Selection Sort
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let k = i + 1; k < array.length; k++) {
            if (array[k] < array[minIndex]) {
                minIndex = k;
            }
        }
        if (minIndex != i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

console.log(selectionSort([11, 12, 2, 4]));
