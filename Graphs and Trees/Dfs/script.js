function dfs(graph, root) {
  const stack = [root];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
    }
    const row = graph[node];
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 1 && !visited.has(i)) {
        stack.push(i);
      }
    }
  }

  return result;
}

console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ],
    1,
  ),
);
