class Circulo{
    constructor(radio){
        this.radio=radio;
    }
    calcularArea(){
        return Math.PI*this.radio*this.radio;
    }
    calcularPerimetro(){
        return 2*Math.PI*this.radio;
    }
}

const circulo1 = new Circulo(13.6);

console.log(`Area: ${circulo1.calcularArea()}, Perimetro: ${circulo1.calcularPerimetro()}`);