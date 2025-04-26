const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 39.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 49.99, image: "https://via.placeholder.com/150" },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to your cart!`);
}

window.onload = displayProducts;