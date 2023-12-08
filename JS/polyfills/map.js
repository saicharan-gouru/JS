const arr = [1, 2, 3, 4, 5, 6]


Array.prototype.myMap = function(cb) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this))
    }

    return res;
}


console.log(arr.myMap((num) => num ** 2))