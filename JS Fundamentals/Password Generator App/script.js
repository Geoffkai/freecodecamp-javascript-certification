function generatePassword(length){
    const random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    let randomNumber;
    
    for(let i = 0; i < length; i++){
        randomNumber = Math.floor(Math.random() * (random.length));
        password += random[randomNumber];
    }
    return password;
}

let password = generatePassword(5);

console.log("Generated password: " + password);