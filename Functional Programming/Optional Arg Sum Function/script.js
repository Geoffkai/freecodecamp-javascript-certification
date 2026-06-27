const addTogether = (...args) => {
  const [a, b] = args;
  if (!isValidNumber(a)) return undefined;

  if (args.length === 1) {
    return (c) => (isValidNumber(c) ? a + c : undefined);
  }

  return isValidNumber(b) ? a + b : undefined;
};

const isValidNumber = (n) => typeof n === "number" && !Number.isNaN(n);

console.log(addTogether(2, undefined));
