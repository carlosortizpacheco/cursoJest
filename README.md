# cursoJest


## Pruebas unitarias

Toman todos los proyectos y lo descomponen en pequeñas partes para ver si funcionan correctamente.
comprueban casos estandares.
caracteristicas: 
- Automatizable
- Total cobertura
- Reutilizable
- Independientes
- Rápidas de crear

Ventajas
- Proporcionan trabajo ágil.
- Calidad del código.
- Detectar errores rápido.
- Facilita los cambios y favorece la integración
- Proporciona información.
- Reduce el costo.


**Jest** 
- Herramienta para hacer pruebas unitarias en cualquier proyecto que tenga JS.
- Desarrollo rápido
- Feedback instantaneo
- Generar snapshots para comparar elementos
- No requiere una configuracion compleja.
- Potente libreria para generar "mocking"
- Funciona con Typescript

## Instalación y Configuración

Para instalar Jest utilizamos el comando (--save-dev, es para guardar en modo de desarrollo):

`npm install --save-dev jest`

Para poder usar ES6 en nuestras pruebas unitarias, instala:

`npm install --save-dev babel-jest babel-polyfill babel-preset-es2015`


## Métodos

### CommonMatchers o Comparadores Comunes
Los comparadores pueden ser:
- toEqual()
- not.toEqual()

### Numbers
Los comparadores númericos pueden ser:
- .toBeGreaterThan()
- .toBeGreaterThanOrEqual()
- .toBeLessThan()
- .toBeLessThanOrEqual()
- .toBeCloseTo()

### Truthy / Falsy
Comparadores booleanos pueden ser:
- .toBeNull()
- .toBeTruthy()
- .toBeFalsy()
- .toBeUndefined()
- .not.toBeTruthy()

### Arrays
Para trabajar con arrays, los métodos son:
- toContain()
- toHaveLength()

## Coverage
Permite verificar si estamos testeando todo el código que tenemos en nuestro proyecto
- Solo se le debe agregar el flag `--coverage`
```javascript
jest --coverage
```

## Strings
Para trabajar Jest con strings, podemos usar los siguientes métodos:
- .toMatch()
- .not.toMatch()
- .toHaveLength()

## Watch
Permite estar observando el código en tiempo real, por lo tanto el testeo tambien, para eso utilizamos el flag `--watch`
```javascript
jest --watch
```
## Setup de pruebas
Jest nos proporciona los métodos para correr antes, despues o durante una o varias pruebas, lo cual nos permite setear algunas configuraciones al momento de hacer nuestras pruebas:
- afterEach()
- afterAll()
- beforeEach()
- beforeAll()

## reject y resolve en promesas
