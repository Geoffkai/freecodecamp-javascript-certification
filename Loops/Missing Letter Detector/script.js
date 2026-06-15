// function fearNotLetter(string){
//   const range = "abcdefghijklmnopqrstuvwxyz";

//   let i = 0,j;
//   while(range[i] != string[0] && i <= range.length){
//     i++;
//   }

//   for(let k = 0; k < string.length; k++){
//     if(range[i] != string[k]){
//       return range[i];
//     }
//     i++;
//   }
//   return undefined;
// }

function fearNotLetter(string){
    for(let i = 0; i < string.length - 1; i++){
        if(string.charCodeAt(i + 1) - string.charCodeAt(i) > 1){
            return String.fromCharCode(string.charCodeAt(i) + 1); 
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
