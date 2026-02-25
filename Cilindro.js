export default class Cilindro{
    constructor (raio,altura){
        this.raio = raio
        this.altura = altura
    }
    calcularArea(){
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area
    }
    calcularVolume(){
        let volume = 0.0
        volume = this.calcularVolume() * this.altura
        return volume 
    }
}