            }
            if (userData.phone) {
                document.getElementById('phone').value = userData.phone;
            }
            if (userData.birthdate) {
                document.getElementById('birthdate').value = userData.birthdate;
            }
            if (userData.gender) {
                document.getElementById('gender').value = userData.gender;
            }
        });

        // Show section
        function showSection(section) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(section).classList.add('active');
            
            // Update desktop menu
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
                if (item.onclick && item.onclick.toString().includes(section)) {
                    item.classList.add('active');
                }
            });
            
            // Update mobile menu
            document.querySelectorAll('.mobile-nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.onclick && item.onclick.toString().includes(section)) {
                    item.classList.add('active');
                }
            });
            
            // Scroll to top on mobile
            if (window.innerWidth <= 768) {
                window.scrollTo(0, 0);
            }
        }

        // Toggle switch
        function toggleSwitch(element) {
            element.classList.toggle('active');
        }

        // Save profile changes
        document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Update localStorage
            const userData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                birthdate: document.getElementById('birthdate').value,
                gender: document.getElementById('gender').value
            };
            
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Update profile display
            document.getElementById('profileName').textContent = `${userData.firstName} ${userData.lastName}`;
            document.getElementById('profileEmail').textContent = userData.email;
            document.getElementById('profileImg').src = `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}&size=150&background=667eea&color=fff`;
            
            // Show success toast
            showToast();
        });

        // Show toast notification
        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Change profile picture
        function changeProfilePicture() {
            // In a real app, this would open a file picker
            alert('Profile picture upload functionality would be implemented here');
        }

        // Remove from wishlist
        document.querySelectorAll('.remove-wishlist').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const item = this.closest('.wishlist-item');
                item.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    item.remove();
                    showToast();
                }, 300);
            });
        });

        // Logout
        function logout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            window.location.href = 'login.html';
        }

        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.8); }
            }
        `;
        document.head.appendChild(style);
