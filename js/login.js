                <a href="#" class="social-btn">
                    <span>📘</span> Facebook
                </a>
                <a href="#" class="social-btn">
                    <span>🍎</span> Apple
                </a>
            </div>
        </div>

        <!-- Sign Up Link -->
        <div class="signup-link">
            Don't have an account? <a href="signup.html">Sign Up</a>
        </div>
    </div>

    <script>
        // Form submission with animation
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const loading = document.getElementById('loading');
            const errorMessage = document.getElementById('errorMessage');
            
            // Hide error message if visible
            errorMessage.style.display = 'none';
            
            // Show loading animation
            btnText.style.display = 'none';
            loading.style.display = 'block';
            submitBtn.disabled = true;
            
            // Simulate login process
            setTimeout(() => {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                // Simple validation (in real app, this would be server-side)
                if (email && password) {
                    // Store login state
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userEmail', email);
                    
                    // Redirect to profile page
                    window.location.href = 'profile.html';
                } else {
                    // Show error
                    errorMessage.style.display = 'block';
                    btnText.style.display = 'block';
                    loading.style.display = 'none';
                    submitBtn.disabled = false;
                }
            }, 1500);
        });

        // Password visibility toggle could be added here
        // Social login handlers could be added here
