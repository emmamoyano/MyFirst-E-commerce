
    

function login() {

let correo = document.getElementById('email2').value;
let clave = document.getElementById('password2').value;


if (correo==="" || clave===""){
document.getElementById('email2').classList.add('error');
document.getElementById('password2').classList.add('error');
    alert ("Debe ingresar su correo y clave");
} else {
    localStorage.setItem("email2", correo);
    localStorage.setItem("clave", clave);
    location.href="index.html";
}
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('login').addEventListener('click',()=>{
        login();
    })
})




// document.getElementById('email2').classList.add('error');
// document.getElementById('password2').classList.add('error');