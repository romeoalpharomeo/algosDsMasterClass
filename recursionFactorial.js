function recursiveFactorial(num) {
    let product = num;
    if (num === 1) {
        return 1;
    }
    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));