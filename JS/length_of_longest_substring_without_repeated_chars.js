function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let currentSubstring = '';

    for (let char of s) {
        const charIndex = currentSubstring.indexOf(char);

        if (charIndex !== -1) {
            currentSubstring = currentSubstring.slice(charIndex + 1);
        }

        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength;
}

// Sample Input
let input = "abcabcdefbb";

// Sample Output
let output = lengthOfLongestSubstring(input);
console.log(output); // Output: 3