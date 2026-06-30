const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(p => p.id === id);

if (product) {

document.getElementById("productImage").src = product.image;

document.getElementById("productCategory").innerHTML = product.category;

document.getElementById("productName").innerHTML = product.name;

document.getElementById("productBrand").innerHTML = product.brand;

document.getElementById("productDescription").innerHTML = product.description;

document.getElementById("productSizes").innerHTML =
product.sizes.map(size => `<li>${size}</li>`).join("");

}

