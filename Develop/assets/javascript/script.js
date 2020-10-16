// generate button - variables to store generated values
var generateBtn = document.querySelector( '#generate' );
var lowerCaseValue;
var upperCaseValue;
var numberCaseValue;
var specCharValue;
var passCountValue;

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector( '#password' );
  passwordText.value = password;
}

//generates password critera based on user prompts
function generatePassword() {
  var passCount = prompt( "How many characters would you like your password to be (8-128)?" );
  //the final password parameters
  var passcrtiera = [];

  if ( passCountValue >= 8 && passCount <= 128 ) {
    passCountValue = parseInt( passCount );

    var upperCase = confirm( "Please click 'OK' if you would like to have UPPER CASE letters in your generated password; Otherwise click cancel to continue." );
    var lowerCase = confirm( "Please click 'OK' if you would like to have 'lower case' letters in your generated password; Otherwise click cancel to continue." );
    var specChar = confirm( "Please click 'OK' if you would like to have special characters in your generated password; Otherwise click cancel to continue." );
    var numChar = confirm( "Please click 'OK' if you would like to have numbers in your generated password; Otherwise click cancel to continue." );
    console.log( charCount, upperCase, lowerCase, specChar, numChar );
  };

  //lowercase criteria

  //uppercase criteria

  //numbercase criteria

  //specChar criteria

  //randonmly calculate passcriteria

  // Add event listener to generate button
  generateBtn.addEventListener( 'click', writePassword );
