const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");
const span = document.getElementById("span");


function generatePassword() {


    

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
    let password = "";
    for(let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random * characters.length);
        password += characters[randomIndex];
    }

    inputBox.value = password;




}



btn.addEventListener("click", generatePassword);



function copyButton() {

    span.textContent = ``;



}


copyBtn.addEventListener("click", copyButton);