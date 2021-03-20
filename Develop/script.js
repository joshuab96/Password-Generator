// Assignment Code                                                                    //Password Generator



var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword() {
  
  var length = window.prompt("How long do you want the password to be?");
 
  while (length < 8 || length > 128)

   length = window.prompt("Password has to be between 8 and 128 characters long, please enter a new length"); //getting password length from the user

    length = parseInt(length);

   var upperCase = window.confirm("Do you want uppercase characters?"); //confirming Upercase characters from user
  
  if (upperCase = true);

  console.log(upperCase);
}

  
  


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
