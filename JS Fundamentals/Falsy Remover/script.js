function bouncer(arr){
  let newArr = arr.filter(Boolean);
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));  