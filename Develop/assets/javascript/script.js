// generate button - variables to store generated values
var generateBtn = document.querySelector( '#generate' );
var upperCaseValue;
var lowerCaseValue;
var numberCaseValue;
var specCharValue;

// Write password to the #password input

//generates password critera based on user prompts
pwd.reset();
function writePassword() {
  passCount = parseInt( prompt( "How many characters would you like your password to be (8-128)?" ) );
  //the final password parameters
  newPassword = [];

  //if user entered pass count is not 8-128
  if ( !passCount ) {
    alert( "Please enter a valid number between 8-128 if you would like to continue." );
    //return generatePassword();
  }
  else if ( passCount < 8 || passCount > 128 ) {
    alert( "Please enter a valid number between 8-128." );
    return writePassword();
  }
  else {
    upperCase = confirm( "Please click 'OK' if you want UPPERCASE letters in your generated password; Otherwise click cancel to continue." );
    lowerCase = confirm( "Please click 'OK' if you want lowercase letters in your generated password; Otherwise click cancel to continue." );
    specChar = confirm( "Please click 'OK' if you want $pec!al ch@r@cter$ in your generated password; Otherwise click cancel to continue." );
    numChar = confirm( "Please click 'OK' if you want numb3rs in your generated password; Otherwise click cancel to continue." );
    console.log( charCount, upperCase, lowerCase, specChar, numChar );
  };

  if ( !upperCase && !lowerCase && !numChar && !specChar );
  passCriteria = alert( "Please select at least one criteria." )
  return writePassword(); //TODO: verify workflow - how to handle loop of not entering any criteria
}
//newPassword declaration

function generatePassword() {
  if ( pwd.upperCase === true && !pwd.lowerCase && !pwd.numChar && !pwd.) {

  }


}
var password = generatePassword();
var passwordText = document.querySelector( '#password' );
passwordText.value = password;

//randonmly calculate passcriteria
var passCount;
var pwd = {
  upperCase = true,
  lowerCase = true,
  specChar = true,
  numChar = true,
  reset: function () {
    this.upperCase = true;
    this.lowerCase = true;
    this.specChar = true;
    this.numbers = true;
  }
}

//character variable declaration
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//array to outline password combination outcomes
var options = {
  all: specials + charactersLower + charactersUpper + numbers,
  slu: specials + charactersLower + charactersUpper,
  sln: specials + charactersLower + numbers,
  sun: specials + charactersUpper + numbers,
  lun: charactersLower + charactersUpper + numbers,
  sl: specials + charactersLower,
  su: specials + charactersUpper,
  sn: specials + numbers,
  lu: charactersLower + charactersUpper,
  ln: charactersLower + numbers,
  un: charactersUpper + numbers,
}

// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword );
