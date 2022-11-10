let infodeProductos = [];
let comentarios = [];
// let compraNueva = [infodeProductos];
// let compraNueva = [];
let compraNueva = [];

function showProductsInfoArray(infodeProductos) {
  let info = "";
  info += `<section style="background-color: #eee;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card text-black">
        <div class="text-center">
        
      </div>
      <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
       ${contandoFotones(infodeProductos)}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
            </div>
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title" id="nom">${infodeProductos.name}</h5>
              <p class="text-muted mb-4">${infodeProductos.description}</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Categoria:</span><span>${infodeProductos.category}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Cantidad de productos vendidos:</span><span>${infodeProductos.soldCount}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Precio</span><span>UYU ${infodeProductos.cost}</span>
                
              </div>
              <button type="button" class="btn btn-primary btn-sm" id="comprar">Comprar</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      `;
  document.getElementById("infoProductos").innerHTML = info;
}

function comprarProducto() {
  
  if (localStorage.getItem('compraNueva') === "" || localStorage.getItem('compraNueva') === null){
    compraNueva = [];
  } else {
    compraNueva = JSON.parse(localStorage.getItem('compraNueva'))
  }
  compraNueva.push(infodeProductos)
  localStorage.setItem('compraNueva', JSON.stringify(compraNueva))
  alert('Compra añadida al carrito')
  

}

function contandoFotones(array) {
  let imagenes = "";

  
  for (let i = 0; i < array.images.length; i++){
   if (i === 0) {
    imagenes += `
    <div class="carousel-item active">
    <img src="${array.images[i]}" class="d-block w-100" alt="...">
  </div>
  `
   } else {
    imagenes += `
    <div class="carousel-item">
    <img src="${array.images[i]}" class="d-block w-100" alt="...">
  </div>
  `
   }
  } return imagenes
}

// function probando() {
//   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src=${imagen} class="d-block w-100" alt="..."> </img>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// }

function showComentarios(comentarios) {
  let comentarito = "";
  for(let i = 0; i < comentarios.length; i++){
    let masComentarios = comentarios[i];
    comentarito += `
    <section style="background-color: #f7f6f6;">
    
      <div class="row d-flex justify-content-center">
        <div class="col-md-12 col-lg-10 col-xl-8">
          
          </div>
  
          <div class="card mb-3">
            <div class="card-body">
              <div class="d-flex flex-start">
                
                <div class="w-100">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="text-primary fw-bold mb-0">
                      ${masComentarios.user} <span class="text-muted mb-4">nos cuenta:</span>
                      <span class="text-dark ms-2">${masComentarios.description}</span>
                    </h6>
                    <p class="mb-0">${masComentarios.dateTime}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    
                    <div class="d-flex flex-row">
                      ${puntuandoConCaras(masComentarios.score)}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </section>
  `
  }


  document.getElementById("coment").innerHTML = comentarito;
  
}

function nuevoComentario(){

  let today = new Date ();
  let ahora = today.getFullYear() + "-" + today.getDate() + "-" + parseInt(today.getMonth()+ 1) + "-" + today.getUTCHours() + ":" + today.getUTCMinutes() + ":" + today.getUTCSeconds();
  let com = `
  <section style="background-color: #f7f6f6;">
  
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10 col-xl-8">
        
        </div>

        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex flex-start">
              
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-primary fw-bold mb-0">
                    ${localStorage.getItem('email2')} <span class="text-muted mb-4">nos cuenta:</span>
                    <span class="text-dark ms-2">${document.getElementById('miComentario').value}</span>
                  </h6>
                  <p class="mb-0">${ahora}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    
                    <div class="d-flex flex-row">
                      ${puntuandoConCaras(document.getElementById('puntaje').value)}
                      
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</section>
`
  document.getElementById('coment').innerHTML += com;
}

function setCatID(id) {
  localStorage.setItem("productID", id);
  window.location = "product-info.html"
}

