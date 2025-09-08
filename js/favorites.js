// Initialize favorites
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';
let currentSort = 'recent';
let isGridView = true;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updateFavoritesDisplay();
    updateStats();
    updateCounts();
});

// Update favorites display
function updateFavoritesDisplay() {
    const grid = document.getElementById('favoritesGrid');
    const emptyState = document.getElementById('emptyState');

    if (favorites.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';

    // Apply filters and sorting
    let displayItems = [...favorites];

    // Filter
    if (currentFilter !== 'all') {
        if (currentFilter === 'sale') {
            displayItems = displayItems.filter(item => item.originalPrice);
        } else {
            displayItems = displayItems.filter(item => item.category === currentFilter);
        }
    }

    // Sort
    displayItems = sortItems(displayItems, currentSort);

    // Update grid
    // For demo purposes, the HTML already has sample items
    // In a real app, you would dynamically generate these from the favorites array
}

// Sort items
function sortItems(items, sortType) {
    switch (sortType) {
        case 'price-low':
            return items.sort((a, b) => a.price - b.price);
        case 'price-high':
            return items.sort((a, b) => b.price - a.price);
        case 'name':
            return items.sort((a, b) => a.name.localeCompare(b.name));
        case 'discount':
            return items.sort((a, b) => {
                const discountA = a.originalPrice ? (a.originalPrice - a.price) : 0;
                const discountB = b.originalPrice ? (b.originalPrice - b.price) : 0;
                return discountB - discountA;
            });
        case 'recent':
        default:
            return items.sort((a, b) => b.dateAdded - a.dateAdded);
    }
}

// Update statistics
function updateStats() {
    const totalItems = document.querySelectorAll('.favorite-card').length;
    const prices = Array.from(document.querySelectorAll('.favorite-card')).map(card =>
        parseFloat(card.dataset.price) || 0
    );

    const totalValue = prices.reduce((sum, price) => sum + price, 0);
    const savedAmount = totalItems * 20; // Example calculation

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
    document.getElementById('savedAmount').textContent = `$${savedAmount.toFixed(2)}`;

    // Animate numbers
    animateValue('totalItems', 0, totalItems, 1000);
    animateValue('totalValue', 0, totalValue, 1000, true);
    animateValue('savedAmount', 0, savedAmount, 1000, true);
}

// Animate number counting
function animateValue(id, start, end, duration, isCurrency = false) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = isCurrency ? `$${current.toFixed(2)}` : Math.floor(current);
    }, 16);
}

// Update counts
function updateCounts() {
    const favoritesCount = document.querySelectorAll('.favorite-card').length;
    document.getElementById('favoritesCount').textContent = favoritesCount;

    // Update cart count from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

// Filter favorites
function filterFavorites(category) {
    currentFilter = category;

    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter cards
    const cards = document.querySelectorAll('.favorite-card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else if (category === 'sale') {
            card.style.display = card.querySelector('.original-price') ? 'block' : 'none';
        } else {
            card.style.display = card.dataset.category === category ? 'block' : 'none';
        }

        // Re-trigger animation
        if (card.style.display === 'block') {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'cardEntry 0.6s ease-out';
            }, 10);
        }
    });

    updateStats();
}

// Sort favorites
function sortFavorites(sortType) {
    currentSort = sortType;
    updateFavoritesDisplay();
}

// Toggle view
function toggleView() {
    isGridView = !isGridView;
    const grid = document.getElementById('favoritesGrid');
    const viewIcon = document.getElementById('viewIcon');

    if (isGridView) {
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
        viewIcon.textContent = '⊞';
    } else {
        grid.style.gridTemplateColumns = '1fr';
        viewIcon.textContent = '☰';
    }
}

// Remove favorite
function removeFavorite(button) {
    const card = button.closest('.favorite-card');

    // Animate removal
    card.style.animation = 'fadeOut 0.5s ease-out';
    setTimeout(() => {
        card.remove();
        updateStats();
        updateCounts();
        showToast('✓', 'Item removed from favorites');

        // Check if empty
        if (document.querySelectorAll('.favorite-card').length === 0) {
            document.getElementById('favoritesGrid').style.display = 'none';
            document.getElementById('emptyState').style.display = 'block';
        }
    }, 500);
}

// Clear all favorites
function clearAllFavorites() {
    if (!confirm('Are you sure you want to remove all items from favorites?')) {
        return;
    }

    const cards = document.querySelectorAll('.favorite-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => card.remove(), 500);
        }, index * 100);
    });

    setTimeout(() => {
        document.getElementById('favoritesGrid').style.display = 'none';
        document.getElementById('emptyState').style.display = 'block';
        updateStats();
        updateCounts();
        showToast('✓', 'All items removed from favorites');
    }, cards.length * 100 + 500);
}

// Add all to cart
function addAllToCart() {
    const cards = document.querySelectorAll('.favorite-card');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cards.forEach(card => {
        // Extract product data from card (simplified for demo)
        const product = {
            id: Math.random(),
            name: card.querySelector('.name').textContent,
            price: parseFloat(card.dataset.price),
            quantity: 1,
            image: card.querySelector('.card-image').src
        };

        cart.push(product);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    showToast('✓', `${cards.length} items added to cart`);
}

// Share list
function shareList() {
    if (navigator.share) {
        navigator.share({
            title: 'My SOLE Favorites',
            text: `Check out my favorite items on SOLE! ${document.querySelectorAll('.favorite-card').length} amazing products.`,
            url: window.location.href
        }).then(() => {
            showToast('✓', 'List shared successfully');
        }).catch(() => {
            copyToClipboard();
        });
    } else {
        copyToClipboard();
    }
}

// Copy to clipboard
function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast('✓', 'Link copied to clipboard');
    });
}

// Quick view
function quickView(productId) {
    const modal = document.getElementById('quickViewModal');
    modal.classList.add('active');

    // Update modal content (simplified for demo)
    document.getElementById('modalTitle').textContent = 'Product Name';
    document.getElementById('modalDescription').textContent = 'Product description goes here...';
    document.getElementById('modalPrice').textContent = '$199.99';
    document.getElementById('modalImage').src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400';
}

// Close quick view
function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('active');
}

// View details
function viewDetails() {
    window.location.href = 'detail.html';
}

// Add to cart from card
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add product to cart (simplified for demo)
    cart.push({
        id: productId,
        name: 'Product Name',
        price: 199.99,
        quantity: 1
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    showToast('✓', 'Added to cart');
}

// Add to cart from modal
function modalAddToCart() {
    addToCart(999); // Demo product ID
    closeQuickView();
}

// Show toast notification
function showToast(icon, message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastIcon').textContent = icon;
    document.getElementById('toastMessage').textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.9);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle')?.addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
    navLinks.style.flexDirection = 'column';
    navLinks.style.padding = '20px';
    navLinks.style.backdropFilter = 'blur(10px)';

    if (navLinks.style.display === 'flex') {
        navLinks.querySelectorAll('a').forEach(link => {
            link.style.color = '#333';
        });
    }
});