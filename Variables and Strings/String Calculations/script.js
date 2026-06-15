const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // stringconst result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string

const result1 = '10' + 5;

console.log(result1); // 105
console.log(typeof result1); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const subtractionResult1 = 'abc' - 5;
console.log(subtractionResult1); // NaN
console.log(typeof subtractionResult1); // number

const multiplicationResult1 = 'abc' * 2;
console.log(multiplicationResult1); // NaN
console.log(typeof multiplicationResult1); // number

const divisionResult1 = 'abc' / 2;
console.log(divisionResult1); // NaN
console.log(typeof divisionResult1); // number

const res1 = true + 1;
console.log(res1); // 2
console.log(typeof res1); // number

const res2 = false + 1;
console.log(res2); // 1
console.log(typeof res2); // number

const res3 = 'Hello' + true;
console.log(res3); // "Hellotrue"
console.log(typeof res3); // string

const results1 = null + 5;
console.log(results1); // 5
console.log(typeof results1); // number

const results2 = undefined + 5;
console.log(results2); // NaN
console.log(typeof results2); // number
