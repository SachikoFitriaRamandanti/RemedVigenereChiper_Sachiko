let keyMatrix = [];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateKeyMatrix(key) {
    // Validasi kunci untuk memastikan hanya berisi karakter alfabet
    if (!/^[A-Za-z]+$/.test(key)) {
        alert("Key should only contain alphabetic characters.");
        return;
    }

    key = key.toUpperCase();
    keyMatrix = [];

    for (let i = 0; i < key.length; i++) {
        const row = [];
        for (let j = 0; j < 26; j++) {
            const charIndex = (j + key.charCodeAt(i) - 65) % 26;
            row.push(alphabet.charAt(charIndex));
        }
        keyMatrix.push(row);
    }
}

function encrypt() {
    const key = document.getElementById("key").value.toUpperCase();
    let inputText = document.getElementById("inputText").value.toUpperCase().replace(/[^A-Z]/g, "");

    // Validate input text
    if (!/^[A-Z]+$/.test(inputText)) {
        alert("Input text should only contain alphabetic characters.");
        return;
    }

    const keyWarning = generateKeyMatrix(key);

    if (keyWarning) {
        alert(keyWarning);
        return;
    }

    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        const row = keyMatrix[i % key.length];
        const rowIndex = alphabet.indexOf(inputText[i]);
        outputText += row[rowIndex];
    }

    document.getElementById("outputText").value = outputText;
}

function decrypt() {
    const key = document.getElementById("key").value.toUpperCase();
    let inputText = document.getElementById("inputText").value.toUpperCase().replace(/[^A-Z]/g, "");

    // Validate input text
    if (!/^[A-Z]+$/.test(inputText)) {
        alert("Input text should only contain alphabetic characters.");
        return;
    }

    const keyWarning = generateKeyMatrix(key);

    if (keyWarning) {
        alert(keyWarning);
        return;
    }

    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        const row = keyMatrix[i % key.length];
        const rowIndex = row.indexOf(inputText[i]);
        outputText += alphabet.charAt(rowIndex);
    }

    document.getElementById("outputText").value = outputText;
}
