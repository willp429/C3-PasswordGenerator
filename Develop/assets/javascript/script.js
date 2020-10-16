//variable declaration and user prompts
var createPassword = function () {
  var charCount = prompt( "How many characters would you like your password to be?" );
  var upperCase = confirm( "Please click 'OK' if you would like to have UPPER 'CASE letters' in your generated password; Otherwise click cancel." );
  var lowerCase = confirm( "Please click 'OK' if you would like to have 'lower case' letters in your generated password; Otherwise click cancel." );
  var specChar = confirm( "Please click 'OK' if you would like to have special characters in your generated password; Otherwise click cancel." );
  console.log( charCount, upperCase, lowerCase, specChar );
};

// Assignment Code
var generateBtn = document.querySelector( '#generate' );

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector( '#password' );

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword );
