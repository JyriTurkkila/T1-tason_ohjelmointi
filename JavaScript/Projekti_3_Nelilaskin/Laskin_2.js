
// Inputin arvon määritys
function inputFieldDiv() { const inputField = document.getElementById('input').innerHTML; }

// Lisää merkin inputtiin
function insertNumDiv() { const insertNum = num => inputField.textContent += num; }

// Suorittaa laskennan
function equalToDiv() { equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false; }

// Poistaa yhden merkin inputista
function eraseNumDiv() { const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1); }

// Tyhjentää inputin
function clearInputDiv() { const clearInput = () => inputField.textContent = ''; }
