        // Filter products by brand
        function filterProducts(brand) {
            const cards = document.querySelectorAll('.product-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Update active button
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.toLowerCase().includes(brand.toLowerCase()) || 
                    (brand === 'all' && btn.textContent === 'All Products') ||
                    (brand === 'new' && btn.textContent === 'New Arrivals')) {
                    btn.classList.add('active');
                }
            });

            // Show/hide products with animation
            cards.forEach((card, index) => {
                const cardBrands = card.dataset.brand.split(' ');
                if (brand === 'all' || cardBrands.includes(brand)) {
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.style.animation = 'cardEntry 0.6s ease-out forwards';
                    }, index * 50);
                } else {
                    card.style.animation = 'fadeOut 0.3s ease-out forwards';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
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

        // Navigate to detail page
        function goToDetail(productName, brand, price) {
            // Store product info in sessionStorage
            const productInfo = {
                name: productName,
                brand: brand,
                price: price,
                image: event.currentTarget.querySelector('.product-image').src
            };
            sessionStorage.setItem('selectedProduct', JSON.stringify(productInfo));
            window.location.href = 'detail.html';
        }

        // Simulate loading more products on scroll
        let isLoading = false;
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
                loadMoreProducts();
            }
        });

        function loadMoreProducts() {
            isLoading = true;
            const spinner = document.getElementById('loadingSpinner');
            spinner.style.display = 'block';

            // Simulate API call
            setTimeout(() => {
                spinner.style.display = 'none';
                isLoading = false;
            }, 1500);
        }

        // Mobile menu toggle
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
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

        // Add entrance animation for elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe all product cards
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
