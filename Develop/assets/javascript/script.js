//if, else if boolean statements to determine which declared variable

//function to randomly generate based on 

// generate button - variables to store generated values
var generateBtn = document.querySelector( '#generate' );
var lowerCaseValue;
var upperCaseValue;
var numberCaseValue;
var specCharValue;
var passLengthValue;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector( '#password' );

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword );

//variable declaration and user prompts
var createPassword = function () {
  var charCount = prompt( "How many characters would you like your password to be?" );
  var upperCase = confirm( "Please click 'OK' if you would like to have UPPER CASE letters in your generated password; Otherwise click cancel to continue." );
  var lowerCase = confirm( "Please click 'OK' if you would like to have 'lower case' letters in your generated password; Otherwise click cancel to continue." );
  var specChar = confirm( "Please click 'OK' if you would like to have special characters in your generated password; Otherwise click cancel to continue." );
  var numChar = confirm( "Please click 'OK' if you would like to have numbers in your generated password; Otherwise click cancel to continue." )
  console.log( charCount, upperCase, lowerCase, specChar, numChar );
};