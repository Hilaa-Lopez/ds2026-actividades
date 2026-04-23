"use strict";
function generarAsteriscos(n) {
    let arbol = "";
    for (let i = 1; i <= n; i++) {
        arbol += "*".repeat(i) + "\n";
    }
    return arbol;
}
const inputAltura = document.getElementById('altura');
const btnGenerar = document.getElementById('btn-generar');
const preResultado = document.getElementById('resultado');
btnGenerar.addEventListener('click', () => {
    const altura = parseInt(inputAltura.value);
    if (isNaN(altura) || altura < 1) {
        preResultado.textContent = "Error: Por favor ingresa un numero mayor a 0";
        return;
    }
    preResultado.textContent = generarAsteriscos(altura);
});
