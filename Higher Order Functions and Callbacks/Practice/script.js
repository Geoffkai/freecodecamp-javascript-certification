function greet(callback) {
    console.log("Hello!");
    callback(); // Call the passed-in function
    }

    function sayBye() {
    console.log("Goodbye!");
}

greet(sayBye);

function greet(callback) {
    console.log("Hello!");
    callback();
}

    greet(function() {
    console.log("Nice to meet you!");
});

let numbers = [1, 2, 3];

// numbers.forEach(function(number) {
//   console.log(number * 2);
// });

// numbers.forEach(num => console.log(num + 5));

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(3, 4, add));      // 7
console.log(calculate(3, 4, multiply)); // 12

function processUserInput(name, success, error) {
  if (name) {
    success(name);
  } else {
    error();
  }
}

processUserInput(
  "Geoffrey",
  function(name) {
    console.log(`Welcome, ${name}!`);
  },
  function() {
    console.log("No name provided!");
  }
);