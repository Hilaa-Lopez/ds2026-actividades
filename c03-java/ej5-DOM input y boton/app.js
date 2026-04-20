const inputAltura = document.querySelector('#altura');
const btnGenerar = document.querySelector('#btnGenerar');
const mensajeError = document.querySelector('#mensajeError');
const resultadoPre = document.querySelector('#resultado');

btnGenerar.addEventListener('click', () => {
    
    mensajeError.textContent = "";
    resultadoPre.textContent = "";

    const altura = Number(inputAltura.value);

    if (inputAltura.value === "" || altura < 1) {
        mensajeError.textContent = "Error: Por favor ingresa un número válido (1 o mayor).";
        return; 
    }

    let arbol = "";
    
    for (let i = 1; i <= altura; i++) {
        arbol += "*".repeat(i) + "\n"; 
    }

    resultadoPre.textContent = arbol;
});