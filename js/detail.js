const hasHalfStar = currentProduct.rating % 1 !== 0;
let starsHtml = '★'.repeat(fullStars);
if (hasHalfStar) starsHtml += '☆';
document.getElementById('productStars').innerHTML = starsHtml;
document.getElementById('ratingText').textContent = `${currentProduct.rating} (${currentProduct.reviews} reviews)`;

// Load images
loadImages();

// Load colors
loadColors();

// Load related products
loadRelatedProducts();


function loadImages() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.getElementById('thumbnails');

    // Set main image
    mainImage.src = currentProduct.images[0];

    // Create thumbnails
    thumbnails.innerHTML = '';
    currentProduct.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="Product ${index + 1}">`;
        thumb.onclick = () => selectImage(index);
        thumbnails.appendChild(thumb);
    });
}

function selectImage(index) {
    document.getElementById('mainImage').src = currentProduct.images[index];

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function loadColors() {
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = '';

    currentProduct.colors.forEach((color, index) => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${index === 0 ? 'selected' : ''}`;
        colorOption.style.background = color;
        colorOption.onclick = () => selectColor(index);
        colorOptions.appendChild(colorOption);
    });
}

function selectColor(index) {
    selectedColor = index;
    document.querySelectorAll('.color-option').forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
}

function loadRelatedProducts() {
    const relatedGrid = document.getElementById('relatedProducts');
    relatedGrid.innerHTML = '';

    // For demo, show first 4 products
    const demoProducts = [
        { id: 3, name: "Premium Black Oxford", price: 320, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 4, name: "Performance Running", price: 195, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 5, name: "Retro High-Top", price: 145, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 6, name: "Casual Leather Loafers", price: 210, image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    demoProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'related-item';
        item.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="related-image">
                    <div class="related-info">
                        <div class="related-name">${product.name}</div>
                        <div class="related-price">$${product.price}</div>
                    </div>
                `;
        item.onclick = () => {
            window.location.href = `detail.html?id=${product.id}`;
        };
        relatedGrid.appendChild(item);
    });
}

function setupEventListeners() {
    // Size selection
    document.querySelectorAll('.size-option').forEach(option => {
        if (!option.classList.contains('out-of-stock')) {
            option.addEventListener('click', function () {
                document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                selectedSize = this.dataset.size;
            });
        }
    });

    // Image zoom
    const mainImageContainer = document.getElementById('mainImageContainer');
    mainImageContainer.addEventListener('mousemove', (e) => {
        const rect = mainImageContainer.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const mainImage = document.getElementById('mainImage');
        mainImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        mainImage.style.transform = 'scale(1.5)';
    });

    mainImageContainer.addEventListener('mouseleave', () => {
        const mainImage = document.getElementById('mainImage');
        mainImage.style.transform = 'scale(1)';
    });
}

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}

function addToCart() {
    cartCount += quantity;
    updateCartCount();

    // Save to localStorage for cart page
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === currentProduct.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            quantity: quantity,
            size: selectedSize,
            color: currentProduct.colors[selectedColor],
            image: currentProduct.images[0]
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showToast('Success!', `${quantity} item(s) added to cart`);

    // Animate button
    const btn = document.querySelector('.add-to-cart');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
}

function buyNow() {
    addToCart();
    setTimeout(() => {
        showToast('Redirecting...', 'Taking you to checkout');
    }, 500);
}

function toggleWishlist() {
    const btn = document.getElementById('wishlistBtn');
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
        showToast('Added!', 'Product added to wishlist');
    } else {
        showToast('Removed!', 'Product removed from wishlist');
    }
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cartCount;
    localStorage.setItem('cartCount', cartCount);
}

function showToast(title, message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-title').textContent = title;
    toast.querySelector('.toast-text').textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openSizeGuide() {
    // You can implement a modal here or redirect to size guide
    showToast('Size Guide', 'Opening size guide...');
}
