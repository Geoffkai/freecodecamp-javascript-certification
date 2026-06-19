const rangeOfNumbers = (startNum, endNum) => {
  let countNum = [];
  if (endNum < startNum) {
    return [];
  } else {
    countNum = rangeOfNumbers(startNum, endNum - 1);
    countNum.push(endNum);
    return countNum;
  }
};
console.log(rangeOfNumbers(3, 8));
