let infoCarrito = [];
let compraNueva = [];


function muestoCarrito(infoCarrito) {
  let htmlContentToAppend = "";

  for (let i = 0; i < infoCarrito.length; i++) {
    let carrito = infoCarrito[i];
    htmlContentToAppend += ` 
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="probando" scope="row"><img id="fotoTable" src=${carrito.image}></img></th>
      <td>${carrito.name}</td>
      <td>${carrito.currency} ${carrito.unitCost}</td>
      <td><input type="number" min="1" value="1" size="1" id="numCantidad"></td>
      <td id="subTotal">${carrito.currency} ${carrito.unitCost}</td>
    </tr>
    <tr id="carritoNuevo">

    
    </tr>
  </tbody>
</table>
        `;
  }
  document.getElementById("carro").innerHTML = htmlContentToAppend;
}



function muestroProductoNuevo() {
  let htmlContentToAppend = "";
  for (let i = 0; i < compraNueva.length; i++) {
    let nuevo = compraNueva[i];
    htmlContentToAppend += `
    <th scope="row"><img src="${nuevo.images[i]}" class="probando2"></img></th>
        <td> ${nuevo.name}</td>
        <td> ${nuevo.currency} ${nuevo.cost}</td>
        <td><input type="number" min="1" size="1" value="1" class="numNuevo"></td>
        <td class="subTotal1">${nuevo.currency} ${nuevo.cost}</td>
        <br>

        `
      }
      document.getElementById('carritoNuevo').innerHTML += htmlContentToAppend;
    }


    function calcularSubtotales() {
      let htmlContentToAppend = "";
      
      for(let i = 0; i < compraNueva.length; i++){
        document.getElementById('numCantidad').addEventListener('input',()=>{
          totalSubtotal()
        })
      }
      for(let i = 0; i < compraNueva.length; i++){
        let subNuevo = compraNueva[i];
        
          document.getElementsByClassName('numNuevo')[i].addEventListener('input',()=>{
            document.getElementsByClassName('subTotal1')[i].innerHTML = `${subNuevo.currency} ${document.getElementsByClassName('numNuevo')[i].value * subNuevo.cost}`
            // document.getElementById("totalDeSubtotal").innerHTML = document.getElementsByClassName('subTotal1')[i].textContent.split(' ')[1]
            totalSubtotal()
          })
          
        }
      }

  

function totalSubtotal() {
  let suma = 0;
  for(let i=0; i < compraNueva.length; i++){
    
    suma += parseInt(document.getElementsByClassName('subTotal1')[i].textContent.split(' ')[1]) + (parseInt(document.getElementById('subTotal').innerText.split(' ')[1]) / 2)
    console.log(suma)
  }
  document.getElementById("totalDeSubtotal").innerHTML = `USD  ${suma}`
  
  let porcentajeDeEnvios = document.getElementsByName('publicationType9');
  let porcentaje = 0;
  
  
    for(let i = 0; i < porcentajeDeEnvios.length; i++){
      if (porcentajeDeEnvios[i].checked){
        porcentaje = Math.round(suma * parseFloat(porcentajeDeEnvios[i].value))
        
          }
        }
  
      
  let total = suma + porcentaje
  document.getElementById('totalDeEnvio').innerHTML = `USD  ${porcentaje}`
  document.getElementById('totalDeSubtotalEnvio').innerHTML =`USD  ${total}` 
}



  function validarFormulario() {
    let validity = true

    if (document.getElementById('vencimiento').value === "" ) {
      validity = false;
      document.getElementById('term-invalid').style.display = 'inline';
    } else {
      document.getElementById('term-invalid').style.display = 'none';
  
    }
    return validity
  

  }
  
  

    


function checkModal() {

  document.getElementById('metodoDePago').addEventListener('click', ()=>{
    document.getElementById("numeroDeCuenta").disabled = true
    document.getElementById("numeroTarjeta").disabled = false
    document.getElementById("codigoSeguridad").disabled = false
    document.getElementById("vencimiento").disabled = false
  })
  document.getElementById('goldradio2').addEventListener('click', ()=>{
    document.getElementById("numeroDeCuenta").disabled = true
    document.getElementById("numeroTarjeta").disabled = false
    document.getElementById("codigoSeguridad").disabled = false
    document.getElementById("vencimiento").disabled = false
  })
  document.getElementById('goldradio3').addEventListener('click', ()=>{
    document.getElementById("numeroDeCuenta").disabled = false
    document.getElementById("numeroTarjeta").disabled = true
    document.getElementById("codigoSeguridad").disabled = true
    document.getElementById("vencimiento").disabled = true
  })


  document.getElementById('guardarCambios').addEventListener('click', ()=>{
      alert('¡Cambios guardados!')
  })
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function (resultObj) {
    if (resultObj.status === "ok") {
      infoCarrito = resultObj.data;
      muestoCarrito(infoCarrito.articles);
      document.getElementById("numCantidad").addEventListener("input", () => {
        if (document.getElementById("numCantidad").value !== "") {
          document.getElementById("subTotal").innerHTML = `${
            infoCarrito.articles[0].currency
          } ${
            parseInt(document.getElementById("numCantidad").value) *
            parseInt(infoCarrito.articles[0].unitCost)
          }
                `;
        } else {
          document.getElementById(
            "subTotal"
          ).innerHTML = `${infoCarrito.articles[0].currency} ${infoCarrito.articles[0].unitCost}`;
        }
      });
      if (localStorage.getItem("compraNueva") !== "") {
        compraNueva = localStorage.getItem("compraNueva");
        compraNueva = JSON.parse(compraNueva);

        muestroProductoNuevo();
        for(let i = 0; i < compraNueva.length; i++){
          let subNuevo = compraNueva[i];
          
          if (subNuevo.currency !== "USD") {
            subNuevo.currency = "USD"
            subNuevo.cost = Math.round(subNuevo.cost / 45)
            
              document.getElementsByClassName('subTotal1')[i].innerHTML = `${subNuevo.currency} ${document.getElementsByClassName('numNuevo')[i].value * subNuevo.cost}`
              // document.getElementById("totalDeSubtotal").innerHTML = document.getElementsByClassName('subTotal1')[i].textContent.split(' ')[1]
              totalSubtotal()
            // todo este if es para cambiar el currency y cost a USD cuando carga la pagina
          }
        }
      }
      checkModal()          
      calcularSubtotales();
      document.getElementById('formulario').addEventListener('submit', function(e){
        if(!validarFormulario() || !this.checkValidity()){
          e.preventDefault()
          e.stopPropagation()
        }else {
          e.preventDefault()
          e.stopPropagation()
          alert('¡Compra realizada con exito!')
          window.location ="cart.html"
        }
    
        document.body.classList.add('was-validated');
      
        let eventos=['change','input'];
    
        eventos.forEach(evento =>{document.body.addEventListener(evento,validarFormulario)})
      
      })
    }
  });
  barraUsuario();
  document.getElementById("cierresesion").addEventListener("click", () => {
    irse();
  });
});
