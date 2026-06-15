function smallestCommons(arr){
  function gcd(num1, num2){
    if(num2 === 0){
      return num1;
    }
    return gcd(num2 , num1 % num2);
  }
  
  function lcm(num1, num2){
    return num1 * num2 / gcd(num1, num2);
  }

  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);

  let result = start;

  for(let i = start + 1; i <= end; i++){
    result = lcm(result, i);
  }
  return result
}

console.log(smallestCommons([1, 5]));