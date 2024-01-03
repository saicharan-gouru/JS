const name = "Saicharan"


//using inbuit functions

console.log(name.split("").reverse().join(""));

//not using inbuilt functions

function reverseString(name) {
    if (name === "") return ""
    else return reverseString(name.substr(1)) + name.charAt(0)
}

console.log(reverseString(name))