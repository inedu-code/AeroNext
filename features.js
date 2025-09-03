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

        // Tab functionality for feature details
        const tabBtns = document.querySelectorAll('.tab-btn');
        const detailItems = document.querySelectorAll('.detail-item');
        const detailImg = document.getElementById('detail-img');
        
        // Image sources for different tabs
        const tabImages = {
            ai: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
            monitoring: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
            eco: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
        };
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and items
                tabBtns.forEach(b => b.classList.remove('active'));
                detailItems.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show corresponding content
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(`${tabId}-detail`).classList.add('active');
                
                // Change image
                detailImg.src = tabImages[tabId];
            });
        });

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