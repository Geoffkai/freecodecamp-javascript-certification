function repeatStringNumTimes(string, num){
    let repeatedString = "";
    if(num <= 0) {
        return "";
    }else{
        for(let i = 1; i <= num; i++){
        repeatedString += string;
        }
    }
    return repeatedString;
}

console.log(repeatStringNumTimes("*",3));
console.log(repeatStringNumTimes("abc",3));
