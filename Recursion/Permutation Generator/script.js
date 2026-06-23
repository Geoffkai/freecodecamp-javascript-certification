const permuteString = (input, prefix = "", result = []) => {
  if (input.length === 0) {
    result.push(prefix);
    return result;
  }
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const remaining = input.slice(0, i) + input.slice(i + 1);
    permuteString(remaining, prefix + char, result);
  }
  return [...new Set(result)];
};

console.log(permuteString("fcc"));
