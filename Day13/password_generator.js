const PwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");
//const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
//const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
//const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";
function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}
function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}
function getSymbol() {
return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
const len = lenEl.value;
let password = "";
for (let i = 0; i < len; i++) {
const x = generateX();
password += x;
}
console.log("..." + password);

PwEl.innerText = password;
}
function generateX() {
const arr = [];
if (upperEl.checked) {
arr.push(getUppercase());
console.log("upper:" + arr);
}
if (lowerEl.checked) {
arr.push(getLowercase());
console.log("lower:" + arr);
}
if (numberEl.checked) {
arr.push(getNumber());
console.log("number:" + arr);
}
if (symbolEl.checked) {
arr.push(getSymbol());
console.log("symbol:" + arr);
}
if (arr.length === 0) return "";
let finallarr = arr[Math.floor(Math.random() * arr.length)];
console.log("finallarr" + finallarr);
return finallarr;



}


generateEl.addEventListener("click", generatePassword);


copyEl.addEventListener("click", () => {
const textarea = document.createElement("textarea");
const password = PwEl.innerText;
if (!password) {
return;
}
textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();
});