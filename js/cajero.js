// coloco el id de los usuarios y su saldo en el sistema
let montos = {
  18307063: 100,
  18307061: 200,
  18307060: 300,
};

// con estas lineas me traigo el id relacionado con el inicio de sesion del usuario
let url = new URL(window.location.href);
let ncta = url.searchParams.get("ncta");

// con esta funcion puedo mandar el saldo actual al archivo html
function actualizaSaldoActual() {
  const saldoActual = document.getElementById("saldoActual");
  saldoActual.innerHTML = `$ ${montos[ncta]}`;
}
actualizaSaldoActual();

// con esta funcion puedo vsualizar el id que le corresponde a ese usuario con el que logie
function actualizaNumUsuario() {
  const numUsuario = document.getElementById("numUsuario");
  numUsuario.innerHTML = `${ncta}`;
}
actualizaNumUsuario();

// mando a llamar el input donde se va a ingresar los numeros
const inputMonto = document.getElementById("inputMonto");

// con esta funcion puedo ingresar dinero a la cuenta
const ingresarMonto = document.getElementById("ingresarMonto");
ingresarMonto.addEventListener("click", function (el) {
  let monto = parseInt(inputMonto.value);
  montos[ncta] = montos[ncta] + monto;
  actualizaSaldoActual();
  inputMonto.value = "";
});

// con esta funcion retiro dinero de la cuenta
const retirarMonto = document.getElementById("retirarMonto");
retirarMonto.addEventListener("click", function (el) {
  let monto = parseInt(inputMonto.value);
  montos[ncta] = montos[ncta] - monto;
  actualizaSaldoActual();
  inputMonto.value = "";
});
