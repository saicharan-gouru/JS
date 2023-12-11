const arr = [1, 0, 2, 0, 3, 0, 4, 0]

//Using inbuilt functions
function shiftZeros(arr) {
    const n = arr.length
    const nonZeros = arr.filter(num => num != 0);
    const zerosLength = n - nonZeros.length
    const zeros = Array(zerosLength).fill(0)

    return [...nonZeros, ...zeros]
}

// console.log(shiftZeros(arr))


//Without using inbuilt functions
function shiftZerosToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[nonZeroIndex];
            arr[nonZeroIndex] = arr[i];
            arr[i] = temp;
            nonZeroIndex++;
        }
    }
    return arr;
}

console.log(shiftZerosToEnd(arr))