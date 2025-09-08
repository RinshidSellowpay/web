const successMessage = document.getElementById('successMessage');
successMessage.classList.add('show');

// Reset form
this.reset();

// Hide success message after 5 seconds
setTimeout(() => {
    successMessage.classList.remove('show');
}, 5000);

// In a real application, you would send the form data to a server
console.log('Form submitted to rinshidch10@gmail.com');


// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    observer.observe(item);
});
