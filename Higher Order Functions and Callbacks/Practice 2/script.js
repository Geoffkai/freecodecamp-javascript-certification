const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((previous, current) => previous + current, 0);

console.log(sum);

const words = ["cat", "elephant", "tiger", "giraffe"]; //find the longest word
const longestWord = words.reduce((previous, current) => previous.length > current.length ? previous : current, "");

console.log(longestWord);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]; //Use reduce() to count how many times each item appears in the array.
let frequency = fruits.reduce((object, curr) => {
    object[curr] = (object[curr] || 0) + 1;
    return object;
}, {});

console.log(frequency);

const nested = [[1, 2], [3, 4], [5]]; //Expected Output: [1, 2, 3, 4, 5]
frequency = nested.reduce((prev, curr) => prev.concat(curr), []);

console.log(frequency);

const people = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 30 }
]; // { 21: [ "Alice", "Charlie" ],  25: [ "Bob" ], 30: [ "David" ]}

const grouped = people.reduce((prev,curr) => {
    if(!prev[curr.age]){
        prev[curr.age] = [];
    }
    prev[curr.age].push(curr.name);
    return prev;
} , {});

console.log(grouped);