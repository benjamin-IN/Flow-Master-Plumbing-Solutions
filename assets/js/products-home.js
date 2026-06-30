const container = document.getElementById("featuredProducts");

if(container){

featuredProducts.forEach(product=>{

container.innerHTML += `

<div class="col-lg-3 col-md-6">

<div class="product-card">

<img src="${product.image}" class="img-fluid">

<div class="product-body">

<span class="badge bg-primary mb-2">

${product.category}

</span>

<h5>${product.name}</h5>

<p>${product.description}</p>

<div class="d-grid gap-2">

<a href="product-details.html?id=${product.id}"

class="btn btn-primary">

View Details

</a>

<a href="https://wa.me/2349012709720?text=Hello%20Flow%20Master,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}."

target="_blank"

class="btn btn-success">

WhatsApp Inquiry

</a>

</div>

</div>

</div>

</div>

`;

});

}