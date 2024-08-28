// script.js

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-card');

    skills.forEach(skill => {
        // Add hover effect
        skill.addEventListener('mouseover', () => {
            skill.classList.add('hover');
        });

        skill.addEventListener('mouseout', () => {
            skill.classList.remove('hover');
        });
    });

    // Optional: Handle form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    // Add animation for text appearing
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Handle loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');
    loadingScreen.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingScreen);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 300); // Time for fading out
        }, 1000); // Delay before hiding
    });
});
