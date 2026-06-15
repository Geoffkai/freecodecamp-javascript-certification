function steamrollArray(nestedArr){
  let flattened = [];

  function flatten(element){
    if(Array.isArray(element)){
      return element.forEach(item => flatten(item));
    }else{
      flattened.push(element);
    }
  }

  nestedArr.forEach(flatten);

  return flattened;
}

console.log(steamrollArray([[["a"]], [["b"]]]));