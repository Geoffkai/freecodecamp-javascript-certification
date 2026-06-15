let stringTest;

function reverseString(string){
    let reverse = string.split("").reverse().join("");
    return reverse;
}

stringTest = "hello";
console.log(reverseString(stringTest));

stringTest = "howdy";
console.log(reverseString(stringTest));

stringTest = "Greetings from Earth";
console.log(reverseString(stringTest));