// This pattern involves creating a window which can either be ar array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// function maxSubarraySum(arr, n) {
//     if ( n > arr.length ) {
//         return null;
//     }
//     // This -infinity is to account for a problem where the array was all negative number, so, starting out at 0 would not work.
//     let max = -Infinity;
//     // This is going until the n place before the array ends because we dont want to attempt to add at the last position in the array or anywhere else. 
//     for ( let i = 0; i < arr.length - n + 1; i++ ) {
//         temp = 0;
//         for ( let j = 0; j < n; j++ ) {
//             temp += arr[ i + j ];
//         }
//         if ( temp > max ) {
//             max = temp;
//         }
//     }
//     return max;
// }

// console.log(maxSubarraySum([1,2,3,4,5], 3))

function maxSubarraySum2(arr, n) {
    let maxSum = 0; 
    let tempSum = 0; 
    if ( arr.length < n ) return null;
    for ( let i = 0; i < n; i++ ) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for ( let i = n; i < arr.length; i++ ) {
        // Here, we are subtracting the first value in the last iteration and then adding the last value in the new iteration so that we only have to go through the array once, O(n).
        tempSum = tempSum - arr[ i - n ] + arr[ i ];
        maxSum = Math.max( maxSum, tempSum );
    }
    return maxSum
}

console.log(maxSubarraySum2([1,2,3,4,5], 3))