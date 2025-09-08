        // Products Database
        const products = [
            {
                id: 1,
                name: "Classic High-Top Sneakers",
                description: "Premium canvas construction with vintage-inspired design",
                price: 75,
                originalPrice: 99,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sneakers",
                badge: "Sale",
                rating: 4.8,
                reviews: 324,
                colors: ["#000000", "#FFFFFF", "#FF6B6B"]
            },
            {
                id: 2,
                name: "Minimal White Sneakers",
                description: "Clean minimalist design with premium leather construction",
                price: 185,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sneakers",
                badge: "New",
                rating: 4.9,
                reviews: 156,
                colors: ["#FFFFFF", "#F5F5F5", "#E8E8E8"]
            },
            {
                id: 3,
                name: "Premium Black Oxford",
                description: "Handcrafted leather dress shoes for formal occasions",
                price: 320,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "formal",
                badge: null,
                rating: 4.7,
                reviews: 89,
                colors: ["#000000", "#8B4513", "#654321"]
            },
            {
                id: 4,
                name: "Performance Running",
                description: "Advanced cushioning technology for superior comfort",
                price: 195,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sports",
                badge: null,
                rating: 4.6,
                reviews: 267,
                colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"]
            },
            {
                id: 5,
                name: "Retro High-Top",
                description: "Vintage-inspired design with modern comfort features",
                price: 145,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sneakers",
                badge: "Limited",
                rating: 4.5,
                reviews: 98,
                colors: ["#FF9A9E", "#FECFEF", "#FAD0C4"]
            },
            {
                id: 6,
                name: "Casual Leather Loafers",
                description: "Versatile loafers perfect for casual and business casual",
                price: 210,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "casual",
                badge: null,
                rating: 4.4,
                reviews: 134,
                colors: ["#8B4513", "#654321", "#000000"]
            },
            {
                id: 7,
                name: "Urban Combat Boots",
                description: "Durable construction with street-style aesthetic",
                price: 240,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "boots",
                badge: null,
                rating: 4.8,
                reviews: 203,
                colors: ["#000000", "#654321", "#2F2F2F"]
            },
            {
                id: 8,
                name: "Premium Slip-On",
                description: "Effortless style with premium materials and comfort",
                price: 165,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sneakers",
                badge: "New",
                rating: 4.7,
                reviews: 76,
                colors: ["#FFFFFF", "#F0F0F0", "#D3D3D3"]
            },
            {
                id: 9,
                name: "Elite Running Pro",
                description: "Professional-grade running shoes with carbon fiber plate",
                price: 285,
                originalPrice: 350,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sports",
                badge: "Sale",
                rating: 4.9,
                reviews: 445,
                colors: ["#FF6B6B", "#4ECDC4", "#FFD93D"]
            },
            {
                id: 10,
                name: "Classic Dress Derby",
                description: "Timeless design with modern comfort technology",
                price: 375,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "formal",
                badge: null,
                rating: 4.6,
                reviews: 112,
                colors: ["#000000", "#654321", "#8B4513"]
            },
            {
                id: 11,
                name: "Street Style High-Tops",
                description: "Bold design with premium suede and leather accents",
                price: 195,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sneakers",
                badge: "Limited",
                rating: 4.7,
                reviews: 289,
                colors: ["#FF6B6B", "#4ECDC4", "#FFD93D"]
            },
            {
                id: 12,
                name: "Chelsea Boot Premium",
                description: "Classic chelsea boots with premium leather construction",
                price: 295,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "boots",
                badge: null,
                rating: 4.8,
                reviews: 167,
                colors: ["#000000", "#654321", "#8B4513"]
            },
            {
                id: 13,
                name: "Trail Runner Adventure",
                description: "All-terrain running shoes with superior grip and durability",
                price: 225,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "sports",
                badge: "New",
                rating: 4.5,
                reviews: 198,
                colors: ["#4ECDC4", "#FF6B6B", "#96CEB4"]
            },
            {
                id: 14,
                name: "Business Casual Oxford",
                description: "Versatile oxford shoes perfect for office and casual wear",
                price: 245,
                originalPrice: 295,
                image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "formal",
                badge: "Sale",
                rating: 4.4,
                reviews: 143,
                colors: ["#654321", "#8B4513", "#000000"]
            },
            {
                id: 15,
                name: "Minimalist Canvas Low",
                description: "Simple and clean design with eco-friendly materials",
                price: 125,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "casual",
                badge: null,
                rating: 4.3,
                reviews: 87,
                colors: ["#FFFFFF", "#F5F5F5", "#E8E8E8"]
            },
            {
                id: 16,
                name: "Designer High Fashion",
                description: "Limited edition designer collaboration with unique patterns",
                price: 495,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "limited",
                badge: "Limited",
                rating: 4.9,
                reviews: 45,
                colors: ["#FF9A9E", "#FECFEF", "#A8EDEA"]
            },
            // SHIRTS
            {
                id: 21,
                name: "Nike Dri-FIT Polo",
                description: "Performance polo shirt with moisture-wicking technology",
                price: 59,
                originalPrice: 75,
                image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
                category: "shirts",
                badge: "Sale",
                rating: 4.6,
                reviews: 234,
                colors: ["#000000", "#FFFFFF", "#667eea"],
                animationClass: "featured"
            },
            {
                id: 22,
                name: "Premium Cotton Tee",
                description: "Soft organic cotton t-shirt for everyday comfort",
                price: 35,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
                category: "shirts",
                badge: "New",
                rating: 4.8,
                reviews: 567,
                colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
                animationClass: "new-arrival"
            },
            {
                id: 23,
                name: "Athletic Performance Shirt",
                description: "Lightweight breathable fabric for intense workouts",
                price: 45,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
                category: "shirts",
                badge: null,
                rating: 4.7,
                reviews: 189,
                colors: ["#667eea", "#764ba2", "#000000"]
            },
            // PANTS
            {
                id: 24,
                name: "Tech Fleece Joggers",
                description: "Modern joggers with premium comfort and style",
                price: 120,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
                category: "pants",
                badge: "Hot",
                rating: 4.9,
                reviews: 892,
                colors: ["#000000", "#808080", "#2F4F4F"],
                animationClass: "featured"
            },
            {
                id: 25,
                name: "Classic Track Pants",
                description: "Retro-inspired track pants with modern comfort",
                price: 80,
                originalPrice: 95,
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
                category: "pants",
                badge: "Sale",
                rating: 4.5,
                reviews: 445,
                colors: ["#000080", "#FF0000", "#000000"]
            },
            {
                id: 26,
                name: "Premium Chinos",
                description: "Versatile chinos perfect for any occasion",
                price: 90,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
                category: "pants",
                badge: null,
                rating: 4.8,
                reviews: 678,
                colors: ["#F5DEB3", "#8B7355", "#000080"]
            },
            // CAPS
            {
                id: 27,
                name: "Heritage Baseball Cap",
                description: "Classic six-panel cap with adjustable strap",
                price: 30,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
                category: "caps",
                badge: "New",
                rating: 4.7,
                reviews: 1234,
                colors: ["#000000", "#FFFFFF", "#FF0000"],
                animationClass: "new-arrival"
            },
            {
                id: 28,
                name: "Sport Performance Cap",
                description: "Lightweight cap with moisture-wicking sweatband",
                price: 25,
                originalPrice: 35,
                image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800",
                category: "caps",
                badge: "Sale",
                rating: 4.6,
                reviews: 789,
                colors: ["#667eea", "#000000", "#FFFFFF"]
            },
            {
                id: 29,
                name: "Classic Snapback",
                description: "Urban style snapback with flat brim",
                price: 40,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800",
                category: "caps",
                badge: null,
                rating: 4.8,
                reviews: 567,
                colors: ["#000000", "#808080", "#FF6B6B"]
            },
            // WATCHES
            {
                id: 30,
                name: "Smart Sport Watch Pro",
                description: "Advanced fitness tracking with premium design",
                price: 300,
                originalPrice: 399,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
                category: "watches",
                badge: "Limited",
                rating: 4.9,
                reviews: 2345,
                colors: ["#000000", "#C0C0C0", "#FFD700"],
                animationClass: "featured"
            },
            {
                id: 31,
                name: "Classic Chronograph",
                description: "Timeless design with Swiss movement",
                price: 450,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
                category: "watches",
                badge: "Premium",
                rating: 5.0,
                reviews: 945,
                colors: ["#C0C0C0", "#FFD700", "#8B4513"]
            },
            {
                id: 32,
                name: "Digital Sport Watch",
                description: "Rugged design with multiple sport modes",
                price: 160,
                originalPrice: null,
                image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800",
                category: "watches",
                badge: "New",
                rating: 4.6,
                reviews: 678,
                colors: ["#000000", "#FF0000", "#00FF00"],
                animationClass: "new-arrival"
            },
            {
                id: 33,
                name: "Minimalist Classic",
                description: "Clean minimal design for the modern professional",
                price: 200,
                originalPrice: 249,
                image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
                category: "watches",
                badge: "Sale",
                rating: 4.8,
                reviews: 1123,
                colors: ["#000000", "#FFFFFF", "#8B7355"]
            }
        ];


        // Global variables
        let cart = [];
        let wishlist = [];
        let currentFilter = 'all';


        // Advanced Animation Engine
        class AnimationEngine {
            constructor() {
                this.mouseTrails = [];
                this.particles = [];
                this.init();
            }


            init() {
                this.setupMouseTrail();
                this.setupDynamicParticles();
                this.setupMagneticElements();
                this.setupTextAnimations();
                this.setupAdvancedScrollEffects();
                this.animateCounters();
            }


            setupMouseTrail() {
                let mouseX = 0, mouseY = 0;

                document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;

                    if (Math.random() < 0.3) {
                        this.createTrailDot(mouseX, mouseY);
                    }
                });
            }


            createTrailDot(x, y) {
                const dot = document.createElement('div');
                dot.className = 'mouse-trail';
                dot.style.left = x + 'px';
                dot.style.top = y + 'px';
                document.body.appendChild(dot);

                setTimeout(() => dot.remove(), 1000);
            }


            setupDynamicParticles() {
                setInterval(() => {
                    if (this.particles.length < 15) {
                        this.createDynamicParticle();
                    }
                }, 3000);
            }


            createDynamicParticle() {
                const particle = document.createElement('div');
                const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
                const size = Math.random() * 4 + 2;

                particle.style.cssText = `
                    position: fixed;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1;
                    left: ${Math.random() * 100}vw;
                    top: 100vh;
                    opacity: 0.6;
                    animation: particleFloat ${8 + Math.random() * 4}s linear forwards;
                `;

                document.body.appendChild(particle);
                this.particles.push(particle);

                setTimeout(() => {
                    particle.remove();
                    this.particles = this.particles.filter(p => p !== particle);
                }, 12000);
            }


            setupMagneticElements() {
                const magneticElements = document.querySelectorAll('.add-btn, .cta-btn, .filter-btn');

                magneticElements.forEach(element => {
                    element.addEventListener('mouseenter', () => {
                        element.style.transform = 'scale(1.05) rotate(1deg)';
                    });

                    element.addEventListener('mouseleave', () => {
                        element.style.transform = 'scale(1) rotate(0deg)';
                    });
                });
            }


            setupTextAnimations() {
                const observerOptions = {
                    threshold: 0.5,
                    rootMargin: '0px'
                };


                const textObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.animateText(entry.target);
                        }
                    });
                }, observerOptions);


                document.querySelectorAll('.section-title, .product-name').forEach(el => {
                    textObserver.observe(el);
                });
            }


            animateText(element) {
                const text = element.textContent;
                element.innerHTML = '';

                [...text].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(50px) rotateX(90deg)';
                    span.style.transition = `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.03}s`;
                    element.appendChild(span);

                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0) rotateX(0deg)';
                    }, 100);
                });
            }


            setupAdvancedScrollEffects() {
                let ticking = false;

                const updateEffects = () => {
                    const scrollY = window.pageYOffset;

                    // Header effects
                    const header = document.querySelector('header');
                    if (scrollY > 100) {
                        header.style.background = 'rgba(255, 255, 255, 0.98)';
                        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
                        header.style.backdropFilter = 'blur(20px)';
                    } else {
                        header.style.background = 'rgba(255, 255, 255, 0.95)';
                        header.style.boxShadow = 'none';
                    }

                    // Floating elements parallax
                    document.querySelectorAll('.floating-shape').forEach((shape, index) => {
                        const speed = 0.3 + (index * 0.1);
                        const yPos = -(scrollY * speed);
                        const rotation = scrollY * (0.2 + index * 0.1);
                        shape.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
                    });

                    ticking = false;
                };

                const requestTick = () => {
                    if (!ticking) {
                        requestAnimationFrame(updateEffects);
                        ticking = true;
                    }
                };

                window.addEventListener('scroll', requestTick);
            }


            animateCounters() {
                const counters = document.querySelectorAll('.stat-number[data-target]');

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.animateCounter(entry.target);
                        }
                    });
                }, { threshold: 0.5 });


                counters.forEach(counter => observer.observe(counter));
            }


            animateCounter(element) {
                const target = parseInt(element.dataset.target);
                const duration = 2000;
                const start = performance.now();

                const animate = (current) => {
                    const elapsed = current - start;
                    const progress = Math.min(elapsed / duration, 1);

                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const value = Math.floor(easeOut * target);

                    element.textContent = value.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            }
        }


        // Enhanced Product Management
        class ProductManager {
            constructor() {
                this.products = products;
                this.filteredProducts = [...products];
                this.init();
            }


            init() {
                this.renderProducts();
                this.setupFilters();
                this.setupIntersectionObserver();
            }


            renderProducts() {
                const container = document.getElementById('productsContainer');
                container.innerHTML = '';


                this.filteredProducts.forEach((product, index) => {
                    const productElement = this.createProductElement(product, index);
                    container.appendChild(productElement);
                });
            }


            createProductElement(product, index) {
                const productDiv = document.createElement('div');
                const animationClass = product.animationClass || '';
                productDiv.className = `product ${animationClass}`;
                productDiv.dataset.category = product.category;
                productDiv.style.animationDelay = `${index * 0.1}s`;
                productDiv.style.cursor = 'pointer';
                productDiv.onclick = (e) => {
                    // Prevent navigation when clicking on buttons
                    if (!e.target.closest('button')) {
                        window.location.href = `detail.html?id=${product.id}`;
                    }
                };


                const badgeHtml = product.badge ?
                    `<div class="product-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : '';


                const oldPriceHtml = product.originalPrice ?
                    `<span class="old-price">$${product.originalPrice}</span>` : '';


                const colorOptionsHtml = product.colors.map(color =>
                    `<div class="color-option" style="background: ${color}"></div>`
                ).join('');


                const starsHtml = '★'.repeat(Math.floor(product.rating)) +
                    (product.rating % 1 ? '☆' : '');


                productDiv.innerHTML = `
                    <div class="product-image-container">
                        ${badgeHtml}
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-actions">
                            <button class="action-btn" onclick="event.stopPropagation(); toggleWishlistItem(${product.id})" title="Add to Wishlist">❤️</button>
                            <button class="action-btn" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'" title="View Details">👁️</button>
                        </div>
                        <div class="color-options">
                            ${colorOptionsHtml}
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-rating">
                            <div class="stars">${starsHtml}</div>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            ${oldPriceHtml}
                            $${product.price}
                        </div>
                        <div class="product-actions-bottom">
                            <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                            <button class="quick-view-btn" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">View Details</button>
                        </div>
                    </div>
                `;


                return productDiv;
            }


            setupFilters() {
                const filterButtons = document.querySelectorAll('.filter-btn');

                filterButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const filter = button.dataset.filter;
                        this.applyFilter(filter, button);
                    });
                });
            }


            applyFilter(filter, activeButton) {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                activeButton.classList.add('active');

                // Filter products
                if (filter === 'all') {
                    this.filteredProducts = [...this.products];
                } else {
                    this.filteredProducts = this.products.filter(product =>
                        product.category === filter ||
                        (filter === 'limited' && product.badge === 'Limited')
                    );
                }

                // Animate out current products
                const products = document.querySelectorAll('.product');
                products.forEach((product, index) => {
                    product.style.animation = 'none';
                    product.style.transform = 'translateY(50px) rotateX(30deg) scale(0.8)';
                    product.style.opacity = '0';
                });

                setTimeout(() => {
                    this.renderProducts();
                }, 300);
            }


            setupIntersectionObserver() {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };


                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                            }, index * 100);
                        }
                    });
                }, observerOptions);


                // Observe products after a short delay to allow for rendering
                setTimeout(() => {
                    document.querySelectorAll('.product').forEach(product => {
                        product.style.opacity = '0';
                        product.style.transform = 'translateY(100px) rotateX(20deg) scale(0.9)';
                        product.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        observer.observe(product);
                    });
                }, 100);
            }
        }


        // Enhanced Cart System
        class CartSystem {
            constructor() {
                this.count = 0;
                this.items = [];
                this.cartElement = document.getElementById('cartBtn');
            }


            addItem(productId) {
                const product = products.find(p => p.id === productId);
                if (product) {
                    this.count++;
                    this.items.push(product);
                    this.updateCartDisplay();
                    this.showAddedAnimation(product);
                }
            }


            updateCartDisplay() {
                this.cartElement.textContent = `Cart (${this.count})`;
                this.animateCart();
            }


            showAddedAnimation(product) {
                // Create floating notification
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #2ed573, #17d362);
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    z-index: 9999;
                    transform: translateX(300px);
                    transition: transform 0.3s ease;
                    box-shadow: 0 10px 30px rgba(46, 213, 115, 0.3);
                `;
                notification.innerHTML = `
                    <div style="font-weight: 600; margin-bottom: 0.25rem;">Added to Cart!</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">${product.name}</div>
                `;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);

                setTimeout(() => {
                    notification.style.transform = 'translateX(300px)';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }


            animateCart() {
                this.cartElement.style.animation = 'pulse 0.5s ease-in-out, wiggle 0.5s ease-in-out 0.5s';
                setTimeout(() => {
                    this.cartElement.style.animation = '';
                }, 1000);
            }
        }


        // Wishlist System
        class WishlistSystem {
            constructor() {
                this.items = [];
                this.countElement = document.getElementById('wishlistCount');
            }


            toggleItem(productId) {
                const index = this.items.indexOf(productId);
                if (index > -1) {
                    this.items.splice(index, 1);
                } else {
                    this.items.push(productId);
                }
                this.updateDisplay();
            }


            updateDisplay() {
                this.countElement.textContent = this.items.length;
                this.countElement.style.animation = 'bounceIn 0.5s ease-out';
                setTimeout(() => {
                    this.countElement.style.animation = '';
                }, 500);
            }
        }


        // Global functions
        function openSearch() {
            document.getElementById('searchModal').style.display = 'flex';
            document.getElementById('searchInput').focus();
        }


        function closeSearch() {
            document.getElementById('searchModal').style.display = 'none';
        }

        function goToProfile() {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn === 'true') {
                window.location.href = 'profile.html';
            } else {
                window.location.href = 'login.html';
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.querySelector('.mobile-menu');
            const overlay = document.querySelector('.mobile-menu-overlay');
            const body = document.body;

            menu.classList.toggle('active');
            overlay.classList.toggle('active');

            if (menu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        }


        function openSizeGuide() {
            document.getElementById('sizeGuideModal').style.display = 'flex';
        }


        function closeSizeGuide() {
            document.getElementById('sizeGuideModal').style.display = 'none';
        }


        function addToCart(productId) {
            cartSystem.addItem(productId);
            // Save to localStorage for cart page
            const product = products.find(p => p.id === productId);
            if (product) {
                let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        size: '8.5',
                        color: product.colors[0],
                        image: product.image
                    });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }


        function toggleWishlistItem(productId) {
            wishlistSystem.toggleItem(productId);
        }


        function quickView(productId) {
            const product = products.find(p => p.id === productId);
            alert(`Quick view for ${product.name}\nPrice: $${product.price}\n${product.description}`);
        }


        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Hide loading screen
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 1500);


            // Initialize systems
            window.animationEngine = new AnimationEngine();
            window.productManager = new ProductManager();
            window.cartSystem = new CartSystem();
            window.wishlistSystem = new WishlistSystem();

            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
                        const startPosition = window.pageYOffset;
                        const distance = targetPosition - startPosition;
                        const duration = 1200;
                        let start = null;


                        function step(timestamp) {
                            if (!start) start = timestamp;
                            const progress = timestamp - start;
                            const ease = easeInOutCubic(progress / duration);

                            window.scrollTo(0, startPosition + distance * ease);

                            if (progress < duration) {
                                window.requestAnimationFrame(step);
                            }
                        }

                        window.requestAnimationFrame(step);
                    }
                });
            });


            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }

            // Newsletter subscription
            document.querySelectorAll('.newsletter-form, .footer-section div').forEach(form => {
                const button = form.querySelector('button');
                if (button) {
                    button.addEventListener('click', function () {
                        const input = form.querySelector('input[type="email"]');
                        if (input && input.value) {
                            this.style.background = '#2ed573';
                            this.style.transform = 'scale(1.1) rotateZ(2deg)';
                            this.textContent = '✓ Subscribed!';

                            setTimeout(() => {
                                this.style.background = '';
                                this.style.transform = '';
                                this.textContent = this.textContent.includes('Join') ? 'Join' : 'Subscribe';
                            }, 3000);

                            input.value = '';
                        } else {
                            input.style.borderColor = '#ff4757';
                            input.style.animation = 'shake 0.5s ease-in-out';
                            setTimeout(() => {
                                input.style.borderColor = '';
                                input.style.animation = '';
                            }, 500);
                        }
                    });
                }
            });
        });


        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('search-modal') || e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
