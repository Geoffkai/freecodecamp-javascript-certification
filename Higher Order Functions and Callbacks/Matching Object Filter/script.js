function whatIsInAName(collection, source) {
  // Get all entries (key-value pairs) from the source object
  const keys = Object.keys(source);
  
  // Filter the collection to only include objects that match all key-value pairs in source
  return collection.filter(obj => {
    // For each key-value pair in source, check if it exists in the object
    return keys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}

console.log(whatIsInAName(
  [{ first: "Alice", last: "Smith" }, { first: "Bob", last: "Jones" }],
  { first: "Alice", last: "Smith" }
)); 
// Output: [{ first: "Alice", last: "Smith" }]
