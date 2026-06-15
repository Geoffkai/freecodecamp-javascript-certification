function frankenSplice(arr1, arr2, index){
    let copyOfArr2 = [...arr2];
    
    copyOfArr2.splice(index, 0, ...arr1);
    return copyOfArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));