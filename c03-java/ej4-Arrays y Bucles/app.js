const numeros = [15, 42, 8, 100, 23, 4, 16, 50];

let sumaTotal = 0;
let numeroMayor = numeros[0]; 
let numeroMenor = numeros[0]; 

for (let numero of numeros) {
    
    sumaTotal += numero;
    
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
    
    if (numero < numeroMenor) {
        numeroMenor = numero;
    }
}
 
const promedio = sumaTotal / numeros.length;

console.log("--- RESULTADOS DEL ARRAY ---");
console.log(`Array original: [${numeros}]`);
console.log(`Suma total: ${sumaTotal}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${numeroMayor}`);
console.log(`Número menor: ${numeroMenor}`);

function generarAsteriscos(n) {
    let asteriscos = ""; // Arrancamos con un texto vacío
    
    for (let i = 0; i < n; i++) {
        asteriscos += "*";
    }
    
    return asteriscos;
}

// Probar la función
console.log("--- PRUEBA ---");
console.log(`5 asteriscos: ${generarAsteriscos(5)}`);
console.log(`8 asteriscos: ${generarAsteriscos(8)}`);
console.log(`3 asteriscos: ${generarAsteriscos(3)}`);