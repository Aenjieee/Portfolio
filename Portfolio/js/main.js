// Enhanced Navigation and Dark Mode for Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Section IDs in order
    const sectionIds = [
        'homepage-section',
        'experience-main-section',
        'projects-section',
        'skills-section',
        'contact-section'
    ];

    // Hide all main sections
    function hideAllSections() {
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    }

    // Show a section by ID
    function showSection(id) {
        hideAllSections();
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'flex';
            el.setAttribute('tabindex', '-1');
            el.focus();
        }
        // If Projects, re-initialize slideshow
        if (id === 'projects-section' && typeof updateProjectSlide === 'function') {
            currentProject = 0;
            updateProjectSlide();
        }
    }

    // Map nav label to section ID
    const sidebarNavMap = {
        'About': 'homepage-section',
        'Experience': 'experience-main-section',
        'Projects': 'projects-section',
        'Skills': 'skills-section',
        'Contact': 'contact-section'
    };

    // Navigation click handler
    document.querySelectorAll('.vertical-nav .nav-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active and aria-current from all nav items
            document.querySelectorAll('.vertical-nav .nav-item').forEach(l => {
                l.classList.remove('active');
                l.removeAttribute('aria-current');
            });
            // Add active and aria-current to clicked link
            this.classList.add('active');
            this.setAttribute('aria-current', 'page');
            // Show the correct section
            const label = this.querySelector('.nav-label').textContent.trim();
            const sectionId = sidebarNavMap[label];
            if (sectionId) showSection(sectionId);
        });
    });

    // Show About by default
    showSection('homepage-section');
    const aboutNav = document.querySelector('.vertical-nav .nav-item .nav-label');
    if (aboutNav) aboutNav.parentElement.classList.add('active');

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const bulbIcon = document.getElementById('bulb-icon');
    let darkMode = false;
    function updateBulb() {
        if (darkMode) {
            themeToggle.classList.add('on');
            themeToggle.classList.remove('off');
            bulbIcon.textContent = '🌙'; // Night
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggle.classList.remove('on');
            themeToggle.classList.add('off');
            bulbIcon.textContent = '☀️'; // Day
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
    themeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        updateBulb();
    });
    updateBulb();

    // Smooth transitions for theme and section changes
    document.body.style.transition = 'background 0.4s, color 0.4s';
}); 