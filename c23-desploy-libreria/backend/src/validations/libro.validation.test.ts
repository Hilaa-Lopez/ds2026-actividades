import { describe, it, expect } from "vitest";
import { libroCreateSchema } from "./libro.validation";

describe("libroCreateSchema", () => {
    it("rechaza precio negativo", () => {
    const libroValido = { titulo: "Rayuela", precio: -5, imagen: "x", autorId: 1 };
    const resultado = libroCreateSchema.safeParse(libroValido);
    expect(resultado.success).toBe(false);
    });
});