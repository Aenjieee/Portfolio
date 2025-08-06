// Add smooth scrolling and interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card, .dark-project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            }, 150);
        });
    });

    // Parallax effect for background
    document.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });

    // Dynamic tag colors
    const tags = document.querySelectorAll('.tag');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    tags.forEach((tag, index) => {
        const randomColor = colors[index % colors.length];
        tag.style.background = `${randomColor}20`;
        tag.style.color = randomColor;
        tag.style.borderLeft = `3px solid ${randomColor}`;
    });

    // Show OJT Experience section when Experience is clicked
    // Theme toggle functionality
    // Navigation and sidebar link functionality
    function hideAllSections() {
        document.querySelectorAll('.content > div').forEach(div => div.style.display = 'none');
    }
    // Top nav links
    const navMap = {
        'HomePage': 'homepage-section',
        'Experience': 'ojt-experience',
        'Projects': 'projects-section',
        'Skills': 'skills-section',
        'Contact': 'contact-section'
    };
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            const sectionId = navMap[this.textContent.trim()];
            if(sectionId) document.getElementById(sectionId).style.display = 'block';
        });
    });
    // Sidebar links
    const sidebarMap = {
        'Overview': 'overview-section',
        'Web Apps': 'webapps-section',
        'Mobile': 'mobile-section',
        'Design': 'design-section',
        'Code': 'code-section'
    };
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            const sectionId = sidebarMap[this.textContent.trim()];
            if(sectionId) document.getElementById(sectionId).style.display = 'block';
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    let darkMode = false;
    themeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.style.background = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
            document.body.style.color = '#f3f3f3';
            themeToggle.textContent = 'Light Mode';
            // Cards and nav
            document.querySelectorAll('.project-card, .dark-project-card').forEach(card => {
                card.style.background = 'rgba(20, 20, 30, 0.95)';
                card.style.color = '#fff';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                card.style.border = '1px solid rgba(255,255,255,0.1)';
            });
            document.querySelectorAll('.project-title, .project-description, .project-tags .tag').forEach(el => {
                el.style.color = '#fff';
            });
            document.querySelector('nav').style.background = 'rgba(30,30,40,0.95)';
            document.querySelector('nav').style.color = '#fff';
        } else {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.body.style.color = '#333';
            themeToggle.textContent = 'Dark Mode';
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.background = 'rgba(255,255,255,0.95)';
                card.style.color = '#333';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                card.style.border = 'none';
            });
            document.querySelectorAll('.dark-project-card').forEach(card => {
                card.style.background = 'rgba(20, 20, 30, 0.95)';
                card.style.color = '#fff';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                card.style.border = '1px solid rgba(255,255,255,0.1)';
            });
            document.querySelectorAll('.project-title, .project-description, .project-tags .tag').forEach(el => {
                el.style.color = '';
            });
            document.querySelector('nav').style.background = 'rgba(255,255,255,0.95)';
            document.querySelector('nav').style.color = '#333';
        }
    });

    // Add Project functionality
    const addProjectBtn = document.getElementById('add-project-btn');
    const addProjectForm = document.getElementById('add-project-form');
    const projectsList = document.getElementById('projects-list');

    addProjectBtn.addEventListener('click', function() {
        addProjectForm.style.display = addProjectForm.style.display === 'none' ? 'flex' : 'none';
    });

    // Utility to get projects from localStorage
    function getSavedProjects() {
        return JSON.parse(localStorage.getItem('myProjects') || '[]');
    }
    // Utility to save projects to localStorage
    function saveProjects(projects) {
        localStorage.setItem('myProjects', JSON.stringify(projects));
    }
    // Render all projects from localStorage
    function renderProjects() {
        projectsList.innerHTML = '';
        const projects = getSavedProjects();
        projects.forEach((proj, idx) => {
            // Gradient backgrounds
            const gradients = [
                'linear-gradient(135deg, #ffeaa7, #fab1a0)',
                'linear-gradient(135deg, #74b9ff, #0984e3)',
                'linear-gradient(135deg, #fd79a8, #e84393)',
                'linear-gradient(135deg, #a29bfe, #6c5ce7)',
                'linear-gradient(135deg, #55efc4, #00b894)'
            ];
            const card = document.createElement('div');
            card.className = 'project-card-custom styled';
            card.style.background = gradients[idx % gradients.length];
            card.innerHTML = `
                <div class="project-img-wrap"><img src="${proj.image}" alt="${proj.title}" /></div>
                <div class="project-card-content">
                    <a href="${proj.link}" target="_blank">${proj.title}</a>
                    <p class="project-desc">${proj.description}</p>
                    <div class="project-tags-wrap">
                        ${proj.tags.map((tag, i) => `<span class="tag styled-tag" data-tag-idx="${i}">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsList.appendChild(card);
            // Color tags
            const tagColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#fab1a0', '#e84393'];
            card.querySelectorAll('.styled-tag').forEach((el, i) => {
                const color = tagColors[i % tagColors.length];
                el.style.background = color + '20';
                el.style.color = color;
                el.style.borderLeft = `3px solid ${color}`;
                el.style.borderRadius = '16px';
                el.style.padding = '4px 12px';
                el.style.marginRight = '6px';
                el.style.fontSize = '0.95em';
                el.style.display = 'inline-block';
                el.style.marginTop = '6px';
            });
        });
    }

    addProjectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('project-title').value;
        const link = document.getElementById('project-link').value;
        const description = document.getElementById('project-description').value;
        const tags = document.getElementById('project-tags').value.split(',').map(t => t.trim()).filter(Boolean);
        const imageInput = document.getElementById('project-image-file');
        const file = imageInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            // Save to localStorage
            const projects = getSavedProjects();
            projects.push({
                title,
                link,
                description,
                tags,
                image: event.target.result
            });
            saveProjects(projects);
            renderProjects();
            addProjectForm.reset();
            addProjectForm.style.display = 'none';
        };
        reader.readAsDataURL(file);
    });

    // Render projects on page load
    renderProjects();
    // Optionally, re-render when Projects section is shown
    const projectsNav = Array.from(document.querySelectorAll('nav a')).find(a => a.textContent.trim() === 'Projects');
    if (projectsNav) {
        projectsNav.addEventListener('click', renderProjects);
    }

    // Modal logic for viewing project details
    const viewMyWorkBtn = document.getElementById('view-my-work-btn');
    const projectModal = document.getElementById('project-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectTags = document.getElementById('modal-project-tags');
    const modalProjectLink = document.getElementById('modal-project-link');

    function showProjectModal(project) {
        modalProjectImage.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
        modalProjectTitle.textContent = project.title;
        modalProjectDescription.textContent = project.description;
        modalProjectTags.innerHTML = project.tags.map((tag, i) => `<span class="tag styled-tag" data-tag-idx="${i}">${tag}</span>`).join('');
        // Color tags
        const tagColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#fab1a0', '#e84393'];
        modalProjectTags.querySelectorAll('.styled-tag').forEach((el, i) => {
            const color = tagColors[i % tagColors.length];
            el.style.background = color + '20';
            el.style.color = color;
            el.style.borderLeft = `3px solid ${color}`;
        });
        modalProjectLink.href = project.link;
        projectModal.style.display = 'flex';
        setTimeout(() => { projectModal.style.opacity = 1; }, 10);
    }
    function hideProjectModal() {
        projectModal.style.opacity = 0;
        setTimeout(() => { projectModal.style.display = 'none'; }, 300);
    }
    if (viewMyWorkBtn) {
        viewMyWorkBtn.addEventListener('click', function() {
            const projects = getSavedProjects();
            if (projects.length > 0) {
                showProjectModal(projects[0]);
            }
        });
    }
    if (closeProjectModal) {
        closeProjectModal.addEventListener('click', hideProjectModal);
    }
    // Clicking a project card opens modal for that project
    projectsList.addEventListener('click', function(e) {
        let card = e.target.closest('.project-card-custom.styled');
        if (!card) return;
        const idx = Array.from(projectsList.children).indexOf(card);
        const projects = getSavedProjects();
        if (projects[idx]) {
            showProjectModal(projects[idx]);
        }
    });
    // Optional: close modal on overlay click
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) hideProjectModal();
    });
}); 