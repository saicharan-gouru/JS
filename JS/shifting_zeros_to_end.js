const arr = [1, 0, 2, 0, 3, 0, 4, 0]

function shiftZeros(arr) {
    const n = arr.length
    const nonZeros = arr.filter(num => num != 0);
    const zerosLength = n - nonZeros.length
    const zeros = Array(zerosLength).fill(0)

    return [...nonZeros, ...zeros]
}

console.log(shiftZeros(arr))