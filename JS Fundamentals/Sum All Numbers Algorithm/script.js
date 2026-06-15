function sumAll(arr){
    const max = Math.max(arr[0], arr[1]);
    const min = Math.min(arr[0], arr[1]);
    // let sum = 0;

    // for(let i = min; i <= max; i++){
    //     sum += i;
    // }

    return ((max-min + 1) * (min + max)) / 2;
}

console.log(sumAll([1,4]));