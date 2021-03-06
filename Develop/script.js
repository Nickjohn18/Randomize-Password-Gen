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
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var input;

// Write password to the #password input
var generatePassword = function() {
  var userLength = parseInt(prompt("How long would you like your password? No less than 8 or more than 128 characters!")) ;
  if(!isNaN(userLength) && userLength >= 8 && userLength <= 128) {
    console.log("User Lenght approved!") ; 
    confirmSpecialCharacter = confirm("Do you want special characters?");
    confirmUpperCase = confirm("Do you want uppercase letters?") ;
    confirmLowerCase = confirm("Do you want lowercase letters?"); 
    confirmNumber =  confirm("Do you want numbers?");

    // start of chosen character types conditions

      if(!confirmSpecialCharacter && !confirmUpperCase && !confirmLowerCase && !confirmNumber) {
        alert("You would need to choose atleast one of the character types!")
      } else if(confirmSpecialCharacter && confirmUpperCase && confirmLowerCase && confirmNumber ) {
          input = character.concat(number, lowerCase, upperCase);
          // for 3 options
      } else if(confirmSpecialCharacter && confirmUpperCase && confirmLowerCase) {
        input = character.concat(lowerCase,upperCase);

      } else if(confirmSpecialCharacter && confirmUpperCase && confirmNumber) {
        input = character.concat(number,upperCase);

      } else if(confirmSpecialCharacter && confirmNumber && confirmLowerCase) {
        input = character.concat(lowerCase,number);

      } else if(confirmNumber && confirmUpperCase && confirmLowerCase) {
        input = number.concat(lowerCase,upperCase);
      }
        // for 2 options
        else if(confirmSpecialCharacter && confirmNumber) {
          input = character.concat(number)

        } else if(confirmSpecialCharacter && confirmUpperCase) {
          input = character.concat(upperCase)

        } else if(confirmSpecialCharacter && confirmLowerCase) {
          input = character.concat(lowerCase)

        } else if(confirmUpperCase && confirmNumber) {
          input = upperCase.concat(number)

        } else if(confirmLowerCase && confirmNumber) {
          input = lowerCase.concat(number)

        } else if(confirmUpperCase && confirmLowerCase) {
          input = upperCase.concat(lowerCase)
        }

          else if (confirmSpecialCharacter) {
            input = character;

          } else if (confirmNumber) {
            input = number;

          } else if (confirmUpperCase) {
            input = upperCase;

          } else if (confirmLowerCase) {
            input = lowerCase;
            
          } 
        }else {
          alert("Must meet condition requirements!") ;
        }

        var getPassword = [];
         for(var i = 0; i < userLength; i++) {
           var pickInput = input[Math.floor(Math.random() * input.length)];
           getPassword.push(pickInput);

           console.log(pickInput);
         }
          ps = getPassword.join(""); 
          return ps
  
      }
      
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
