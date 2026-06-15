function titleCase(str){
  return str.split(' ').map(word => 
word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
