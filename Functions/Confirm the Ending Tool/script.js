// function confirmEnding(str1, str2){
//     return str1.slice(-(str2.length)) == str2;
// }

let confirmEnding = (str1,str2) => str1.endsWith(str2);

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "tion"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));

