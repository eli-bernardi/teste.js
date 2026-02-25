class Cone {
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
        //Volume = Ab = h
        //Area da Base = π * r²     
        let volume = 0.0
        volume = (1 / 3) * this.calcularArea() * this.altura
        return volume
    }
}

module.exports = Cone