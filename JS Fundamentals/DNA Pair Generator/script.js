function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return [...str].map(char => [char, pairs[char]]);
}

// console.log(pairElement("ATCGA"));

// function pairElement(str){
//   let result = [];
//   for(const char of str){
//     switch (char){
//       case "A":
//         let newArr = [char, "T"];
//         result.push(newArr);
//         break;
//       case "T":
//         newArr = [char, "A"];
//         result.push(newArr);
//         break;
//       case "C":
//         newArr = [char, "G"];
//         result.push(newArr);
//         break;
//       case "G":
//         newArr = [char, "C"];
//         result.push(newArr);
//         break;
//     }
//   }

//   return result;
// }