
function validacion() {
  let expresionRegular =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let validity = true
  let email = document.getElementById("email2");
  if (expresionRegular.test(email.value)) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity(false);
    validity = false;
  }
  return validity
}
function login() {
  let usuario = document.getElementById("email2").value;
  let clave = document.getElementById("password2").value;

  localStorage.setItem("email2", usuario);
  localStorage.setItem("clave", clave);
  location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("formularioLogin")
    .addEventListener("submit", function (e) {
      if (!validacion() || !this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        e.stopPropagation();
        login() 
      }
      document.body.classList.add("was-validated");

      let eventos = ["change", "input"];

      eventos.forEach((evento) => {
        document.body.addEventListener(evento, validacion);
      });
    });
});
