const massaTriangulo = require('../fixtures/massaTriangulo.json')
const { areaTriangulo } = require('../src/geometria')

describe('Testes de Área do Triângulo', () => {

    const massaTrianguloArray = massaTriangulo.map(teste => [
        teste.base,
        teste.altura,
        teste.resultadoEsperado
    ])

    test.each(massaTrianguloArray)('Calcular a área de um triângulo com %f * %f', (base, altura, resultadoEsperado) => {
        // Act
        const resultadoObtido = areaTriangulo(base, altura)

        // Assert
        if (resultadoEsperado === null) {
            expect(resultadoObtido).toBeNaN()
        } else {
            expect(resultadoObtido).toBe(resultadoEsperado)
        }        
    })
})