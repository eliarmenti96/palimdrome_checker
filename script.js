const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert(`Inserisci una parola valida`)
    } else {
        let inputValue = textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedValue = inputValue.split("").reverse().join("");

        if (inputValue === reversedValue) {
            alert(`${inputValue} è palindroma!`)
        } else {
            alert(`${inputValue} non è palindroma!`)
        }
    }
});
