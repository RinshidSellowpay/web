                        I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> <span class="required">*</span>
                    </label>
                </div>

                <div class="button-group">
                    <button type="button" class="btn btn-secondary" onclick="prevStep()">
                        ← Previous
                    </button>
                    <button type="submit" class="btn btn-primary">
                        Create Account
                    </button>
                </div>
            </div>
        </form>

        <!-- Success Animation -->
        <div class="success-animation" id="successAnimation">
            <div class="checkmark-circle">
                <span class="checkmark">✓</span>
            </div>
            <h2 style="color: #333; margin-bottom: 10px;">Welcome to SOLE!</h2>
            <p style="color: #666; margin-bottom: 20px;">Your account has been created successfully.</p>
            <button class="btn btn-primary" onclick="window.location.href='profile.html'" style="width: auto; padding: 12px 30px;">
                Go to Profile
            </button>
        </div>

        <!-- Login Link -->
        <div class="login-link">
            Already have an account? <a href="login.html">Login</a>
        </div>
    </div>

    <script>
        let currentStep = 1;
        const totalSteps = 3;

        function updateProgress() {
            const progressLine = document.getElementById('progressLine');
            const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
            progressLine.style.width = percentage + '%';

            // Update step indicators
            document.querySelectorAll('.step').forEach(step => {
                const stepNum = parseInt(step.dataset.step);
                step.classList.remove('active', 'completed');
                
                if (stepNum < currentStep) {
                    step.classList.add('completed');
                } else if (stepNum === currentStep) {
                    step.classList.add('active');
                }
            });

            // Show/hide form steps
            document.querySelectorAll('.form-step').forEach(step => {
                step.classList.remove('active');
                if (parseInt(step.dataset.step) === currentStep) {
                    step.classList.add('active');
                }
            });
        }

        function nextStep() {
            if (validateStep(currentStep)) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateProgress();
                }
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                updateProgress();
            }
        }

        function validateStep(step) {
            let isValid = true;
            const activeStep = document.querySelector(`.form-step[data-step="${step}"]`);
            const requiredInputs = activeStep.querySelectorAll('input[required]');
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    input.parentElement.classList.add('error');
                    isValid = false;
                } else {
                    input.parentElement.classList.remove('error');
                }
            });

            // Special validation for step 2
            if (step === 2) {
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    document.getElementById('confirmPassword').parentElement.classList.add('error');
                    isValid = false;
                }
            }

            return isValid;
        }

        // Password strength indicator
        document.getElementById('password').addEventListener('input', function(e) {
            const password = e.target.value;
            const strengthBar = document.getElementById('strengthBar');
            
            let strength = 0;
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^a-zA-Z0-9]/)) strength++;
            
            strengthBar.className = 'strength-bar';
            if (strength === 1 || strength === 2) {
                strengthBar.classList.add('strength-weak');
            } else if (strength === 3) {
                strengthBar.classList.add('strength-medium');
            } else if (strength >= 4) {
                strengthBar.classList.add('strength-strong');
            }
        });

        // Form submission
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateStep(3)) {
                // Hide form and show success animation
                document.getElementById('signupForm').style.display = 'none';
                document.querySelector('.progress-steps').style.display = 'none';
                document.querySelector('.logo').style.display = 'none';
                document.querySelector('.login-link').style.display = 'none';
                
                const successAnimation = document.getElementById('successAnimation');
                successAnimation.style.display = 'block';
                
                // Store user data
                const userData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    username: document.getElementById('username').value,
                    phone: document.getElementById('phone').value,
                    birthdate: document.getElementById('birthdate').value,
                    gender: document.getElementById('gender').value,
                    shoeSize: document.getElementById('shoeSize').value
                };
                
                localStorage.setItem('userData', JSON.stringify(userData));
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', userData.email);
            }
        });

        // Remove error on input
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', function() {
                this.parentElement.classList.remove('error');
            });
        });
