let lado1: number = parseFloat(prompt("Introduce el primer lado del triángulo"));
let lado2: number = parseFloat(prompt("Introduce el segundo lado del triángulo"));
let lado3: number = parseFloat(prompt("Introduce el tercer lado del triángulo"));

if (lado1 === lado2 && lado1 === lado3) {
  console.log("El triángulo es equilátero");
} else {
  console.log("El triángulo no es equilátero");
}
