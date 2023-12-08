const arr = [1, [2, 3], 4, [5, 6, 7]]


function ArrayFlat(arr) {
    return arr.reduce((acc, cur, i, arr) => acc.concat(Array.isArray(cur) ? ArrayFlat(cur) : cur), [])
}


console.log(ArrayFlat(arr))


function flat(inputArray) {
    res = [];

    function rescursiveFlatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                rescursiveFlatten(arr[i])
            } else {
                res.push(arr[i])
            }
        }
    }
    rescursiveFlatten(inputArray);

    return res;
}

console.log(flat(arr))