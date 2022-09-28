let copiaArray = []
let maximo = document.getElementById('rangeFilterCountMax');
let minimo = document.getElementById('rangeFilterCountMin');
let currentCategoriesArray = []

function muestroProductos(currentCategoriesArray){
    
    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];
            htmlContentToAppend += `
            <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${category.image}" alt="${category.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${category.name} - ${category.currency} ${category.cost}</h4>
                            <small class="text-muted">${category.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${category.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;    
}


function ordena_menor_mayor() {
    copiaArray.sort((primero,segundo)=> {
        return primero.cost - segundo.cost
    });
    muestroProductos(copiaArray);
}

function ordenaPorRelevancia() {
    copiaArray.sort(function(a,b){
        if (a.soldCount > b.soldCount) {return -1;}
        if (a.soldCount < b.soldCount) {return 1;}
        return 0;
    })
    muestroProductos(copiaArray);
};

function setCatID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}

document.addEventListener("DOMContentLoaded", function(e){   
    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data
            copiaArray = currentCategoriesArray.products;
            muestroProductos(currentCategoriesArray.products);  
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(e){
        ordena_menor_mayor()
    });

    document.getElementById("sortDesc").addEventListener("click", function(e){
        copiaArray.sort((primero,segundo)=> {
            return segundo.cost - primero.cost
        });
        muestroProductos(copiaArray);
    });

    document.getElementById("sortByCount").addEventListener("click", function(e){
        ordenaPorRelevancia()
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(e){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";
        copiaArray = currentCategoriesArray.products
        muestroProductos(copiaArray);
    });
    
    document.getElementById("rangeFilterCount").addEventListener("click", function(e){
    if ((maximo.value == "") || (minimo.value == "")) {
        copiaArray = currentCategoriesArray.products
        muestroProductos(copiaArray)
    } else {
        let listaFiltrada = copiaArray.filter(costo => costo.cost >= parseInt(minimo.value) && costo.cost <= parseInt(maximo.value))
        copiaArray = listaFiltrada
        muestroProductos(copiaArray)  
    }
    });
    
    document.getElementById('cierresesion').addEventListener('click',()=>{
        irse()
        })
    nombreusuario()
})












