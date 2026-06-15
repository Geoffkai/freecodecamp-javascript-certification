let lunches = [];

function addLunchToEnd(arr, string){
    arr.push(string);
    console.log(`${string} added to the end of the lunch menu.`);
    return arr;
}

function addLunchToStart(arr, string){
    arr.unshift(string);
    console.log(`${string} added to the start of the lunch menu.`);
    return arr;
}

function removeLastLunch(arr){
    let removedLunchItem = arr.pop();
    if(removedLunchItem == undefined){
        console.log(`No lunches to remove.`);
    }else{
        console.log(`${removedLunchItem} removed from the end of the lunch menu.`);
    }
    return arr;
}

function removeFirstLunch(arr){
    let removedLunchItem = arr.shift();
    if(removedLunchItem == undefined){
        console.log(`No lunches to remove.`);
    }else{
        console.log(`${removedLunchItem} removed from the start of the lunch menu.`);
    }
    return arr;
}

function getRandomLunch(arr){
    if(arr.length == 0){
        console.log("No lunches available.");
    }else{
        let randomLunch = Math.floor(Math.random() * (arr.length));
        console.log(`Randomly selected lunch: ${arr[randomLunch]}`);
    }
}

function showLunchMenu(arr){
    if(arr.length != 0){
        console.log(`Menu items: ${arr.join(", ")}`);
    }else{
        console.log("The menu is empty.");
    }
}

getRandomLunch(lunches);
showLunchMenu(["Greens", "Corns", "Beans"]);