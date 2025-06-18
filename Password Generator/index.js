const password = document.getElementById('password');
const button = document.getElementById('btn');
const img = document.querySelector('#image')
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~!@#$%^&*()_+{}[]`,./<>?:\|';
const allCases = upperCase + lowerCase + numbers + symbols;
console.log(allCases);

const passwordLength = 10;

function setPassword() {
    let passwords = '';
    passwords += upperCase[Math.floor(Math.random()*upperCase.length)];
    passwords += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    passwords += numbers[Math.floor(Math.random()*numbers.length)];
    passwords += symbols[Math.floor(Math.random()*symbols.length)];
    // console.log(passwords);
    while(passwordLength > passwords.length){
        passwords += allCases[Math.floor(Math.random()*allCases.length)];
        console.log(passwords);
        
    }
    password.value = passwords;
}

button.addEventListener('click', setPassword);

function copyPassword(){
    password.select();
    document.execCommand('copy');
}
img.addEventListener('click', copyPassword)