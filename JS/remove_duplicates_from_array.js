const arr = [1, 1, 2, 2, 3, 3, 4, 4]


//using inbuilt functions

console.log(arr.filter((num, i, arr) => arr.indexOf(num) === i))

//without using any inbuit functions

function RemoveDuplicates(arr) {
    let res = [];

    for (i = 0; i < arr.length; i++) {
        let isPresent = false;
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                isPresent = true;
                break;
            }
        }
        if (!isPresent) res.push(arr[i])
    }
    return res;
}

console.log(RemoveDuplicates(arr))