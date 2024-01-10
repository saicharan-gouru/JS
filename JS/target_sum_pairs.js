const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function pairsWithTargetSum(arr, targetSum) {
    const seenNumbers = new Set();
    const res = []

    for (let num of arr) {
        const complement = targetSum - num;

        if (seenNumbers.has(complement)) {
            res.push([num, complement])
        }

        seenNumbers.add(num)
    }

    return res;
}

console.log(pairsWithTargetSum(arr, 9))