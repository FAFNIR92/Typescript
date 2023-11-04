class CuentaBancaria {
  numeroCuenta: string;
  titular: string;
  saldo: number;

  constructor(numeroCuenta: string, titular: string, saldo: number) {
    this.numeroCuenta = numeroCuenta;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(cantidad: number): void {
    this.saldo += cantidad;
  }

  retirar(cantidad: number): void {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      console.log("Saldo insuficiente para realizar la operación.");
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const cuenta1 = new CuentaBancaria("001", "Juan Pérez", 1000);
const cuenta2 = new CuentaBancaria("002", "María Gómez", 2000);

cuenta1.depositar(500);
cuenta2.retirar(300);
console.log("Saldo de cuenta1: " + cuenta1.consultarSaldo());
console.log("Saldo de cuenta2: " + cuenta2.consultarSaldo());
  