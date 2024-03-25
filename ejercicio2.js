class rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    calcularArea(){
        return this.base*this.altura;
    }
    calcularPerimetro(){
        return 2*(this.base+this.altura);
    }
}
const rectangulo1 = new rectangulo(5,10);
console.log('Area: ',rectangulo1.calcularArea());
console.log('Perimetro: ', rectangulo1.calcularPerimetro());