const arr1 = [1, 30, 40, 50, 80]
const arr2 = [5, 6, 7, 8, 9]


//using inbuilt functions
function mergeAndSort1(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    return mergedArray.sort((a, b) => a - b)
}


//Without using inbuilt functions
function mergeAndSort2(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j])
        j++
    }

    return mergedArray;

}

console.log(mergeAndSort1(arr1, arr2))
console.log(mergeAndSort2(arr1, arr2))