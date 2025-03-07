const { areaParalelogramo } = require("../src/geometria")

describe('Testes de Área do Paralelogramo', () => {

    let massaParalelogramo = [
        [5, 6, 30],
        [10, 2, 20],
        [7, 3, 21],
        [9, 4, 36],
        [8, 5, 40],
        [0, 6, 0],
        [5, -6, NaN],
        [-3, 3, NaN]
    ]

    test.each(massaParalelogramo)('Calcular área de um paralelogramo com %f * %f', (base, lado, resultadoEsperado) => {
        // Act
        const resultadoObtido = areaParalelogramo(base, lado)

        // Assert
        if (isNaN(resultadoEsperado)) {
            expect(resultadoObtido).toBeNaN()
        } else {
            expect(resultadoObtido).toBe(resultadoEsperado)
        }
    })
})