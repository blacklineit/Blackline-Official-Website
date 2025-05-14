/**
 * Main animations controller script for BlackLine IT website
 * Loads and initializes all animations across different pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if anime.js is loaded
    if (typeof anime === 'undefined') {
        console.warn('anime.js is not loaded. Please include anime.js before this script.');
        return;
    }

    // Define the fallback for anime.random if it doesn't exist
    if (!anime.random) {
        anime.random = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }

    // Initialize counters for statistics
    const counterElements = document.querySelectorAll('.counter');
    if (counterElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterElement = entry.target;
                    const targetValue = parseInt(counterElement.textContent, 10);
                    const duration = 2000;
                    let startTimestamp = null;
                    const startValue = 0;

                    function step(timestamp) {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);
                        counterElement.textContent = currentValue;
                        
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    }

                    window.requestAnimationFrame(step);
                    counterObserver.unobserve(counterElement);
                }
            });
        }, observerOptions);

        counterElements.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Hero section animations
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        anime({
            targets: '.hero-content h1',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 300
        });

        anime({
            targets: '.hero-content p',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(150, {start: 500})
        });

        anime({
            targets: '.hero-content .cta-button',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 800,
            delay: 800
        });

        anime({
            targets: '.hero-stats .stat-item',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(150, {start: 1000})
        });
    }

    // Services section animations
    const serviceItems = document.querySelectorAll('.service-item');
    if (serviceItems.length > 0) {
        const observerOptions = {
            threshold: 0.2
        };

        const servicesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        easing: 'easeOutExpo',
                        duration: 800,
                        delay: 150
                    });
                    servicesObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        serviceItems.forEach(item => {
            servicesObserver.observe(item);
        });
    }

    // FAQ section animations
    const faqHeaders = document.querySelectorAll('.faq-header');
    if (faqHeaders.length > 0) {
        faqHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const faqItem = this.closest('.faq-item');
                const isActive = faqItem.classList.contains('active');

                // Close all FAQs
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Open the clicked FAQ if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
});
