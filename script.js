
 const lowerCase = "abcdefghijklmnopqrstuvwxyz"
 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const numList = '1234567890'
 const specialList='!@#$%^&*()_+|}{":?><,./;]['

document.getElementById('generate').addEventListener('click', () => {

// web inputs

let numEdit = confirm('Would you like to add numbers? OK or CANCEL?')

let lowerList = confirm("Would you like to use Lowercase characters? OK or CANCEL?")

let upperList = confirm("Would you like to use Uppercase characters as well? OK or CANCEL?")

let specialEdit = confirm("Would you like to use special characters as well? OK or CANCEL?")


// validating web inputs

if (!lowerList &&  !upperList && !specialEdit && !numEdit) {
    alert("Refresh the page and give it another shot....");
    return;
};

// validating web choices length
let passLength = prompt("Enter desired password length between 8-128 characters long");

if (passLength <8 ||passLength >128 || isNaN(passLength)){
    alert("Please select a valid number between 8 and 128");
    return;
};

let inputChar = [];

let guarenteedInput = [];

if (lowerList) {
    inputChar = inputChar.concat(lowerCase);
    guarenteedInput.push(lowerCase[Math.floor(Math.random() * lowerCase.passLength)])
        console.log(inputChar)
};

if (upperList) {
    inputChar = inputChar.concat(upperCase);
    guarenteedInput.push(upperCase[Math.floor(Math.random() * upperCase.passLength)])
        console.log(inputChar)
};

if (numEdit) {
    inputChar = inputChar.concat(numList);
    guarenteedInput.push(numList[Math.floor(Math.random() * numList.passLength)])
        console.log(inputChar)
};

if (specialEdit) {
    inputChar = inputChar.concat(specialList);
    guarenteedInput.push(specialList[Math.floor(Math.random() * specialList.passLength)])
        console.log(inputChar)
};

})
