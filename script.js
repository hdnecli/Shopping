const products = [
    { name: 'laptop', price: 1000, imageUrl: "images/macbook.jpg" },
    { name: 'desktop', price: 1500, imageUrl: "images/imac.jpg" },
    { name: 'phone', price: 500, imageUrl: "images/iphone.jpg" },
    { name: 'tablet', price: 700, imageUrl: "images/ipad.jpg" },
];

const productList = document.getElementById('product-list');
let cart = [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price} $</p>
            <button class="remove-from-cart">Empty Basket</button>
        `;

        cartItemsContainer.appendChild(cartItem);
        totalPrice += product.price;
    });

    document.getElementById('total-price').innerText = `Total: ${totalPrice} $`;

    document.querySelectorAll('.remove-from-cart').forEach((button, index) => {
        button.addEventListener('click', () => {
            cart.splice(index, 1); 
            updateCart(); 
        });
    });
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} $</p>
        <button class="add-to-cart">Add Basket</button>
    `;

    const addButton = productItem.querySelector('.add-to-cart');
    addButton.addEventListener('click', () => addToCart(product));

    productList.appendChild(productItem);
});

const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', () => {
    cart = [];
    updateCart();
});
