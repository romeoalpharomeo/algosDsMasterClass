function sumRange(num) {
    // This is the base case:
    if (num === 1) {
        return 1;
    } 
    return num + sumRange(num - 1);
}

console.log(sumRange(1));


