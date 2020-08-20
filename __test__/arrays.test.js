import { arrayColors, arrayFruits } from "../arrays"

describe("comprobaremos que existe un elemento", () => {
    test("contiene una banana", () => {
        expect(arrayFruits()).toContain('banana');
    });
    test("NO contiene platano", () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test("comprobar tamaño de un arreglo", () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test("comprobaremos que existe un color", () => {
        expect(arrayColors()).toContain("rojo");
    });
})

