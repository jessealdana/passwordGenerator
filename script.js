// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays for charactersets
  var Uppercase = ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J" ,"K" ,"L" ,"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var Symbols = ["!", ",", "#", "$", "%", "&", "(", "')'", "*", "+", ",", "-", "<", ">", "?", "^", "'/'", "'\'", "'{'", "'}'", "+", "="];
  

  //create prompt and confirms for user input
  var passwordLength = prompt("How many characters do you want to use?  Please choose a number between 8 and 128.");

  //an empty array for the new character set made up from all the sets chosen by the user
  var password = [];

//a function that will chain four booleans to fill the previously empty "password array" 

 function generatePasswordSet() {
    upperCase()
    lowerCase()
    numbers()
    symbols()
  }

  //four functions that will nest inside the previous function
 function upperCase() {
    var confirmUppercase = confirm("Do you want to use uppercase letters?");
    if (confirmUppercase === true) {
      password.push(Uppercase)
        alert("You chose uppercase letters.")
        console.log(password)
      } else {
        console.log("no upper letters")
      }
  }

 function lowerCase() {
    var confirmLowercase = confirm("Do you want to use lowercase letters?");
    if (confirmLowercase === true) {
      password.push(Lowercase)
        alert("You chose lowercase letters.")
        
      } else {
        console.log("no lower letters")
      }
  }

 function numbers() {
    var confirmNumbers = confirm("Do you want to use numbers?");
    if (confirmNumbers === true) {
      password.push(numbers)
        alert("You chose numbers.")
        
      } else {
        console.log("no numbers")
      }
  }

  function symbols() {
    var confirmSymbols = confirm("Do you want to use Symbols?");
    if (confirmSymbols === true) {
      password.push(symbols)
        alert("You chose symbols.")
          
      } else {
          console.log("no symbols")
      }
  }
 
  /*the generate password function combined the arrays but returned them as a matrix.  The 
    following function resets the matrix into a one dimensional array that can be passed on*/ 
  function OneDArr(arr){
    for (var i = 0; i < arr.length; i++) {
      password = password.concat(arr[i])
      console.log(password);
    }
  }
//
  function draftPassword(arr) {
    for (var i = 0; i < passwordLength; i++){
      var randomCharacterArray = Math.floor(Math.random() * passwordLength.length);
      console.log(randomCharacterArray)
      console.log(password[randomCharacterArray])
      password.draftPassword[randomCharacterArray];
    }
    return password;
  }

//console.log(Uppercase[2]);
//console.log(Lowercase[5]);
//console.log(Numbers[8]);
//console.log(Symbols[11]);



// Write password to the #password input
function writePassword() {
  var password = generatePasswordSet();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
