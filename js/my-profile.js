let perfil = []

function validacion() {
  let expresionRegular =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let validity = true
  let email = document.getElementById("emailPerfil");
  if (expresionRegular.test(email.value)) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity(false);
    validity = false;
  }
  return validity
}

function guardarDatos() {
  let array = []
  let user = {
    nombre : document.getElementById('primerNombreLocal').value,
    segundoNombre : document.getElementById('segundoNombreLocal').value,
    apellido : document.getElementById('primerApellidoLocal').value,
    segundoApellido : document.getElementById('segundoApellidoLocal').value,
    email : document.getElementById('emailPerfil').value,
    telefono : document.getElementById('telefonoContacto').value
  }
  array.push(user)
  localStorage.setItem('perfilUsuario', JSON.stringify(array))
}

function cargarDatos(){
  // let document = document.getElementById();
  
  if (perfil == "" || perfil == null){
   perfil = []
  } else {
    document.getElementById('primerNombreLocal').value = perfil[0].nombre
    document.getElementById('segundoNombreLocal').value = perfil[0].segundoNombre
    document.getElementById('primerApellidoLocal').value = perfil[0].apellido
    document.getElementById('segundoApellidoLocal').value = perfil[0].segundoApellido
    document.getElementById('emailPerfil').value = perfil[0].email
    document.getElementById('telefonoContacto').value = perfil[0].telefono
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  
    document.getElementById("emailPerfil").value =
    localStorage.getItem("email2");
    barraUsuario();
    document.getElementById("cierresesion").addEventListener("click", () => {
      irse();
    });
    perfil = JSON.parse(localStorage.getItem('perfilUsuario'))
    cargarDatos()
  
  document
    .getElementById("formularioPerfil")
    .addEventListener("submit", function (e) {
      if (!validacion() || !this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        e.stopPropagation();
        guardarDatos()
        alert("Perfil actualizado");
        window.location = "my-profile.html";
        // cargarDatos()
      }

      document.body.classList.add("was-validated");

      let eventos = ["change", "input"];

      eventos.forEach((evento) => {
        document.body.addEventListener(evento, validacion);
      });
    });
});
