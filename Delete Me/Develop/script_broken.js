// Array of special characters to be included in password
var specialCharacters = [
"@",
"%",
"+",
// "\", 
"/", 
"'", 
"!", 
"#", 
"$", 
"^", 
"?", 
":", 
",", 
")", 
"(", 
"}", 
"{", 
"]", 
"[", 
"~", 
"-", 
"_", 
"."];
// Array of numeric characters to be included in password
var numericCharacters =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// I WANT to randomly generate a password that meets certain criteria

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//Prompt user for password length
// Make sure that password legthn is between 8 and 128(inclusive)
var length = prompt("How long should your password be?");


console.log(length);

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// Use a confirm prompt the user for # special chars
var specCharChk = prompt("Include Special Characters?", "Include");
//  if(specCharChk === 0) {
//    return "";
//  }
console.log(specCharChk);
// Use a confirm prompt the user for # numeric chars
var specNumChk = prompt("Include Number Characters?", "Include");
// if(specNumChk === 0) {
//   return "";
// }
console.log(specNumChk);
// Use a confirm prompt the user for # uppercase chars
var specUCChk = prompt("Include Upper Case Characters?", "Include");
// if(specUCChk === 0) {
//   return "";
// }
console.log(specUCChk);
// Use a confirm prompt the user for # lowercase chars
var specLCChk = prompt("Include Lower Case Characters?");
// if(specLCChk === 0) {
//   return "";
// }
console.log(specLCChk);

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected




// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

var password = "";

// function(){
//   if(document.getElementById("length").value)
// }

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

// Assignment Code
var generateBtn = document.querySelector("#generate");


for (var i = 0; i < length; i++) {
  password += getRandomItem(specialCharacters);
  password += getRandomItem(lowerCasedCharacters);
  password += getRandomItem(upperCasedCharacters);
  password += getRandomItem(numericCharacters);
}



// WHEN the password is generated


// Write password to the #password input

function writePW() {
  var options = passwordOptions();
  console.log(options)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  document.getElementById("display").value = password;

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePW);
  
  // THEN the password is either displayed in an alert or written to the page


// //function to copy pw to clipboard
// function copyPW(){
//   document.getElementById("password").select();

//   document.execCommand("Copy");

//   alert("Password copied to Clipboard.");

//   copyBtn.addEventListener("click", writePW);
// }
