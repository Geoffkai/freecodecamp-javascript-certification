function truncateString(string, length){
    if(string.length <= length){
        return string;
    }else{
        return string.slice(0, length) + "...";
    }
}

let truncateString2 = (string,length) => 
    (string.length <= length) ? string : string.slice(0,length) + "...";

console.log(truncateString1("A-tisket a-tasket A green and yellow basket", 8));