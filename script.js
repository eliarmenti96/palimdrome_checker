const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultContainer = document.getElementById('result');

resultContainer.style.display = "block";

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        /* alert(`Inserisci una parola valida`) */
        resultContainer.innerHTML = `Inserisci una parola valida`;
        resultContainer.style.color = "red";
    } else {
        let inputValue = textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedValue = inputValue.split("").reverse().join("");

        if (inputValue === reversedValue) {
            /* alert(`${inputValue} è palindroma!`) */
            resultContainer.innerHTML = `${inputValue} è palindroma!`;
            resultContainer.style.color = "green";
        } else {
            /* alert(`${inputValue} non è palindroma!`) */
            resultContainer.innerHTML = `${inputValue} non è palindroma...`
            resultContainer.style.color = "black";
        }
    } 
});
