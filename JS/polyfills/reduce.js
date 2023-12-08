const arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }

    return acc;
}


console.log(arr.myReduce((acc, cur) => acc + cur, 0))