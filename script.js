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

  // initiate variables used to confirm inputs

  var confirmLength = " ";
  var confirmSpecialCharacter;
  var confirmNumericCharacter;
  var confirmUpperCased;
  var confirmLowerCased;
  
 // Function to prompt user for password options
  function getPasswordOptions() {
  var confirmLength = (prompt("Enter the length of your password, must be between 10 and 64"));
  }
  // If answer is outside the criteria
  while (confirmLength <= 9 || confirmLength >= 65) { 
    alert("Password needs to be between 10 and 64 characters only! TRY AGAIN.")

    var confirmLength = (promt("How many characters in your password?"));
  }
  //Repeat return statement to confirm the chosen length
  alert("Your password will contain" + confirmLength + "characters.")
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var confirmSpecialCharacter = confirm("Click OK if you would like special characters in your password.");
    var confirmNumericCharacter = confirm("Click OK if you would like numbers in your password.");
    var confirmLowerCased = confirm("Click OK if you would like upper case letters in your password.");
    var confirmLowerCased = confirm("Ckick OK if you would like lower case letters in your password.");
  }
  // loop if answer does not match criteria
  while(confirmUpperCased === false && confirmLowerCased === false && confirmNumericCharacter === false && confirmSpecialCharacter == false) {
    alert("You must choose a least one type of character.");

    var confirmSpecialCharacter = confirm("Click OK for special characters to be included.");
    var confirmNumericCharacter = confirm("Click OK for numbers to be included.");
    var confirmLowerCased = confirm("Click OK for lower cased letters.");
    var confirmUpperCased = confirm("Click OK for upper cased letters.");

  }
  // Function to generate password with user input("")
  function generatePassword() {
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
 // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  

  