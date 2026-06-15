let words;

function findLongestWordLength(sentence){
    words = sentence.trim().split(/\s+/);
    let longestWord = 0;

    for(let i = 0; i < words.length; i++){
        longestWord = Math.max(words[i].length, longestWord);
    }

    return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));