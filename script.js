var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var choices;
space = [];
var toUpperCase = function (x) {
    return x.toUpperCase();
}
alpha2 = alpha.map(toUpper)
// Assignment Code
var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    enter = parseInt(prompt("Please choose length of password between 8 and 128"));
    if (!enter) {
        alert("Must have valid input");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmLowercase = confirm("Would you like to use lowercase letters?");
        confirmUppercase = confirm("Would you like to use uppercase letters?");
        confirmNumber = confirm("Would you like to use numbers?");
        confirmCharacter = confirm("Would you like to use special characters?");  
    };
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);