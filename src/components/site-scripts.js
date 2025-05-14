// BlackLine IT Website Scripts

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdowns();
    initCounters();
    initFaqAccordion();
    initAnimations();
});

// Mobile Menu Functions
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navContainer = document.getElementById('main-menu');
    const bodyElement = document.body;

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navContainer.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navContainer.classList.contains('active')) {
                bodyElement.style.overflow = 'hidden';
            } else {
                bodyElement.style.overflow = '';
            }
        });
    }
    
    // Handle window resize for mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            // Reset mobile menu styles when returning to desktop size
            const dropdownItems = document.querySelectorAll('.has-dropdown');
            dropdownItems.forEach(function(item) {
                item.classList.remove('dropdown-active');
            });

            if (navContainer && navContainer.classList.contains('active') && menuToggle) {
                navContainer.classList.remove('active');
                menuToggle.classList.remove('active');
                bodyElement.style.overflow = '';
            }
        }
    });
}

// Dropdown Menu Functions
function initDropdowns() {
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const parent = toggle.parentElement;
                if (parent) {
                    parent.classList.toggle('dropdown-active');
                }
            }
        });
    });
}

// Counter Animation Functions
function initCounters() {
    const counterElements = document.querySelectorAll('.counter');
    
    if (counterElements.length > 0) {
        const observerCounter = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    startCounters();
                    observerCounter.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Observe hero stats
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            observerCounter.observe(heroStats);
        }
        
        // Observe industry stats
        const industryStats = document.querySelector('.industry-stat');
        if (industryStats) {
            observerCounter.observe(industryStats);
        }
    }
}

function startCounters() {
    const counterElements = document.querySelectorAll('.counter');
    
    counterElements.forEach(function(counter) {
        const targetText = counter.textContent || '0';
        const targetValue = parseInt(targetText, 10);
        let countValue = 0;
        const durationMs = 2000; // 2 seconds
        const incrementValue = targetValue / (durationMs / 30); // Update every 30ms
        
        const updateCounter = function() {
            countValue += incrementValue;
            if (countValue < targetValue) {
                counter.textContent = Math.ceil(countValue).toString();
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = targetValue.toString();
            }
        };
        
        updateCounter();
    });
}

// FAQ Accordion Functions
function initFaqAccordion() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    if (faqHeaders.length > 0) {
        faqHeaders.forEach(function(header) {
            header.addEventListener('click', function() {
                const faqItem = header.closest('.faq-item');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(function(item) {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle the clicked FAQ item
                if (faqItem) {
                    faqItem.classList.toggle('active');
                }
            });
        });
    }
}

// Animation Functions
function initAnimations() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.service-item, .faq-item, .cta-grid > div');
    animatedElements.forEach(function(element, index) {
        element.classList.add('animate-on-scroll');
        // Add staggered delay
        element.style.transitionDelay = (index * 0.1) + 's';
    });
}
