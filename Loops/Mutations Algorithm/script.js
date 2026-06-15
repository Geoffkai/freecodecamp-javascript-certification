let mutation1 = ["hello", "hey"]; //false
let mutation2 = ["hello", "Hello"]; //true;
let mutation3 = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"]; //true
let mutation4 = ["Mary", "Army"]; //true
let mutation5 = ["Mary", "Aarmy"]; //true
let mutation6 = ["Alien", "line"]; //true
let mutation7 = ["floor", "for"]; //true
let mutation8 = ["hello", "neo"]; //false
let mutation9 = ["voodoo", "no"]; //false
let mutation10 = ["ate", "date"]; //false
let mutation11 = ["Tiger", "Zebra"] //false
let mutation12 = ["Noel", "Ole"] //true

let listOfMutations = [mutation1,mutation2,mutation3,mutation4,mutation5,mutation6,mutation7,mutation8,mutation9,mutation10,mutation11,mutation12];


function mutation(array){
    for(const char of array[1].toLowerCase()){
        if(array[0].toLowerCase().includes(char)){
            continue;
        }else{
            return false;
        }
    }
    return true;
}


for(const test of listOfMutations){
    console.log(mutation(test));
}