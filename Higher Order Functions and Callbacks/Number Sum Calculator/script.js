function sumPrimes(number){
  function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    for(let i = 2; i * i <= num; i++){
      if(num % i === 0) return false;
    }
    return true;
  }
  let sum = 0;
  for(let j = 0; j <= number; j++){
    if(isPrime(j)){
      sum += j;
    }
  }
  return sum;
}

console.log(sumPrimes(10));