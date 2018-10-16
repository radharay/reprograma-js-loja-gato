window.onload = function () {
  //alert("carregou");
  showProducts();
};

function getProducts() {
  return data["items"];
}

function showProducts(){

let nome = "Ju"
console.log(`meu nome é ${nome}`)
console.log("meu nome é " + nome)

  // for (produto of getProducts()){
  //   let productDiv = document.getElementById("products");
  //   productDiv.innerHTML += "<div class='product'>" 
  //   + "<img src=" + produto["product"]["images"][0] + " class='product-img' />"
  //   + "<div class='text-name'>" 
  //   + "<h3 class='product-name'>$" + produto["product"]["name"] + "</h3>"
  //   + "</div>" + "<div class='text-price'>"
  //   + "<p class='product-price'>" 
  //   + Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
  //   + "</p>" + "</div>" + "</div>"
  // }

//`template string`

  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
      </div>
  `
  }

// const formulario = document.getElementsByClassName(form-produto);

document.querySelector("#submit").addEventListener("click", function(event){
  event.preventDefault();
  
// const nomeDoProduto = document.querySelector('#produto').value;
// const valorDoProduto = document.querySelector("#valor").value;
// const imagemDoProduto = document.querySelector("#url").value;

let myObj = {
    "product": {
        "name": document.querySelector('#produto').value,
        "images": [
          document.querySelector("#url").value,
             ],
        "price": {
            "value":document.querySelector("#valor").value,
        }
    }
}

data["items"].push(myObj);

showProducts();
})



