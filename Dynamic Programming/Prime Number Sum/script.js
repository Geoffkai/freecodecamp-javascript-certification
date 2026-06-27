function sumPrimes(num) {
  if (num < 2) return 0;

  //isComposite[i] = true means i is NOT prime
  const isComposite = new Array(num + 1).fill(false);
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (!isComposite[i]) {
      //meaning i is Prime
      sum += i;
      // reuse this discovery: mark all multiples of i as composite (NOT Prime)
      for (let j = i * i; j <= num; j += i) {
        isComposite[j] = true;
      }
    }
  }

  return sum;
}

console.log(sumPrimes(10));
