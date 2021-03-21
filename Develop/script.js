// Assignment Code                                                                    //Password Generator



var lowerCaseCHharacters = "abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var specialCharacters = "!@#$%^&*()";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Requests password length input via window prompt.
var passwordLength = window.prompt("To generate password, please enter password length between 8 and 128"); 

//if user presses cancel, the functions ends immediately.
if (!passwordLength) { 
  return;
}

//Determines whether password length input number is between 8 and 128
if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
  console.log(passwordLength); 

//will alert user if password length chosen is not between 8 and 128  
}else { window.confirm("Error, please choose a password length between 8 and 128 and try again");


}


// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











// -------------------------------------------------

  // var length = window.prompt("How long do you want the password to be? Please input number between 8 and 128");//getting password length from the user
 
  // if (parseInt(length) >= 8 && parseInt(length) <= 128)//converting user length input into number value

  // console.log(length);

  // // else window.confirm("Password can only be between 8 and 128, please enter a valid number and try again."); //if user enter a number that not between 8 and 128

  // // window.confirm("Do you want uppercase characters?"); //confirming Upercase characters from user
  
  // // if (upperCase = true);

  // // console.log(upperCase);

