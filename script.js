// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //TODO generate a real password & replace return string with real password string
  return "This is not my final password!" //THIS goes below prompts for generating password
}

  var userPassLength = prompt("Let's select a password length 8 characters to 128")
  var userPassLowerCase = confirm("Do you need lowercase characters?");
  var userPassUpperCase = confirm("Do you need uppercase characters?");
  var userPassNumeric = confirm("Do you need numbers?")
  var userPassSpecial =confirm("Do you need special characters?")


  var passCondition = {      //create an object with multiple arrays that we will call on to generate a password depending on preferences
        passLowerCase: "abcdefghijklmnopqrstuvwxyz",
        passUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        passNumber: "1234567890",
        passSpecial: "!@#$%^&*()_+-=[]{}|?/<>,.:"
        };

  var generatedPassword = ""//this is where we will concat the strings together

  if (userPassLength > 0) {
    alert("You declared a length of" + userPassLength)
  } else {
    alert("You need to choose a character amount between 1 and 128")
    }

  if (userPassLowerCase === true) {
    alert("You need lowercase characters")
  } else {
    alert("You don't need lower case letters");
  }

  if (userPassUpperCase === true) {
    alert("You need uppercase characters!")
  } else {
    alert("You don't need upper case letters");
  }

  if (userPassNumeric === true) {
    alert("You need numbers!")
  } else {
    alert("You don't need numbers");
  }

  if (userPassSpecial === true) {
    alert("You need special characters!")
  } else {
    alert("You don't need special characters");
  }

// at this point, we have established what a user would like to include in their
//password, now we have to create it based on those outcomes & summon the variables
// necessary to execute.

//userPassLength = length of password generated 8 - 128 characters
  // if userPassLowerCase === true ;include lower case chars
  // if userPassUpperCase === true ; include upper case chars
  // if userPassNumeric === true ; include number chars
  // if userPassSpecial === true; include special chars
  // for (var i; 0 < userPassLength; i++)
  // to use CONCAT, RANDOMIZER, MATH.FLOOR, MATH.RANDOM


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// ACCEPTANCE GUIDELINES
// [DONE] GIVEN I need a new, secure password
// [DONE] WHEN I click the button to generate a password
// [DONE] THEN I am presented with a series of prompts for password criteria
// [DONE] WHEN prompted for password criteria
// [DONE] THEN I select which criteria to include in the password
// [DONE] WHEN prompted for the length of the password
// [DONE] THEN I choose a length of at least 8 characters and no more than 128 characters
// [DONE] WHEN prompted for character types to include in the password
// [DONE] THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page