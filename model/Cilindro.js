class Cilindro {
    // 'Construtor' = Cria espaço dentro da memória para armazenar os dados do objeto
    constructor(raio, altura) {
        // 'This' = Referencia o objeto que está sendo criado, ou seja, de fora para dentro
        this.raio = raio
        this.altura = altura
    }
    calcularArea() {
        //Area da Base = π * r²
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area
    }
    calcularVolume() {
        //Area da Base = π * r²
        //Volume = Ab * h
        let volume = 0.0
        volume = this.calcularArea() * this.altura
        return volume
    }
}

module.exports = Cilindro