function clasificarNota(nota) {
    if (nota < 4) {
        return "Desaprobado";
    } else if (nota >= 4 && nota < 8) { 
        return "Aprobado";
    } else { 
        return "Promocionado";
    }
}

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1: 
            return "Lunes";
        case 2: 
            return "Martes";
        case 3: 
            return "Miércoles";
        case 4: 
            return "Jueves";
        case 5: 
            return "Viernes";
        case 6: 
            return "Sábado (fin de semana)";
        case 7: 
            return "Domingo (fin de semana)";
        default: 
            return "Día inválido";
    }
}

//Pruebas en consola
console.log("--- PRUEBAS DE NOTAS ---");
console.log("Nota 2:", clasificarNota(2));   // Desaprobado
console.log("Nota 6:", clasificarNota(6));   // Aprobado
console.log("Nota 9:", clasificarNota(9));   // Promocionado

console.log("--- PRUEBAS DE DÍAS ---");
console.log("Día 1:", diaDeLaSemana(1));     // Lunes
console.log("Día 6:", diaDeLaSemana(6));     // Sábado (fin de semana)
console.log("Día 10:", diaDeLaSemana(10));   // Día inválido