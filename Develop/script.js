// Assignment Code
var generateBtn = document.querySelector("#generate");



//Arrays with characters to be included 
const keys = { 
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbol: "!@#$%^&*()_+~\`}{[]:;?><,./-="
}

//function to generate a password
function generatePassword () {
  passwordcharacters = "";
  
  //password length
  var length = window.prompt("Enter the length of your password between 8-128 characters.");

  //prompts for character inclusions, if statement to add or not based on selection
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
    if (lowerCase) {
      passwordcharacters += keys.lowerCase;
    };

    var upperCase = window.confirm("Would you like to use uppercase letters?");
    if (upperCase) {
      passwordcharacters += keys.upperCase;
    };

    var symbol = window.confirm("Would you like to use symbols?");
    if (symbol) {
      passwordcharacters += keys.symbol;
    };

    var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
      passwordcharacters += keys.numbers;
    };

    //password generation to randomise and consider length specified above by user
    var password = "";
    for (let i=0; i < length; i++) {
      password += passwordcharacters[Math.floor(Math.random() * passwordcharacters.length)]
    }
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
