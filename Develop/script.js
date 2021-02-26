// Array of special characters to be included in password
var specialCharacters = ["@", "%", "+", "\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
// Array of numeric characters to be included in password
var numericCharacters =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```





//Retrieve a random item from the array supplied
function getRandomItem(arr) {

  // Get a random index from the length of the array
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Retrieve random Item
  var item = arr[randomIndex];
  // Log the item
  return item;
}
// console.log(item);
// console.log("Hello World!")

var length = prompt("How long should your password be");
var password = "";

for (var i = 0; i < length; i++) {
  password += getRandomItem(specialCharacters);
  password += getRandomItem(lowerCasedCharacters);
  password += getRandomItem(upperCasedCharacters);
  password += getRandomItem(numericCharacters);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var options = passwordOptions();
  console.log(options)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompt user for password length
// Make sure that password legthn is between 8 and 128(inclusive)
// Use a confirm propt the user for # special chars
// Use a confirm propt the user for # numeric chars
// Use a confirm propt the user for # uppercase chars
// Use a confirm propt the user for # lowercase chars

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
