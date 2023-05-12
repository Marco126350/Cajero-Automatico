let montos = {
  18307063: 100,
  18307061: 200,
  18307060: 300,
};

let url = new URL(window.location.href);
let ncta = url.searchParams.get("ncta");

function actualizaSaldoActual() {
  const saldoActual = document.getElementById("saldoActual");
  saldoActual.innerHTML = `$ ${montos[ncta]}`;
}
actualizaSaldoActual();

function actualizaNumUsuario() {
  const numUsuario = document.getElementById("numUsuario");
  numUsuario.innerHTML = `${ncta}`;
}
actualizaNumUsuario();

const inputMonto = document.getElementById("inputMonto");

const ingresarMonto = document.getElementById("ingresarMonto");
ingresarMonto.addEventListener("click", function (el) {
  let monto = parseInt(inputMonto.value);
  montos[ncta] = montos[ncta] + monto;
  actualizaSaldoActual();
  inputMonto.value = "";
});
