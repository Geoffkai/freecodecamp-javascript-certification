function chunkArrayInGroups(array,num){
    let storageArray = [];
    let tempArray = [];

    for(let i = 0; i < array.length; i++){ 
        console.log(array[i]);
        if(tempArray.length < num){
            tempArray.push(array[i]);
        }else{
            storageArray.push(tempArray);
            tempArray = [];
            tempArray.push(array[i]);
        }
    }
    storageArray.push(tempArray);
    return storageArray;
}

//better solution
function chunkArrayInGroups1(array,num){
    let storageArray = [];

    for(let i = 0; i < array.length; i+=num){ 
        storageArray.push(array.slice(i, i + num));
    }
    return storageArray;
}

console.log(chunkArrayInGroups1([0, 1, 2, 3, 4, 5], 2));