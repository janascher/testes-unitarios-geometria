const { areaQuadrado } = require("../src/geometria")

describe('Teste de Área do Quadrado', () => {
    it('Calcular a área de um quadrado', () => {
        //Arrange
        const lado = 4
        const resultadoEsperado = 16
        
        //Act
        const resultadoObtido = areaQuadrado(lado)
        
        //Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    });

    it('Retornar Zero para um quadrado com lado Zero', () => {
        //Arrange
        const lado = 0
        const resultadoEsperado = 0

        // Act
        const resultadoObtido = areaQuadrado(lado)

        // Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    });

    it('Calcular área para um quadrado com lado negativo', () => {
        //Arrange
        const lado = -4
        const resultadoEsperado = 16

        // Act
        const resultadoObtido = areaQuadrado(lado)

        //Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })
})