2// Assignment code here
var passwordText = document.querySelector('#password');
var buton = document. querySelector('#generate');

var characters = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
var passwordLength = 8;
var passwordValue = '';

// Get references to the #generate element
var generate = document.querySelector("#generate");

// Write password to the #password input
let generatePassword = () => {
  passwordValue = '';

  for (let i =0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1);
 
}

  passwordText.value = passwordValue;

}

// Add event listener to generate button
generate.addEventListener("click", generatePassword);
