// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function UserPassword() {
  window.prompt("How many characters long would you like you password to be? must be between 8 and 128, please input number") 
    
    if (UserPassword < 8 && UserPassword > 128 )
    
    window.prompt("Must only be between 8 and 128 characters long, please try again.");
    
    else if (UserPassword > 8 && UserPassword < 128 )
    
    window.prompt("joidjewijdio ");

  };

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", UserPassword); {
  
}
