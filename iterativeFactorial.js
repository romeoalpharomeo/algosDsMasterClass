function iterateFactorial(num) {
    let product = num;
    for (let i = num - 1; i >= 1; i-- ) {
        product *= i;
    }
    return product;
}

console.log(iterateFactorial(10))