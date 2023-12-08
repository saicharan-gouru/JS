const arr = [5, 4, 3, 2, 1, 6, 8, 7]


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j <= arr.length; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        if (minIndex !== i)
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort(arr))