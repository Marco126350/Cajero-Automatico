const users = {
  "marco@gmail.com": {
    nombre: "Marco Rodriguez",
    password: "123",
    ncta: "18307063",
  },
  "marco2@gmail.com": {
    nombre: "Marco Leyva",
    password: "212",
    ncta: "18307061",
  },
  "marco3@gmail.com": {
    nombre: "Marco Roma",
    password: "313",
    ncta: "18307060",
  },
};

const loginButton = document.getElementById("login");

loginButton.addEventListener("click", function (el) {
  const inputEmail = document.getElementById("inputEmail");
  const email = inputEmail.value;

  if (users[email] != null) {
    const inputPassword = document.getElementById("inputPassword");
    const contrasenia = inputPassword.value;
    if (users[email]["password"] == contrasenia) {
      window.location.href = "/cajero.html?ncta=" + users[email]["ncta"];
    } else {
      alert("Verifica tu contraseña");
    }
  } else {
    alert("no existe el email");
  }
});
