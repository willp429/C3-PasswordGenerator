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
  passCount = parseInt( prompt( "How many characters would you like your password to be (8-128)?" ) );
  //the final password parameters
  var passcrtiera = [];

  //if user entered pass count is not 8-128
  if ( !passCount ) {
    alert( "Please enter a valid number between 8-128 if you would like to continue." );
    //return generatePassword();
  }
  else if ( passCount < 8 || passCount > 128 ) {
    alert( "Please enter a valid number between 8-128." );
    return generatePassword();
  }
  else {

    upperCase = confirm( "Please click 'OK' if you want UPPER CASE letters in your generated password; Otherwise click cancel to continue." );
    lowerCase = confirm( "Please click 'OK' if you want '<em>lower case</em>' letters in your generated password; Otherwise click cancel to continue." );
    specChar = confirm( "Please click 'OK' if you want special characters in your generated password; Otherwise click cancel to continue." );
    numChar = confirm( "Please click 'OK' if you want numbers in your generated password; Otherwise click cancel to continue." );
    console.log( charCount, upperCase, lowerCase, specChar, numChar );
  }
}
//uppercase criteria

//lowercase criteria

//numbercase criteria

//specChar criteria

//randonmly calculate passcriteria

var upperCase;
var lowerCase;
var specChar;
var numChar;
var passCount;
// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword );
