function sumFibs(number){
  let prev = 0;
  let current = 1;
  let sum = 0;
  while(current <= number){
    if(current % 2 !== 0){
      sum += current;
    }
    [prev, current] = [current, prev + current];
  }

  return sum;
}

console.log(sumFibs(75025));