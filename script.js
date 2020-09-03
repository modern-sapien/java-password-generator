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

  // var passCondition {                             //create an object with multiple arrays that we will call on to generate a password depending on preferences
  //       var passLowerCase = ["a", "b", "c", "d", "e", "f"];
  //       var passUpperCase = ["A", "B", "C", "D", "E", "F"];
  //       var passNumber = ["1", "2", "3", "4", "5", "6"];
  //       var passSpecial = ["!", "@", "#", "%", "^"];
  //       }

  



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