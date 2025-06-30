
const products = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality sound with noise cancellation.',
    image: 'https://images.unsplash.com/photo-1713801129175-8e60c67e0412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpcmxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww',
    price: 1999
  },
  {
    name: 'Smart Watch',
    description: 'Stay connected with health tracking.',
    image: 'https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D',
    price: 3499
  },
  {
    name: 'Gaming Mouse',
    description: 'Ergonomic design with customizable buttons.',
    image: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D',
    price: 1599
  },
  {
    name: 'Mechanical Keyboard',
    description: 'Tactile feedback with RGB lighting.',
    image: 'https://plus.unsplash.com/premium_photo-1664194583917-e2ca85efc15e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D',
    price: 2799
  },
  {
    name: '4K Monitor',
    description: 'Crisp resolution for work and play.',
    image: 'https://plus.unsplash.com/premium_photo-1681470644710-99a83651c8c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NEslMjBNb25pdG9yfGVufDB8fDB8fHww',
    price: 14999
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with deep bass.',
    image: 'https://media.istockphoto.com/id/1182926683/photo/portable-bluetooth-speaker-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=ReqLFspdTJr6UU16LwkB4F2DocFLi5VGNqItV471kdM=',
    price: 2499
  },
  {
    name: 'Electro 100GB Ram Laptop',
    description: 'Crisp resolution for work and play.',
    image: 'https://images.unsplash.com/photo-1587318684001-b29074817e81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3MlMjBpbiUyMGRhcmt8ZW58MHx8MHx8fDA%3D',
    price: 98000
  },
  {
    name: 'DSLR Camera',
    description: 'Capture and moments and save for the future',
    image: 'https://images.unsplash.com/photo-1718102685816-4b990a8cb2e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWNzJTIwaW4lMjBkYXJrfGVufDB8fDB8fHww',
    price: 100000
  },
  {
    name: 'Phone',
    description: 'Unlock the time consumer',
    image: 'https://images.unsplash.com/photo-1722534785317-b20f66b0f6e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHMyMSUyMGZlfGVufDB8fDB8fHww',
    price: 20000
  },
];

const productContainer = document.getElementById('products');
const cartItems = [];
const cartContainer = document.getElementById('cart');
const totalAmount = document.getElementById('total');
const sortSelect = document.getElementById('sort');

function displayProducts(data) {
  productContainer.innerHTML = "";
  data.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>₹${product.price.toLocaleString('en-IN')}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(productEl);
  });
}

function addToCart(name, price) {
  cartItems.push({ name, price });
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
    const itemEl = document.createElement('p');
    itemEl.textContent = `${item.name} - ₹${item.price.toLocaleString('en-IN')}`;
    cartContainer.appendChild(itemEl);
  });
  totalAmount.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
}

sortSelect.addEventListener('change', function() {
  const value = sortSelect.value;
  if (value === 'price-asc') {
    displayProducts(products.slice().sort((a, b) => a.price - b.price));
  } else if (value === 'price-desc') {
    displayProducts(products.slice().sort((a, b) => b.price - a.price));
  } else {
    displayProducts(products);
  }
});

displayProducts(products);