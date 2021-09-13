// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniques(arr) {
    let left = 0;
    let right = 1;
    let count = arr.length;
    while (left < arr.length) {
        if (arr[left] === arr[right]) {
            count--;
        }
        right++;
        left++;
    }
    return count;
}

console.log(countUniques([-3,-3,-3,-2,-1,-1,0,1,3]))