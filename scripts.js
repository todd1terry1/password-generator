const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const upperCaseElement = document.getElementById
('uppercase')
const wholeNumbersElement = document.getElementById
('wholeNumbers')
const symbolsElement = document.getElementById
('symbols')
const form = document.getElementById('passGen')
const passwordDisplay = document.getElementById('passwordDisplay')
const button = document.querySelector('#generate')

const upperCaseCodes = arrayConstiableMovement(65, 90)
const lowerCaseCodes = arrayConstiableMovement(97, 122)
const wholeNumbersCodes = arrayConstiableMovement(48, 57)
const symbolsCodes = arrayConstiableMovement(33, 47).concat(
    arrayConstiableMovement(58, 64)
  ).concat(
    arrayConstiableMovement(91, 96)
  ).concat(
    arrayConstiableMovement(123, 126)
  )

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
 e.preventDefault()
  const characterAmount = characterAmountNumber.value
  //const upperCase = upperCaseElement.checked
  const wholeNumbers = wholeNumbersElement.checked
  const symbols = symbolsElement.checked
  const password = generatePassword(characterAmount, upperCase, wholeNumbers, symbols) 
  passwordDisplay.innerText = password
})

var generate = document.querySelector("#generate");

function generatePassword(characterAmount, upperCase, wholeNumbers,
        symbols) {  
        let charCodes = lowerCaseCodes
        if (upperCase) charCodes = charCodes.concat(upperCaseCodes)
        if (symbols) charCodes = charCodes.concat(symbolsCodes)
        if (wholeNumbers) charCodes = charCodes.concat(wholeNumbersCodes)
       
        const passwordCharacters = []
        for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))   
      }
       return passwordCharacters.join('')
      }

function arrayConstiableMovement(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
   }
   

// Add event listener to generate button
generate.addEventListener("click", generatePassword);







