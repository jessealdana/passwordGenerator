// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays for charactersets
  var Uppercase = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J" ,"K" ,"L" ,"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var Symbols = ["!", ",", "#", "$", "%", "&", "(", "')'", "*", "+", ",", "-", "<", ">", "?", "^", "'/'", "'\'", "'{'", "'}'", "+", "="];
  
  var password = '';

  //create prompt and confirms for user input

  var passwordLength = prompt("How many characters do you want to use?");
  var confirmUppercase = confirm("Do you want to use uppercase letters?");
  var confirmLowercase = confirm("Do you want to use lowercase letters?");
  var confirmNumbers = confirm("Do you want to use numbers?");
  var confirmSymbols = confirm("Do you want to use symbols?");

function generatePassword() {
  if (confirmUppercase) {
    generatePassword.push(Uppercase)
 //   alert("You chose uppercase letters.")
  }

  if (confirmLowercase) {
    generatePassword.push(Lowercase)
  //  alert("You chose lowercase letters.")
  }

  if (confirmNumbers) {
    generatePassword.push(Numbers)
  //  alert("You chose numbers.")
  }

  if (confirmSymbols) {
    generatePassword.push(Symbols)
  //  alert("You chose symbols.")
  }
}

/*--I tried to create an array of all characters and symbols in the generatePassword index.
    Right now it is returning the correct number of characters but it seems to be returning 
    the index position rather than the character.---*/
    
for (var i = 0; i < passwordLength; i++) {
  //if (array [i] == value)
  //return i;
  var num = Math.floor(Math.random() * 10) + 1;
  console.log(num);
}


console.log(Uppercase[2]);
console.log(Lowercase[5]);
console.log(Numbers[8]);
console.log(Symbols[11]);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
