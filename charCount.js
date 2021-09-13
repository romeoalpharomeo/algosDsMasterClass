function charCount(str) {
    var obj = {}
    for (var char of str) {
        char = char.toLowerCase();
        // Regex is not the fastest, google faster solutions
        if (/[a-z0-9]/.test(char)) {
            // This will function as an if/else, if the key exists it is adding to the value at that key, if it does not, it is adding the key and value of 1.
            obj[char] = ++obj[char]  || 1;
        }
    }
    return obj;
}

console.log(charCount("helloo0"));