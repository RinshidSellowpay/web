        // Update item quantity
        function updateQuantity(id, change) {
            const item = cartItems.find(item => item.id === id);
            if (item) {
                item.quantity = Math.max(1, item.quantity + change);
                saveCart();
                renderCart();
                
                // Show feedback
                if (change > 0) {
                    showToast('Quantity increased');
                } else if (item.quantity > 1 || change === 0) {
                    showToast('Quantity decreased');
                }
            }
        }

        // Remove item from cart
        function removeItem(id) {
            const itemElement = event.target.closest('.cart-item');
            itemElement.classList.add('removing');
            
            setTimeout(() => {
                cartItems = cartItems.filter(item => item.id !== id);
                saveCart();
                renderCart();
                showToast('Item removed from cart');
            }, 500);
        }

        // Update order summary
        function updateSummary() {
            const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 100 ? 0 : 15;
            const tax = subtotal * 0.08;
            const total = subtotal + shipping + tax;
            
            document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
            document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        }

        // Update cart count
        function updateCartCount() {
            const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = `${totalItems} ${totalItems === 1 ? 'Item' : 'Items'}`;
        }

        // Apply promo code
        function applyPromo() {
            const promoInput = document.getElementById('promoInput');
            const code = promoInput.value.trim().toUpperCase();
            
            if (code === 'SAVE10') {
                showToast('Promo code applied! 10% off');
                // Apply discount logic here
            } else if (code === 'FREESHIP') {
                showToast('Free shipping applied!');
                // Apply free shipping logic here
            } else if (code) {
                showToast('Invalid promo code');
            }
            
            promoInput.value = '';
        }

        // Proceed to checkout
        function proceedToCheckout() {
            if (cartItems.length === 0) {
                showToast('Your cart is empty');
                return;
            }
            
            // Show success animation
            const successAnimation = document.getElementById('successAnimation');
            successAnimation.style.display = 'block';
            
            setTimeout(() => {
                successAnimation.style.display = 'none';
                cartItems = [];
                saveCart();
                renderCart();
                showToast('Order placed successfully!');
            }, 3000);
        }

        // Show toast notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');
            
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Initialize cart on page load
        document.addEventListener('DOMContentLoaded', () => {
            loadCart();
            
            // Add smooth scroll behavior
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature').forEach(feature => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(20px)';
            feature.style.transition = 'all 0.6s ease';
            observer.observe(feature);
        });
