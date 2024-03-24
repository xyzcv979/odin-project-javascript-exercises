const palindromes = function (word) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedWord = word
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');
    const reverse = cleanedWord.split("").reverse().join("");
    return reverse === cleanedWord;
};

// Do not edit below this line
module.exports = palindromes;
