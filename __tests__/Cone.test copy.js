const Cone = require('../model/Cone')

describe('Teste unitário da classe cone', () => {
    test('Teste do calcular área do cone', () => {
        const raio = 2, altura = 2
        const cone = new Cone(raio, altura)
        const resposta = 12.566

        expect(cone.calcularArea()).toBeCloseTo(resposta, 3)
    })
    test('Teste calcular volume', () => {
        const raio = 2, altura = 2
        const cone = new Cone(raio, altura)
        const resposta = 8.378

        expect(cone.calcularVolume()).toBeCloseTo(resposta, 3)
    })
})