// ===== SMOOTH SCROLLING ===== 
// This makes navigation links scroll smoothly to their sections instead of jumping

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section ID from the link
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll smoothly to the target section
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATION ===== 
// This makes elements fade in as you scroll down the page

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // When an element comes into view, add the fadeIn animation
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all interest cards and gallery items for scroll animation
document.querySelectorAll('.interest-card, .gallery-item').forEach(el => {
    observer.observe(el);
});

// ===== ACTIVE NAVIGATION LINK ===== 
// This highlights the current section in the navigation bar as you scroll

window.addEventListener('scroll', () => {
    let current = '';
    
    // Check which section is currently in view
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update the active link in navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== WELCOME MESSAGE ===== 
// This logs a fun message to the browser console when someone visits

console.log('👋 Welcome to Claire\'s personal website! 🐧');
console.log('💜 Built with HTML, CSS, and JavaScript');
console.log('✨ Made in 8th grade with passion for coding!');
