# cursoJest
![](https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-512.png)

## Pruebas unitarias

Toman todos los proyectos y lo descomponen en pequeñas partes para ver si funcionan correctamente.
comprueban casos estandares.
caracteristicas: 
- automatizable
- total cobertura
- reutilizable
- independientes
- Rapidas de crear

Ventajas
- Proporcionan trabajo ágil.
- Calidad del código.
- Detectar errores rápido.
- Facilita los cambios y favorece la integración
- Proporciona información.
- Reduce el costo.


Jest 
herramienta para hacer pruebas unitarias en cualquier proyecto que tenga JS.
Desarrollo rápido
Feedback instantaneo
Generar snapshots para comparar elementos
No requiere una configuracion compleja.
Potente libreria para generar "mocking"
Funciona con Typescript

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

`describe("DESCRIPCION DE LA PRUEA")`
