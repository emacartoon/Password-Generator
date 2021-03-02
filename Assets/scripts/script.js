// https://github.com/emacartoon/Password-Generator
// https://emacartoon.github.io/Password-Generator/

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
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
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Assignment Code
// Retrieve a reference to the button with an id of generate
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  // Prompt user for password length
  // Make sure that password length between 8 and 128(inclusive)

  var length = prompt(
    "How long should your password be? Please choose a number between 8 and 128 characters.",
    "8"
  );
  // localStorage.setItem("length", length);
  while (length > 128 || length < 8) {
    length = prompt("Please use a number from 8 to 128");
    // setLength();
  }
  if (isNaN(length)){
    alert("Please type a number from 8 to 128");
    return;
  }

  //   Using a confirm prompt the user for special characters
  var specCharChk = confirm(
    "Include Special Characters? Hit OK if Yes, Cancel if No"
  );

  //   Using a confirm prompt the user for numeric characters
  var specNumChk = confirm(
    "Include Number Characters? Hit OK if Yes, Cancel if No"
  );

  //   Using a confirm prompt the user for uppercase characters
  var specUCChk = confirm(
    "Include Upper Case Characters? Hit OK if Yes, Cancel if No"
  );

  //   Using a confirm prompt the user for lowercase characters
  var specLCChk = confirm(
    "Include Lower Case Characters? Hit OK if Yes, Cancel if No"
  );

  if (!specCharChk && !specNumChk && !specUCChk && !specLCChk){
    alert("Please select at least one type of characters");
    return;
  }

  var wholeShebang = []
  var mustHaveChar = "";
  if (specCharChk) {
    wholeShebang = wholeShebang.concat(specialCharacters);
    mustHaveChar += getRandomItem(specialCharacters);
  } 
  if (specLCChk) {
    wholeShebang = wholeShebang.concat(lowerCasedCharacters);
    mustHaveChar += getRandomItem(lowerCasedCharacters);
  } 
  if (specUCChk) {
    wholeShebang = wholeShebang.concat(upperCasedCharacters);
    mustHaveChar += getRandomItem(upperCasedCharacters);
  }
  if (specNumChk) {
    wholeShebang = wholeShebang.concat(numericCharacters);
    mustHaveChar += getRandomItem(numericCharacters);
  }

  // Algo for password generation goes below
  var password = "";
  for (var i = 0; i < length; i++) {
   password += getRandomItem(wholeShebang);
  
  }

  for (var i = 0; i < mustHaveChar.length; i++) {
    let string = password;
    password = string.replace(password[i], mustHaveChar[i])
    console.log(password);
    console.log(mustHaveChar);
    return password;
  }

  // Somehow it's pulling 8 characters of each type - needs to be 8 characters total.
  
  // Retrieve a random item from the provided array
  function getRandomItem(arr) {
    // Generate a random index from 0 to the length - 1 of our array
    var randomIndex = Math.random() * arr.length;
    // round down our random index
    randomIndex = Math.floor(randomIndex);
    // return the random item based off of our random index
    return arr[randomIndex];
    // One liner of the above code
    // return arr[Math.floor(Math.random() * arr.length)];
  }
  // return the build password
  return password;
}

// Add event listener to generate button
// copyBtn.addEventListener("click", copyPassword);

//Option 1
function copy() {
  var password = document.querySelector("#password");
  password.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

// Option 2
// function myFunction() {
//   /* Get the text field */
//   var copyText = document.getElementById("myInput");

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }
