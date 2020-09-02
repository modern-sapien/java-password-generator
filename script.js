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
  return "This is not my final password!"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);