const arr = [1, 2, 5, 8, 3, 4, 5, 8]

function secondLargest(arr) {
    let withoutDuplicates = Array(...new Set(arr))
    withoutDuplicates.sort((a, b) => b - a)
    if (withoutDuplicates.length >= 2)
        return withoutDuplicates[1]
    else
        return -1;
}

// console.log(secondLargest(arr))

function secondLargestNum(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest)
            secondLargest = arr[i];
    }
    return secondLargest
}

console.log(secondLargestNum(arr))