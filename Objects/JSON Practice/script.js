/*🧪 Exercise: Save and Load a User Profile
Step 1: Create a user object
Create a JavaScript object with this information:

name: "Alex"

age: 25

skills: ["JavaScript", "Python", "HTML"]

isStudent: false

Step 2: Convert the object into a JSON string and print it using JSON.stringify().
Step 3: Simulate storing it by assigning the JSON string to a variable called storedData.
Step 4: Use JSON.parse() to turn storedData back into a JavaScript object.
Step 5: Access and print the following:
The user's name

The second skill in the skills array

Whether the user is a student */

const user = {
    name : "Alex",
    age: 25,
    skills: ["JavaScript", "Python", "HTML"],
    isStudent: false
}

const jsonString = JSON.stringify(user);
console.log(jsonString);

const storedData = jsonString;

const parsedUser = JSON.parse(storedData);

console.log(parsedUser.name); //1st way
console.log(parsedUser["name"]);
console.log(parsedUser.skills[1]); //1st way
console.log(parsedUser["skills"][1]);
console.log(parsedUser.isStudent);

// Step 1
user = {
    name: "Alex",
    age: 25,
    skills: ["JavaScript", "Python", "HTML"],
    isStudent: false
};

// Step 2 – use replacer to include only name and skills
jsonString = JSON.stringify(user, ["name", "skills"]);
console.log(jsonString); // Should only include name and skills

// Step 3
storedData = jsonString;

// Step 4
parsedUser = JSON.parse(storedData);

// Step 5
console.log(parsedUser.name);        // "Alex"
console.log(parsedUser.skills);      // ["JavaScript", "Python", "HTML"]
