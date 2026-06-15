let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];


function lookUpProfile(name, prop) {
    const c = contacts.find(x => x.firstName === name);
    return c ? (prop in c ? c[prop] : "No such property") : "No such contact";
}

function lookUpProfile(stringName, prop){
    for(const contact of contacts){
        if(contact.firstName == stringName){
            return contact.hasOwnProperty(prop) ? contact[prop] : "No such property"; 
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Bob", "number"));
