
    

function login() {

let usuario = document.getElementById('email2').value;
let clave = document.getElementById('password2').value;


if (usuario==="" || clave===""){
    alert ("Debe ingresar su usuario y clave");
} else {
    localStorage.setItem("email2", usuario);
    localStorage.setItem("clave", clave);
    location.href="index.html";
}
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('login').addEventListener('click',()=>{
        login();
    })
})




