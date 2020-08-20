import { isTrue, isFalse, isNull, isUndefined } from "../true"
import { TestScheduler } from "jest"

describe("Probar resultados nulos", () => {
    test("null", () => {
        expect(isNull()).toBeNull();
    });
})
describe("Probar resultados verdaderos", () => {
    test("VERDADERO", () => {
        expect(isTrue()).toBeTruthy();
    });
})
describe("Probar resultados falsos", () => {
    test("FALSO", () => {
        expect(isFalse()).toBeFalsy()
    })
})
describe("Resultados indefinidos", () => {
    test("INDEFINIDO", () => {
        expect(isUndefined()).toBeUndefined()
    })
})

describe("Probar resultados no verdaders", () => {
    test("FALSO O VERDADERO", () => {
        expect(isFalse()).not.toBeTruthy()
    })
})