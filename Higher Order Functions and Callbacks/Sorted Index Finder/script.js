function getIndexToIns(arr, number){
  arr.sort((a,b) => a - b);
  return arr.findIndex(x => x >= number) != -1 ? arr.findIndex(x => x >= number): arr.length;
}

console.log(getIndexToIns([3, 10, 5], 11));