function dropElements(arr, func){
  let index = arr.findIndex(func);
  
  return index === -1 ? [] : arr.slice(index);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));