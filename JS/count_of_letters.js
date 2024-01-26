const name = "Saicharan";

function countOfLetters(name) {
    name = name.toLowerCase();

    const letterCount = {};

    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    //return lettercount;

    //To print letter as capital if count is greater than 2

    const letterCountConditional = {};

    for (let letter in letterCount) {
        if (letterCount[letter] > 2)
            letterCountConditional[letter.toUpperCase()] = letterCount[letter];
        else
            letterCountConditional[letter] = letterCount[letter];
    }

    return letterCountConditional;
}

console.log(countOfLetters(name));