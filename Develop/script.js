// Assignment Code                                                                    //Password Generator



var lowerCaseCHharacters = "abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var specialCharacters = "!@#$%^&*()";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Requests password length input via window prompt.
var passwordLength = window.prompt("To generate password, please enter password length between 8 and 128"); 

//If user presses cancel, the functions ends immediately.
if (!passwordLength) { 
  return;
}

//Determines whether password length input number is between 8 and 128
if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
  console.log(passwordLength); 

//will alert user if password length chosen is not between 8 and 128  
}else { window.confirm("Error, please choose a password length between 8 and 128 and try again");
return;
}

//Request if user would like uppercase characters in password
var passwordUpperCase = window.confirm ("Would you like your password to contain uppercase characters?");

//If user does not request uppercase 
if (!passwordUpperCase) {
console.log(passwordUpperCase);

//If user request uppercase
}else {
  console.log(passwordUpperCase);
}

//Request if user would like special characters
var passwordSpecial = window.confirm ("Would you like your password to contain special characters?");

//If user requested no special characters
if (!passwordSpecial) {
console.log(passwordSpecial);

//If user did request for special characters
}else {
console.log(passwordSpecial);
}
}





// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











// -------------------------------------------------

