// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaration
var confirmLength;
var confirmSpecialCharacter;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
let character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
let upperCase = [];

// Write password to the #password input
var generatePassword = function() {
  var userLenght = parseInt(prompt("How long would you like your password? No less than 8 or more than 128 characters!")) ;
  if(!isNaN(userLenght) && userLenght >= 8 && userLenght <= 128) {
    console.log("User Lenght approved!") ; 
    confirmSpecialCharacter = confirm("Do you want special characters?");
    confirmUpperCase = confirm("Do you want uppercase letters?") ;
    confirmLowerCase = confirm("Do you want lowercase letters?"); 
    confirmNumber =  confirm("Do you want numbers?");
      if(!confirmSpecialCharacter && !confirmUpperCase && !confirmLowerCase && !confirmNumber) {
        alert("You would need to choose atleast one of the character types!")
      } else {
        makePassword();
      }
  }else {
    alert("Must meet condition requirements!") ;
  }
  
}
function makePassword () {


}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);