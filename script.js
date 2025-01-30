const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultContainer = document.getElementById('result');
const clearBtn = document.getElementById('clear-btn');

clearBtn.style.display = "none";

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        /* alert(`Inserisci una parola valida`) */
        resultContainer.innerHTML = `Insert a valid word!`;
        resultContainer.style.color = "red";
        resultContainer.style.paddingTop = "20px";
        checkBtn.style.display = "none";
        resultContainer.style.display = "block";
        clearBtn.style.display = "block";
    } else {
        let inputValue = textInput.value.replace(/[^a-zA-Z]/g, '');
        let reversedValue = inputValue.split("").reverse().join("");

        if (inputValue === reversedValue) {
            /* alert(`${inputValue} è palindroma!`) */
            resultContainer.innerHTML = `${inputValue} is a palindrome:)`;
            resultContainer.style.color = "green";
            checkBtn.style.display = "none";
            resultContainer.style.display = "block";
            resultContainer.style.paddingTop = "20px";
            clearBtn.style.display = "block";
        } else {
            /* alert(`${inputValue} non è palindroma!`) */
            resultContainer.innerHTML = `${inputValue} is not palindrome:(`
            resultContainer.style.color = "black";
            resultContainer.style.display = "block";
            checkBtn.style.display = "none";
            resultContainer.style.paddingTop = "20px";
            clearBtn.style.display = "block";
        }
    } 
});

clearBtn.addEventListener("click", () => {
    if (textInput !== "") {
        textInput.value = ""; 
        checkBtn.style.display = "block";
        resultContainer.style.display = "none";
        clearBtn.style.display = "none";       
    }
}) // Funzione che cliccando il tasto clear ripulisce i campi di compilamento

textInput.addEventListener("input", () => {
    textInput.value = textInput.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ""); 
}); // Impedisco che vengano inseriti numeri nel campo di compilamento



