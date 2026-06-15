function pyramid(string, pyramidRows, boolean){
    let result = "\n";
    for(let rows = 0; rows < pyramidRows; rows++){
        let currentRow = "";
        let charCount;
        let spaceCount;

        if(boolean){
            charCount = (pyramidRows * 2 - 1) - rows*2;
            spaceCount = rows;
            currentRow = " ".repeat(spaceCount) + string.repeat(charCount) + "\n";
        }else{
            charCount =  1 + (rows * 2);
            spaceCount = pyramidRows - rows - 1;
            currentRow = " ".repeat(spaceCount) + string.repeat(charCount) + "\n";
        }
        result += currentRow;
    }
    return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));