function mostrarRelacionados(infodeProductos) {
  let relacionados = "";

  for(let i = 0; i < infodeProductos.length; i++){
    let masRelacionados = infodeProductos[i];
    relacionados += `
  <div onclick="setCatID(${masRelacionados.id})"class="col-md-4" id="hola">
    <div class="card mb-4 shadow-sm custom-card cursor-active">
    <div class="row">
      <img class="bd-placeholder-img card-img-top" src=${masRelacionados.image}>
      </div>
      <h3 class="m-3">${masRelacionados.name}</h3>
    </div>
  </div>
  
    `
    // onclick="setCatID(${category.id})"
  } 
  document.getElementById("productosRelacionados").innerHTML += relacionados;
  
}




// `<div> ${masRelacionados.name} <img src= ${masRelacionados.image} style="width: 405px"> <div>`

// `<div class="row">
//     <div class="col-md-4">
//       <div class="thumbnail">
        
//           <img src=${masRelacionados.image} alt="Lights" style="width:100%">
//           <div class="caption">
//             <p>${masRelacionados.name}</p>
//           </div>
//         </a>
//       </div>
//     </div>
//     `

function puntuandoConCaras(calificacion){
            
  let caritas="";
  for(let i = 1; i <= 5; i ++) {
      if (i<=calificacion){   
        caritas += '<i class="bi bi-emoji-sunglasses"></i>'
      }else{   
        caritas += '<i class="bi-emoji-expressionless"></i>'
      }
     }
    return caritas;
  };


document.addEventListener("DOMContentLoaded", function (e) {
  let idInfo = localStorage.getItem("productID");
  getJSONData(PRODUCT_INFO_URL + idInfo + EXT_TYPE).then(function (resultObj) {
    if (resultObj.status === "ok") {
      infodeProductos = resultObj.data;
      // compraNueva = resultObj.data;
      showProductsInfoArray(infodeProductos);
      mostrarRelacionados(infodeProductos.relatedProducts);
      document.getElementById('comprar').addEventListener('click',()=>{
        comprarProducto()
      })
    }
  });

  getJSONData(PRODUCT_INFO_COMMENTS_URL + idInfo + EXT_TYPE).then(function (resultObj){
    if (resultObj.status === "ok"){
      comentarios = resultObj.data;
      showComentarios(comentarios)
    }
  })

  document.getElementById('agregar').addEventListener('click',()=>{
    nuevoComentario()
    document.getElementById('miComentario').value = "";
  })
  
  barraUsuario();
    document.getElementById('cierresesion').addEventListener('click',()=>{
        irse()
        })
  
});


 /*`<div class="row">
  <div class="col-3">
      <img src="${infodeProductos.image}" alt="${infodeProductos.description}" class="img-thumbnail">
  </div>
  <div class="col">
      <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">${infodeProductos.name} - ${infodeProductos.currency} ${infodeProductos.cost}</h4>
          <small class="text-muted">${infodeProductos.soldCount} artículos</small>
      </div>
      <p class="mb-1">${infodeProductos.description}</p>
  </div>
</div>` */


/* <section style="background-color: #f7f6f6;">
  <div class="container my-5 py-5 text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10 col-xl-8">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h4 class="text-dark mb-0">Unread comments (4)</h4>
          <div class="card">
            <div class="card-body p-2 d-flex align-items-center">
              <h6 class="text-primary fw-bold small mb-0 me-1">Comments "ON"</h6>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
                height="40" />
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-primary fw-bold mb-0">
                    lara_stewart
                    <span class="text-dark ms-2">Hmm, This poster looks cool</span>
                  </h6>
                  <p class="mb-0">2 days ago</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="small mb-0" style="color: #aaa;">
                    <a href="#!" class="link-grey">Remove</a> •
                    <a href="#!" class="link-grey">Reply</a> •
                    <a href="#!" class="link-grey">Translate</a>
                  </p>
                  <div class="d-flex flex-row">
                    <i class="fas fa-star text-warning me-2"></i>
                    <i class="far fa-check-circle" style="color: #aaa;"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */

/* <section style="background-color: #eee;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
            class="card-img-top" alt="Apple Computer" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Believing is seeing</h5>
              <p class="text-muted mb-4">Apple pro display XDR</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Pro Display XDR</span><span>$5,999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Pro stand</span><span>$999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Vesa Mount Adapter</span><span>$199</span>
              </div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */