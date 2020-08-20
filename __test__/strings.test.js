const { TestScheduler } = require("jest")

describe("Comprobar cadenas de texto", () => {
    
    const text = 'un bonito texto'

    test('debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/)
    })
    test("No contiene el siguiente texto", () => {
        expect(text).not.toMatch(/Bonito/)
    })
    test("Comprobar el tamaño de un texto", () => {
        expect(text).toHaveLength(15)
    })
})