// Assignment Code
var generateBtn = document.querySelector("#generate");
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  //create arrays for charactersets
  var Uppercase = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J" ,"K" ,"L" ,"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var Symbols = ["!", ",", "#", "$", "%", "&", "(", "')'", "*", "+", ",", "-", "<", ">", "?", "^", "'/'", "'\'", "'{'", "'}'", "+", "="];
  var password = "";

  //an empty array for the new character set made up from all the sets chosen by the user
  var password1 = [];

  //create prompt and confirms for user input
  var passwordLength = prompt("How many characters do you want to use?  Please choose a number between 8 and 128.");

  //ask the user to select an appropriate number of charachters and their types
  if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmUppercase = confirm("Do you want to use uppercase letters?");
    var confirmLowercase = confirm("Do you want to use lowercase letters?");
    var confirmNumbers = confirm("Do you want to use numbers?");
    var confirmSymbols = confirm("Do you want to use Symbols?");

  //if the user confirms use of a character set it is concatenated to the array from which the password will be drawn
  if (confirmUppercase === true) {password1 = password1.concat(Uppercase)}
  if (confirmLowercase === true) {password1 = password1.concat(Lowercase)}
  if (confirmNumbers === true) {password1 = password1.concat(Numbers)}
  if (confirmSymbols === true) {password1 = password1.concat(Symbols)}

    //the password is randomized in the "randomCharacterArray" and outputs at the specified length
    for (var i = 0; i < passwordLength; i++){
      var randomCharacterArray = Math.floor(Math.random() * password1.length);
      password = password + password1 [randomCharacterArray]

    }
  document.querySelector("#password").value = password

 //if the user requests a password of invalid length the page reloads
  } else {location.reload()}
 
}




 
