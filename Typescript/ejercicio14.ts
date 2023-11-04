let tabla: number = parseInt(prompt("Ingrese el número de tabla de multiplicar: "));

for (let i: number = 1; i <= 10; i++) {
  let resultado: number = tabla * i;
  console.log(tabla + " x " + i + " = " + resultado);
}
