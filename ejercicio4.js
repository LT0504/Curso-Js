class Coche{
    constructor(marca, modelo, año){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
    }
    obetenerIngormacion(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año ${this.año}`;
    }
}
const coche1 = new Coche('Toyota', 'yaris', '2020');
console.log(coche1.obetenerIngormacion());