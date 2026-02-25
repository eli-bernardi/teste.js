const Cilindro = require('../model/cilindro')

describe('Teste unitário da classe Cilindro', () => {
    test('Teste do calcular área do cilindro', () => {
        const raio = 3, altura = 3
        const cilindro = new Cilindro(raio, altura)
        const resposta = 28.274

        expect(cilindro.calcularArea()).toBeCloseTo(resposta, 3)
    })
    test('Teste calcular área 2', () => {
        const raio = 2, altura = 2
        const cilindro = new Cilindro(raio, altura)
        const resposta = 12.566

        expect(cilindro.calcularArea()).toBeCloseTo(resposta, 3)
    })
    test('Teste calcular volume', () => {
        const raio = 3, altura = 3
        const cilindro = new Cilindro(raio, altura)
        const resposta = 84.823

        expect(cilindro.calcularVolume()).toBeCloseTo(resposta, 3)
    })
})