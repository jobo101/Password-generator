// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Function to prompt user for password options
// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  var confirmSpecialChar= confirm("Click OK if you would like special characters in your password.");
  var confirmNumericChar = confirm("Click OK if you would like numbers in your password.");
  var confirmLowerCased = confirm("Click OK if you would like lower case letters in your password.");
  var confimUpperCased = confirm("Click OK if you would like upper case letters in your password.");
  var passwordLength = prompt("Choose the length of password - between 10 and 64 characters.");
  if (passwordLength >=10 && passwordLength <= 64) {
    alert(`Your password will contain ${passwordLength} characters.`)
  }
  //function that checks if numbers are between 10 and 64
  else if  (passwordLength < 10 || passwordLength > 64) {
    alert("Your password is not the correct length. Enter the length again!");
    var passwordLength = prompt("Choose a password between 10 and 64.");
    
  //Repeat return statement to confirm the chosen length
   alert(`Your password will contain ${passwordLength} characters.`)
  }
// to make sure that at least one of the criteria have been picked

else if  (lowercaseLetters === false  && upperCasedCharacters === false && numbers === false && specialCharacters === false) {
  alert("You must enter at least one of the character types!");
  var confirmSpecialChar= confirm("Click OK if you would like special characters in your password.");
  var confirmNumericChar = confirm("Click OK if you would like numbers in your password.");
  var confirmLowerCased = confirm("Click OK if you would like lower case letters in your password.");
  var confimUpperCased = confirm("Click OK if you would like upper case letters in your password.");
}

// Function to generate password with user input

function generatePassword() {
var passwordCharacters;

  if (confirmLowerCased === true) {
    passwordCharacters += lowerCasedCharacters;    
  }
  if (confimUpperCased === true) {
  passwordCharacters += upperCasedCharacters
}
  if (confirmSpecialChar === true) {
  passwordCharacters += specialCharacters;
}
if (confirmNumericChar === true) {
  passwordCharacters += numericCharacters;
}
}
// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < passwordLength; i++) {
passwordText += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
 
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

}

writePassword();

