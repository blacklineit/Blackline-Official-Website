/**
 * Particle animations for the digital transformation image
 * Creates interactive particles around the image element
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if anime.js is loaded
    if (typeof anime === 'undefined') {
        console.warn('anime.js is not loaded. Please include anime.js before this script.');
        return;
    }    // Check for particle animation containers
    const particleContainers = ['animation-particles', 'hero-particles'];
    const animationImages = document.querySelectorAll('.animation-image.particle-animation');
      if (animationImages.length === 0) {
        return;
    }
    
    // Process each particle container
    particleContainers.forEach(containerId => {
        const particleContainer = document.getElementById(containerId);
        if (!particleContainer) return;
        
        createParticlesInContainer(particleContainer);
    });
    
    // Animate all animation images
    animationImages.forEach(animationImage => {
        animateImage(animationImage);
    });    // Define the fallback for anime.random if it doesn't exist
    if (!anime.random) {
        anime.random = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }
      // Function to create particles in a container
    function createParticlesInContainer(container) {
        const particleCount = container.id === 'hero-particles' ? 100 : 60; // Significantly more particles
        const colors = ['#ff6600', '#ffffff', '#003366', '#00ccff', '#ff9933', '#66ccff']; // More color variety
        
        // Get the position and dimensions of the container
        const containerRect = container.getBoundingClientRect();
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
              // Random size - bigger particles for more visibility
            const size = anime.random(5, container.id === 'hero-particles' ? 25 : 18);
            
            // Random position around the image
            const posX = anime.random(-50, containerRect.width + 50);
            const posY = anime.random(-50, containerRect.height + 50);
            
            // Style the particle with glow effect
            particle.style.position = 'absolute';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            const particleColor = colors[anime.random(0, colors.length - 1)];
            particle.style.backgroundColor = particleColor;
            particle.style.boxShadow = `0 0 ${size/2}px ${particleColor}`; // Add glow effect
            particle.style.borderRadius = '50%';
            particle.style.top = posY + 'px';
            particle.style.left = posX + 'px';
            particle.style.opacity = anime.random(4, 9) / 10; // Higher opacity
            
            // Add to container
            container.appendChild(particle);
              // Animate the particle with more dramatic movements
            anime({
                targets: particle,
                translateX: [
                    { value: anime.random(-100, 100), duration: anime.random(1500, 4000) },
                    { value: anime.random(-100, 100), duration: anime.random(1500, 4000) }
                ],
                translateY: [
                    { value: anime.random(-100, 100), duration: anime.random(1500, 4000) },
                    { value: anime.random(-100, 100), duration: anime.random(1500, 4000) }
                ],
                scale: [
                    { value: anime.random(0.3, 2.2), duration: anime.random(1000, 3000) },
                    { value: anime.random(0.8, 1.5), duration: anime.random(1000, 3000) }
                ],
                opacity: [
                    { value: anime.random(0.3, 1), duration: anime.random(1000, 2000) },
                    { value: anime.random(0.5, 0.9), duration: anime.random(1000, 2000) }
                ],
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true
            });
        }
    }
      // Function to animate the image with more pronounced effect
    function animateImage(image) {
        // Create a more dramatic pulsing and floating effect
        anime({
            targets: image,
            translateY: [
                { value: -20, duration: 2000 },
                { value: 20, duration: 2000 }
            ],
            translateX: [
                { value: -10, duration: 2500 },
                { value: 10, duration: 2505 }
            ],
            opacity: [
                { value: 0.85, duration: 1800 },
                { value: 1, duration: 1800 }
            ],
            scale: [
                { value: 1.05, duration: 2200 },
                { value: 1, duration: 2200 }
            ],
            filter: [
                { value: 'brightness(1.1) contrast(1.05)', duration: 2000 },
                { value: 'brightness(0.95) contrast(1)', duration: 2000 }
            ],
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true
        });
    }
      // Function to add special large pulsing particles for dramatic effect
    function addPulsingParticles(container, count = 5) {
        if (!container) return;
        
        const colors = ['#ff6600', '#ff9933', '#66ccff'];
        const containerRect = container.getBoundingClientRect();
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('pulse-particle');
            
            // Large size for impact
            const size = anime.random(40, 80);
            
            // Position in center area
            const posX = containerRect.width/2 + anime.random(-containerRect.width/3, containerRect.width/3);
            const posY = containerRect.height/2 + anime.random(-containerRect.height/3, containerRect.height/3);
            
            // Style the pulsing particle
            particle.style.position = 'absolute';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            const particleColor = colors[anime.random(0, colors.length - 1)];
            particle.style.backgroundColor = particleColor;
            particle.style.boxShadow = `0 0 ${size}px ${particleColor}`;
            particle.style.borderRadius = '50%';
            particle.style.top = posY + 'px';
            particle.style.left = posX + 'px';
            particle.style.opacity = 0.1;
            particle.style.zIndex = 1;
            
            // Add to container
            container.appendChild(particle);
            
            // Create dramatic pulsing effect
            anime({
                targets: particle,
                scale: [
                    { value: 0.5, duration: 1000, delay: i * 300 },
                    { value: 2, duration: 3000 },
                    { value: 0.5, duration: 3000 },
                ],
                opacity: [
                    { value: 0.05, duration: 1000, delay: i * 300 },
                    { value: 0.3, duration: 3000 },
                    { value: 0.05, duration: 3000 },
                ],
                easing: 'easeInOutSine',
                loop: true
            });
        }
    }

    // Add special pulsing particles to the hero section
    const heroParticlesContainer = document.getElementById('hero-particles');
    if (heroParticlesContainer) {
        addPulsingParticles(heroParticlesContainer, 8);
    }
});
