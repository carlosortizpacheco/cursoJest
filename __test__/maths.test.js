import { sumar, multiplicar, restar, dividir } from "../maths"
import { TestScheduler } from "jest"


describe("Calculos matematicos", () =>{
    test("Prueba de sumas",() =>{
        expect(sumar(1,1)).toBe(2)
    })
    test("Prueba de multiplicación",()=>{
        expect(multiplicar(2,2)).toBe(4)
    })
    test("Prueba de resta",()=>{
        expect(restar(1,1)).toBe(0)
    })
    test("Prueba de dividir",()=>{
        expect(dividir(2,2)).toBe(1)
    })
})