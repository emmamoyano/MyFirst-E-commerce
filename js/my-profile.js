let perfil = []


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
  if (
    localStorage.getItem("email2") === "" ||
    localStorage.getItem("email2") == null
  ) {
    alert("Debe iniciar sesión");
    window.location = "login.html";
    // si el usuario no está registrado lo redirige al login
  } else {
    document.getElementById("emailPerfil").value =
    localStorage.getItem("email2");
    barraUsuario();
    document.getElementById("cierresesion").addEventListener("click", () => {
      irse();
    });
    perfil = JSON.parse(localStorage.getItem('perfilUsuario'))
    cargarDatos()
  }
  document
    .getElementById("formularioPerfil")
    .addEventListener("submit", function (e) {
      if (!this.checkValidity()) {
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
        document.body.addEventListener(evento);
      });
    });
});
