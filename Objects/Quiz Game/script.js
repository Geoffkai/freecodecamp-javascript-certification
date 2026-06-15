let questions = [];

const question1 = {
    category : "Variables",
    question : "What keyword is used to declare a variable in JavaScript?",
    choices : ["var", "int", "String"],
    answer : "var"
}
const question2 = {
    category : "Data Types",
    question : "What is the result of typeof null in JavaScript?",
    choices : ["null", "object", "undefined"],
    answer : "object"
}
const question3 = {
    category : "Operators",
    question : "What does the (===) operator check in JavaScript?",
    choices : ["Value only", "Type only", "Value and Type"],
    answer : "Value and Type"
}
const question4 = {
    category : "Functions",
    question : "How do you define a function in JavaScript?",
    choices : ["function myFunction()", "def myFunction()", "fun myFunction()"],
    answer : "function myFunction()"
}
const question5 = {
    category : "Arrays",
    question : "What method adds an element to the end of an array?",
    choices : ["push()", "pop()", "shift()"],
    answer : "push()"
}

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion(questions){
    const randomQuestion = Math.floor(Math.random() * (questions.length));
    return questions[randomQuestion];
} 

function getRandomComputerChoice(choices){
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getResults(selectedQuestion,selectedComputerChoice){
    console.log("Question: " + selectedQuestion.question);
    console.log("Choices: " + selectedQuestion.choices);
    console.log("Computer Answer: " + selectedComputerChoice);
    if(selectedQuestion.answer === selectedComputerChoice){
        return "The computer's choice is correct!";
    }else{
        return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`;
    }
}

const selectedQuestion = getRandomQuestion(questions);
const selectedComputerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log(getResults(selectedQuestion,selectedComputerChoice));