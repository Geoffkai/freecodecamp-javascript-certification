function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = arr.filter((num) => num < pivot);
  const right = arr.filter((num) => num > pivot);
  const equal = arr.filter((num) => num === pivot); // pivot + any duplicates
  return [...quicksort(left), ...equal, ...quicksort(right)];
}

console.log(
  quicksort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
