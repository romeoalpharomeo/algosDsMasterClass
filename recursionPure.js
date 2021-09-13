function pureCollectOddValues(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));

    return newArr;
}

console.log(pureCollectOddValues([3,3,2,5,7,9,13]))