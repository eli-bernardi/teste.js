const Cilindro = require('./model/cilindro')
const Cone = require('./model/Cone')

function principal() {
    let cilindro = new Cilindro(2, 2)
    let cone = new Cone(2, 2)

    let areaCilindro = cilindro.calcularArea()
    let areaCone = cone.calcularArea()

    let volumeCilindro = cilindro.calcularVolume()
    let volumeCone = cone.calcularVolume()

    console.log(`Área do Cilindro: ${areaCilindro.toFixed(2)}`)
    console.log(`Área do Cone: ${areaCone.toFixed(2)}`)

    console.log(`Volume do Cilindro: ${volumeCilindro.toFixed(2)}`)
    console.log(`Volume do Cone: ${volumeCone.toFixed(2)}`)
}

principal()