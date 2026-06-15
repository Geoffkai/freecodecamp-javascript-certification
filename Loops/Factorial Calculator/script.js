let num = 5;

//using for loop
function factorialCalculator(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }
    return result;
}

//using while loop
function factorialCalculator2(number){
    let result = 1;
    while(number >= 1){
        result *= number;
        number--;
    }
    return result;
}

// Using do while loop
function factorialCalculator3(number){
    let result = 1;
    do{
        result *= number;
        number--;
    }while(number != 1);
    return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

factorial = factorialCalculator2(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

factorial = factorialCalculator3(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

