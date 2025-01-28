const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultContainer = document.getElementById('result');
const clearBtn = document.getElementById('clear-btn');

clearBtn.style.display = "none";

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        /* alert(`Inserisci una parola valida`) */
        resultContainer.innerHTML = `Inserisci una parola valida`;
        resultContainer.style.color = "red";
        checkBtn.style.display = "none";
        resultContainer.style.display = "block";
        clearBtn.style.display = "block";
    } else {
        let inputValue = textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedValue = inputValue.split("").reverse().join("");

        if (inputValue === reversedValue) {
            /* alert(`${inputValue} è palindroma!`) */
            resultContainer.innerHTML = `${inputValue} è palindroma!`;
            resultContainer.style.color = "green";
            checkBtn.style.display = "none";
            resultContainer.style.display = "block";
            clearBtn.style.display = "block";
        } else {
            /* alert(`${inputValue} non è palindroma!`) */
            resultContainer.innerHTML = `${inputValue} non è palindroma...`
            resultContainer.style.color = "black";
            resultContainer.style.display = "block";
            checkBtn.style.display = "none";
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
})

/* checkBtn.style.display = "block"; */