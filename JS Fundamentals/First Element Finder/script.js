function findElement(array, func){
    const testFunction = func;
    for(const number of array){
        if(testFunction(number)){
            return number;
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //undefined
console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; })); //3
console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; })) //javascript
console.log(findElement([], function(num) { return num > 0; })); //undefined