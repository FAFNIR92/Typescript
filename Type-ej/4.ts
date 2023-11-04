class FiguraGeometrica {
  constructor(public nombre: string) {}

  area(): number {
    return 0;
  }
}
  
class Triangulo extends FiguraGeometrica {
constructor(public base: number, public altura: number) {
  super("Triángulo");
  }

  area(): number {
    return 0.5 * this.base * this.altura;
  }
}

class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super("Círculo");
  }

  area(): number {
    return Math.PI * this.radio * this.radio;
  }
}

class Cuadrado extends FiguraGeometrica {
  constructor(public lado: number) {
    super("Cuadrado");
  }

  area(): number {
    return this.lado * this.lado;
  }
}

// Crear objetos de las subclases y calcular áreas
const triangulo = new Triangulo(4, 6);
const circulo = new Circulo(3);
const cuadrado = new Cuadrado(5);

console.log(`Área del ${triangulo.nombre}: ${triangulo.area()}`);
console.log(`Área del ${circulo.nombre}: ${circulo.area()}`);
console.log(`Área del ${cuadrado.nombre}: ${cuadrado.area()}`);
  