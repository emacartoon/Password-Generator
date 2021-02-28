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
  
  function setLength() {
    var length = prompt("How long should your password be? Please choose a number between 8 and 128 characters.", "8");
    // localStorage.setItem("length", length);
    while (length > 128 || length < 8 ) {
      length = prompt("Please use a number from 8 to 128");
      // setLength();
    }
    console.log(length);
  }
  
  setLength();
  
  //   Using a confirm prompt the user for special characters
  var specCharChk = prompt(
    "Include Special Characters? Hit OK if Yes, Cancel if No",
    "True"
    );
    console.log(specCharChk);
    
    //   Using a confirm prompt the user for numeric characters
    var specNumChk = prompt(
      "Include Number Characters? Hit OK if Yes, Cancel if No",
      "True"
      );
      
      console.log(specNumChk);
      
      //   Using a confirm prompt the user for uppercase characters
      var specUCChk = prompt(
        "Include Upper Case Characters? Hit OK if Yes, Cancel if No",
        "True"
        );
        
        console.log(specUCChk);
        
        //   Using a confirm prompt the user for lowercase characters
        var specLCChk = prompt(
          "Include Lower Case Characters? Hit OK if Yes, Cancel if No",
          "True"
          );
          
          console.log(specLCChk);
          
          // Algo for password generation goes below
          
          for (var i = 0; i < length; i++) {
            if(specCharChk)
            password += getRandomItem(specialCharacters);
            if(specLCChk)
            password += getRandomItem(lowerCasedCharacters);
            if(specUCChk)
            password += getRandomItem(upperCasedCharacters);
            if(specNumChk)
            password += getRandomItem(numericCharacters);
          }
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
          console.log(password);
          // return the build password
          return password;

        }
        