const arr = [1, [2, 3], 4, [5, 6, 7]]
const obj = { id: 5, name: "charan", address: { pincode: 508204, town: "Huzurnagar" } }


function DeepClone(item) {
    if (item === undefined || typeof item !== "object") return item

    const res = Array.isArray(item) ? [] : {}

    for (const key in item) {
        if (item.hasOwnProperty(key)) {
            res[key] = DeepClone(item[key])
        }
    }

    return res;
}



console.log(DeepClone(arr))
const obj2 = DeepClone(obj)
obj.address.pincode = 555555
console.log(obj);
console.log(obj2);