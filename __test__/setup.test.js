// despues de cada prueba

const { TestScheduler } = require("jest")

afterEach( () => {
    console.log("despues de cada prueba")
})

afterAll( () => {
    console.log("despues de TODAS las pruebas")
})

beforeAll( () => {
    console.log("antes de TODAS las pruebas")
})

beforeEach( () => {
    console.log("antes de CADA prueba")
})

describe("preparar antes de ejecutar", () => {
    test("Es verdadero", () => {
        expect(true).toBeTruthy()
    })
})