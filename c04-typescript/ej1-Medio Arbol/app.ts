function generarAsteriscos(n: number): string {
    let arbol: string = "";

    for (let i = 1; i <= n; i++) {
        arbol += "*".repeat(i) + "\n";
    }
    return arbol;
}

const inputAltura = document.getElementById('altura') as HTMLInputElement;
const btnGenerar = document.getElementById('btn-generar') as HTMLButtonElement;
const preResultado = document.getElementById('resultado') as  HTMLPreElement;

btnGenerar.addEventListener('click', () => {
    const altura: number = parseInt(inputAltura.value);

    if (isNaN(altura) || altura < 1) {
        preResultado.textContent = "Error: Por favor ingresa un numero mayor a 0";
        return;
    }

    preResultado.textContent = generarAsteriscos(altura);
})
