// Assignment Code                                                                    //Password Generator



var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numberCharacters ="1212312441657876693243787643625412774192837812964738179"

var specialCharacters = "!@#$%^&*($%^&*$%^@#$%^!@#$%^)%^@#$&(&*($%&)%^^&";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var passwordChars = '';
  var password = '';
  var passwordLength = '';
  var Random = '';

//Requests password length input via window prompt.
var passwordLength = window.prompt("To generate password, please enter password length between 8 and 128"); 

//If user presses cancel, the functions ends immediately.
if (!passwordLength) { 
  return;
}

//Determines whether password length input number is between 8 and 128 and parses it from a string into number primitive type
if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
  console.log(passwordLength); 

//will alert user if password length chosen is not between 8 and 128  
}else { window.confirm("Error, please choose a password length between 8 and 128 and try again");
return;
}

//Request if user would like uppercase characters in password
var passwordUpperCase = window.confirm ("Would you like your password to contain uppercase characters?");

//If yes to UPPERCASE 
if (passwordUpperCase) {
  passwordChars = passwordChars.concat(upperCaseCharacters, lowerCaseCharacters)
  console.log(passwordChars);

// if no to UPPERCASE
}else {
  passwordChars = passwordChars.concat(lowerCaseCharacters)
  console.log(passwordChars);
}

//Requests if user would like NUMBERS
var passwordNumber= window.confirm("Would you like your password to contain numbers") 

//If yes to NUMBERS
if (passwordNumber) {
  passwordChars = passwordChars.concat(numberCharacters)
  console.log(passwordChars);

//if no to NUMBERS
}else {
  console.log(passwordChars);
}

//Request if user would like SPECIAL CHARACTERS
var passwordSpecial = window.confirm ("Would you like your password to contain special characters?");

//If yes to SPECIAL CHARACTERS 
if (passwordSpecial) {
  passwordChars = passwordChars.concat(specialCharacters)
console.log(passwordChars);


//If no to SPECIAL CHARACTERS
}else {
console.log(passwordChars);

}

console.log (passwordChars);

for (i = 0; i<passwordLength; i++) {
 var Random = Math.floor(Math.random() * passwordChars.length)
 password = password.concat(passwordChars[Random]);
}

console.log(password);



// loop through 0 to password lenght
// generate a random number using Math.floor(Math.random() * passwordChars.length)
// use random number to pick a character from passwordChars
// concat the random character onto password

return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// -------------------------------------------------

