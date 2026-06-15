let year = 2024;

function isLeapYear1(year){
    if(year % 4 == 0){
        if(year % 100 == 0 && year % 400 != 0){
        return `${year} is not a leap year.`;
        }else{
        return `${year} is a leap year.`;
        }
    }
}

function isLeapYear2(year){
    let leap = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
    return leap ? `${year} is a leap year.` : `${year} is not a leap year.`
}

const isLeapYear3 = year => (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? `${year} is a leap year.` : `${year} is not a leap year.`;


let result = isLeapYear1(year);
console.log(result);

result = isLeapYear2(1900);
console.log(result);


result = isLeapYear3(2000);
console.log(result);