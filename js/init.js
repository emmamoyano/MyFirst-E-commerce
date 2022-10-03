const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function irse() {
  alert('Sesión cerrada');
  localStorage.clear();
  location.href= "login.html"
}

// function nombreusuario() {
//  let nomb = localStorage.getItem("email2")
//   document.getElementById('nombreusuario').innerHTML = nomb;
// }

function barraUsuario() {

  let barrita = "";

  barrita += `<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   ${localStorage.getItem("email2")}
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
  <li id="cierresesion"><a class="dropdown-item" href="#">Cerrar sesión</a></li>
  </ul>
</div>`;
  
  document.getElementById('barra').innerHTML += barrita
}
