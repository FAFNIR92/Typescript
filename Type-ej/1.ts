class Persona {
  nombre: string;
  edad: number;
  documentoIdentidad: string;

  constructor(nombre: string, edad: number, documentoIdentidad: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.documentoIdentidad = documentoIdentidad;
  }

  caminar(distancia: number): void {
    console.log(`${this.nombre} está caminando ${distancia} metros.`);
  }

  hablar(mensaje: string): void {
    console.log(`${this.nombre} dice: "${mensaje}"`);
  }

  comer(comida: string): void {
    console.log(`${this.nombre} está comiendo ${comida}.`);
  }
}

const persona1 = new Persona("Juan", 30, "12345678");
const persona2 = new Persona("María", 25, "98765432");

persona1.caminar(100);
persona2.hablar("Hola, ¿cómo estás?");
persona1.comer("una pizza");
  