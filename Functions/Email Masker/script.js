

function maskEmail(email){
    let last = email.indexOf("@");
    let toChange = email.slice(1, last - 1);
    return email.replace(toChange, "*".repeat(toChange.length));
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "info@test.dev";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));