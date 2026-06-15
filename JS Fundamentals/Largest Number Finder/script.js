function largestOfAll(array2D) {
    let storageArray = [];

    for (const array of array2D) {
        storageArray.push(Math.max(...array));
    }
    return storageArray;
}
