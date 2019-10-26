// generate random password

let charSelection = '';

let sliderValue = document.querySelector('#slider').value;

let lowerCheck = document.querySelector('#lowerCaseCheck');
let upperCheck = document.querySelector('#upperCaseCheck');
let specialCheck = document.querySelector('#specialChar');
let numCheck = document.querySelector('#numbers');

let genButton = document.querySelector('#genBtn');
genButton.addEventListener('click', function() {
  generatePassword();
});

let characters = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  specialChar: '!@#$%^&*()_+',
  fullChar:
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
};

function secretGenerate(length) {
  let result = '';
  let charactersLength = charSelection.length;

  for (let i = 0; i < length; i++) {
    result += charSelection.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }
  return result;
}

function generatePassword() {
  if (
    lowerCheck.checked === false &&
    upperCheck.checked === false &&
    specialCheck.checked === false &&
    numCheck.checked === false
  ) {
    alert('Please select one check box');
  } else {
    conditions();
  }
}

function conditions() {
  if (
    lowerCheck.checked &&
    upperCheck.checked &&
    specialCheck.checked &&
    numbers.checked
  ) {
    charSelection =
      characters.lowerCase +
      characters.upperCase +
      characters.specialChar +
      characters.numbers;
  } else if (
    lowerCheck.checked &&
    upperCheck.checked &&
    specialCheck.checked &&
    numbers.checked === false
  ) {
    charSelection =
      characters.lowerCase + characters.upperCase + characters.specialChar;
  } else if (
    lowerCheck.checked &&
    upperCheck.checked &&
    specialCheck.checked === false &&
    numbers.checked === false
  ) {
    charSelection = characters.lowerCase + characters.upperCase;
  } else if (
    lowerCheck.checked &&
    upperCheck.checked === false &&
    specialCheck.checked === false &&
    numbers.checked === false
  ) {
    charSelection = characters.lowerCase;
  } else if (
    lowerCheck.checked === false &&
    upperCheck.checked &&
    specialCheck.checked === false &&
    numbers.checked === false
  ) {
    charSelection = characters.upperCase;
  } else if (
    lowerCheck.checked === false &&
    upperCheck.checked &&
    specialCheck.checked &&
    numbers.checked === false
  ) {
    charSelection = characters.upperCase + characters.specialChar;
  } else if (
    lowerCheck.checked === false &&
    upperCheck.checked &&
    specialCheck.checked &&
    numbers.checked
  ) {
    charSelection =
      characters.upperCase + characters.specialChar + characters.numbers;
  } else if (
    lowerCheck.checked === false &&
    upperCheck.checked === false &&
    specialCheck.checked &&
    numbers.checked
  ) {
    charSelection = characters.specialChar + characters.numbers;
  } else if (
    lowerCheck.checked === false &&
    upperCheck.checked === false &&
    specialCheck.checked === false &&
    numbers.checked
  ) {
    charSelection = characters.numbers;
  } else {
    alert('fuck me!');
  }
  secretGenerate(sliderValue);
}

function sliderChange(value) {
  sliderValue = value;
}

// let display = document.querySelector('#display');

// function renderResult() {
//   return display.setAttribute(value, result);
// }
