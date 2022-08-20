document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    let correo = localStorage.getItem('email2');
    if (correo === null){
        alert('Debe iniciar sesión')
        location.href = "login.html";
    }

    document.getElementById('cierresesion').addEventListener('click',()=>{
        irse()
        })
    
});


function irse() {
    alert('Sesión cerrada');
    localStorage.clear();
    location.href= "login.html"
}