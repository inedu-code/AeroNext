// Navigation scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Image fade effect for hero section
        let currentImageIndex = 0;
        const images = document.querySelectorAll('.fade-image');
        
        function changeImage() {
            // Remove active class from current image
            images[currentImageIndex].classList.remove('active');
            
            // Move to next image
            currentImageIndex = (currentImageIndex + 1) % images.length;
            
            // Add active class to next image
            images[currentImageIndex].classList.add('active');
        }
        
        // Change image every 5 seconds
        setInterval(changeImage, 5000);

        // Fade-in animation on scroll
        function checkFade() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                // If element is in viewport
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Check fade on load and scroll
        window.addEventListener('load', checkFade);
        window.addEventListener('scroll', checkFade);
        
        // Initial check
        checkFade();