function calcularPrecioFinal(monto, medioPago) {
    
    if (monto < 200) {
        return monto;
    } 
    
    else if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") {
            return monto * 0.70; // 30% off
        } else if (medioPago === "D") {
            return monto * 0.80; // 20% off
        } else if (medioPago === "C") {
            return monto * 0.90; // 10% off
        } else {
            return monto;
        }
    } 
    
    else {
        return monto * 0.60;
    }
}
// Pruebas:
console.log("--- RESULTADOS DE COMPRAS ---");

// Prueba 1: Menor a 200
console.log(`Monto: $150 | Pago: E | Final: $${calcularPrecioFinal(150, "E")}`);

// Prueba 2: Entre 200 y 400 (Efectivo)
console.log(`Monto: $300 | Pago: E | Final: $${calcularPrecioFinal(300, "E")}`);

// Prueba 3: Entre 200 y 400 (Débito)
console.log(`Monto: $300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);

// Prueba 4: Entre 200 y 400 (Crédito)
console.log(`Monto: $300 | Pago: C | Final: $${calcularPrecioFinal(300, "C")}`);

// Prueba 5: Mayor a 400 (Cualquier medio)
console.log(`Monto: $500 | Pago: C | Final: $${calcularPrecioFinal(500, "C")}`);