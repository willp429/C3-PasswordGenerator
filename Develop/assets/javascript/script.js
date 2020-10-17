//generates password critera based on user prompts
function writePassword() {
  pwd.reset();
  charCount = parseInt( prompt( "How many characters would you like your password to be (8-128)?" ) );

  //if user entered pass count is not 8-128
  if ( !charCount ) {
    alert( "Please enter a valid number between 8-128 if you would like to continue." );
  }
  else if ( charCount < 8 || charCount > 128 ) {
    alert( "Please enter a valid number between 8-128." );
    return writePassword();
  }
  else {
    pwd.upperCase = confirm( "Please click 'OK' if you want UPPERCASE letters in your generated password; Otherwise click cancel to continue." );
    pwd.lowerCase = confirm( "Please click 'OK' if you want lowercase letters in your generated password; Otherwise click cancel to continue." );
    pwd.specChar = confirm( "Please click 'OK' if you want $pec!al ch@r@cter$ in your generated password; Otherwise click cancel to continue." );
    pwd.numChar = confirm( "Please click 'OK' if you want numb3rs in your generated password; Otherwise click cancel to continue." );
    console.log( charCount, pwd.upperCase, pwd.lowerCase, pwd.specChar, pwd.numChar );
  }

  if ( !pwd.upperCase && !pwd.lowerCase && !pwd.numChar && !pwd.specChar ) {
    alert( "Please select at least one criteria." )
    return writePassword();
  }

  function generatePassword() {
    if ( pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true ) {
      newPassword - options.all;
      console.log( options.all );
    }
    else if ( pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true ) {
      newPassword - options.slu;
      console.log( options.slu );
    }
    else if ( pwd.specChar === true && pwd.lowerCase === true && pwd.numbers === true ) {
      newPassword - options.sln;
      console.log( options.sln );
    }
    else if ( pwd.specChar === true && pwd.upperCase === true && pwd.numChar === true ) {
      newPassword - options.sun;
      console.log( options.sun );
    }
    else if ( pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true ) {
      newPassword - options.lun;
      console.log( options.lun );
    }
    else if ( pwd.specChar === true && pwd.lowerCase === true ) {
      newPassword - options.sl;
      console.log( options.sl );
    }
    else if ( pwd.specChar === true && pwd.upperCase === true ) {
      newPassword - options.su;
      console.log( options.su );
    }
    else if ( pwd.specChar === true && pwd.numChar === true ) {
      newPassword - options.sn;
      console.log( options.sn );
    }
    else if ( pwd.lowerCase === true && pwd.upperCase === true ) {
      newPassword - options.lu;
      console.log( options.lu );
    }
    else if ( pwd.lowerCase === true && pwd.numChar === true ) {
      newPassword - options.ln;
      console.log( options.ln );
    }
    else if ( pwd.upperCase === true && pwd.numChar === true ) {
      newPassword - options.un;
      console.log( options.un );
    }
    else if ( pwd.specChar === true && pwd.lowerCase === true && pwd.upperCase === true && pwd.numChar === true ) {
      newPassword - options.lu;
      console.log( options.lu );
    }
    else if ( pwd.specChar === true ) {
      newPassword - specials;
      console.log( specials );
    }
    else if ( pwd.lowerCase === true ) {
      newPassword - charactersLower;
      console.log( charactersLower );
    }
    else if ( pwd.upperCase === true ) {
      newPassword - charactersUpper;
      console.log( charactersUpper );
    }
    else if ( pwd.specChar === true ) {
      newPassword - numbers;
      console.log( numbers );
    }
    var password = generatePassword();
    //the final password parameters
    newPassword = [];
    var passwordText = document.querySelector( '#password' );
    passwordText.value = password;
  }
}

// generate button - variables to store generated values
var generateBtn = document.querySelector( '#generate' );

//randonmly calculate passcriteria
var charCount;
var pwd = {
  upperCase: true,
  lowerCase: true,
  specChar: true,
  numChar: true,
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