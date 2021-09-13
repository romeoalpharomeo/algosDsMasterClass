function countDown (num) {
    // This is our base case:
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    // This is the steps in the function:
    console.log(num);
    num--;
    // This is the recursion call that is adding a function to the stack until we reach the base case:
    countDown(num);
}
countDown(9);