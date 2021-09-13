function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        // This is slicing the first or index [0] in the array each time so it runs like this:
        // ex. 
        // [1,2,3,4,5]
        // [2,3,4,5]
        // [3,4,5]
        // [4,5]
        // [5]

        helper(helperInput.slice(1));
    }

    helper(arr)

    return result;
}

console.log(collectOddValues([1,2,3,4,5]));