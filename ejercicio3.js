class Libro{
    constructor(titulo, autor){
        this.titulo=titulo;
        this.autor=autor;
    }
    obtenerInformacion(){
        return `Titulo: ${this.titulo}, Autor: ${this.autor}`;
    }
}

const libro1 = new Libro('Duna', 'Frank');
console.log(libro1.obtenerInformacion());