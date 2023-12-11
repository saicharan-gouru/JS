const arr = [1, 2, 3, 4, 5]

function rotate(arr, k) {
    k = k % arr.length;
    const removed = arr.splice(-k)
    return [...removed, ...arr];
}

console.log(rotate(arr, 3));