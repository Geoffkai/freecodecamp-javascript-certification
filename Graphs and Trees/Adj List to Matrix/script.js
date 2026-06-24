function adjacencyListToMatrix(adjList) {
  const size = Object.keys(adjList).length;
  const adjacencyMatrix = Array.from({ length: size }, () =>
    new Array(size).fill(0),
  );

  for (const node in adjList) {
    for (const neighbor of adjList[node]) {
      adjacencyMatrix[node][neighbor] = 1;
    }
  }
  for (const row of adjacencyMatrix) {
    console.log(row);
  }
  return adjacencyMatrix;
}

adjacencyListToMatrix({ 0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2] });
