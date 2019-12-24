let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let punctuation = '!@£$%^&*()_+~`><,./?";:';

const lowercaseInput = document.getElementById("lowercase");
const uppercaseInput = document.getElementById("uppercase");
const punctuationInput = document.getElementById("punctuation");
const numbersInput = document.getElementById("numbers");
const lengthInput = document.getElementById("passwordlength");
let passwordlength;

// create function for our generator
function passwordGenerate() {
  // possible password values
  let password = "";
  let values = "";
  if (lowercaseInput.checked) {
    values += lowercase;
  }
  if (uppercaseInput.checked) {
    values += uppercase;
  }
  if (punctuationInput.checked) {
    values += punctuation;
  }
  if (numbersInput.checked) {
    values += numbers;
  }
  passwordlength = Number(lengthInput.value);
  //   create a loop to choose a password character
  for (let i = 0; i < passwordlength; i++) {
    password += values.charAt(Math.floor(Math.random() * values.length));
  }
  if (password === "") {
    alert("Please select an option before generating");
  } else {
    document.getElementById("password").innerHTML = password;
  }
  //    add password to textarea
  document.getElementById("password").value = password;
}

//function to copy password to clipboard

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
