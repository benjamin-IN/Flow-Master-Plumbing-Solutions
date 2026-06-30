const productContainer = document.getElementById("productsContainer");

if (productContainer) {

    displayProducts(products);

}

function displayProducts(items){

    productContainer.innerHTML="";

    items.forEach(product=>{

        productContainer.innerHTML += `

<div class="col-lg-3 col-md-6 mb-4">

<div class="product-card h-100">

<img src="${product.image}" class="img-fluid">

<div class="product-body">

<span class="badge bg-primary mb-2">${product.category}</span>

<h5>${product.name}</h5>

<p>${product.description}</p>

<p><strong>Brand:</strong> ${product.brand}</p>

<div class="d-grid gap-2">

<a href="product-details.html?id=${product.id}" class="btn btn-primary">

View Details

</a>

<a href="https://wa.me/2349012709720?text=Hello%20Flow%20Master,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}." target="_blank" class="btn btn-success">

WhatsApp Inquiry

</a>

</div>

</div>

</div>

</div>

`;

    });

}

const search = document.getElementById("searchProduct");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=products.filter(product=>{

return product.name.toLowerCase().includes(value) ||

product.category.toLowerCase().includes(value) ||

product.brand.toLowerCase().includes(value);

});

displayProducts(filtered);

});

}

const category = document.getElementById("categoryFilter");

if(category){

category.addEventListener("change",function(){

if(this.value==="all"){

displayProducts(products);

return;

}

const filtered=products.filter(product=>product.category===this.value);

displayProducts(filtered);

});

}