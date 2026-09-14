// ===============================
// PRODUCTOS DE PURYCLASSHYO
// ===============================

const products = [

    {
        id: 1,
        name: "Nike Air Max",
        category: "Urbanas",
        price: 299.90,
        size: "40 - 43",
        color: "Negro",
        stock: 8,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Adidas Running",
        category: "Running",
        price: 259.90,
        size: "39 - 42",
        color: "Blanco",
        stock: 6,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Urban Street",
        category: "Urbanas",
        price: 189.90,
        size: "38 - 43",
        color: "Gris",
        stock: 10,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Sport Pro",
        category: "Deportivas",
        price: 229.90,
        size: "40 - 44",
        color: "Azul",
        stock: 5,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Classic Casual",
        category: "Casuales",
        price: 169.90,
        size: "38 - 42",
        color: "Blanco",
        stock: 12,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Street Black",
        category: "Urbanas",
        price: 219.90,
        size: "39 - 43",
        color: "Negro",
        stock: 7,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    }

];


// ===============================
// VARIABLES
// ===============================

const productGrid = document.getElementById("product-grid");

const cartCount = document.getElementById("cart-count");

let cart = 0;


// ===============================
// MOSTRAR PRODUCTOS
// ===============================

function renderProducts(productList) {

    productGrid.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">
                    S/ ${product.price.toFixed(2)}
                </div>

                <div class="product-details">
                    Tallas: ${product.size}<br>
                    Color: ${product.color}<br>
                    Stock: ${product.stock}
                </div>

                <button
                    class="add-cart"
                    onclick="addToCart()"
                >
                    Agregar al carrito
                </button>

            </div>
        `;

        productGrid.appendChild(card);

    });

}


// ===============================
// CARRITO
// ===============================

function addToCart() {

    cart++;

    cartCount.textContent = cart;

}


// ===============================
// FILTRAR POR CATEGORÍA
// ===============================

function filterCategory(category) {

    const filteredProducts = products.filter(
        product => product.category === category
    );

    renderProducts(filteredProducts);

}


// ===============================
// BOTONES DE CATEGORÍA
// ===============================

const categoryButtons =
    document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        filterCategory(category);

        document
            .getElementById("productos")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ===============================
// MOSTRAR TODOS AL INICIAR
// ===============================

renderProducts(products);