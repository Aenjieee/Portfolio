// Project add/view logic
const addProjectBtn = document.getElementById('add-project-btn');
const addProjectForm = document.getElementById('add-project-form');
const projectsList = document.getElementById('projects-list');

function getSavedProjects() {
    return JSON.parse(localStorage.getItem('myProjects') || '[]');
}
function saveProjects(projects) {
    localStorage.setItem('myProjects', JSON.stringify(projects));
}
function renderProjects() {
    projectsList.innerHTML = '';
    const projects = getSavedProjects();
    projects.forEach((proj, idx) => {
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
addProjectBtn.addEventListener('click', function() {
    addProjectForm.style.display = addProjectForm.style.display === 'none' ? 'flex' : 'none';
});
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
renderProjects();
const projectsNav = Array.from(document.querySelectorAll('nav a')).find(a => a.textContent.trim() === 'Projects');
if (projectsNav) {
    projectsNav.addEventListener('click', renderProjects);
}
// Export for modal.js
window.getSavedProjects = getSavedProjects;
window.projectsList = projectsList;

// Projects Slideshow Logic
const projects = [
    {
        img: 'assets/projects/highfacility.png',
        label: 'High Facility',
        alt: 'High Facility'
    },
    {
        img: 'assets/projects/businessproposal.png',
        label: 'Business Proposal Website',
        alt: 'Business Proposal Website'
    },
    {
        img: 'assets/projects/studentportal.png',
        label: 'Student Portal (Database System)',
        alt: 'Student Portal'
    },
    {
        img: 'assets/projects/tindahanpos.png',
        label: 'Tindahan POS (System)',
        alt: 'Tindahan POS'
    },
    {
        img: 'assets/projects/uiuxdesign.png',
        label: 'UI/UX Design',
        alt: 'UI/UX Design'
    },
    {
        img: 'assets/projects/digitalarts.png',
        label: 'Digital Arts',
        alt: 'Digital Arts'
    }
];

let currentProject = 0;

function updateProjectSlide() {
    const img = document.getElementById('project-slide-img');
    const label = document.getElementById('project-slide-label');
    if (!img || !label) return;
    img.src = projects[currentProject].img;
    img.alt = projects[currentProject].alt;
    label.textContent = projects[currentProject].label;
}

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('slide-prev');
    const nextBtn = document.getElementById('slide-next');
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            currentProject = (currentProject - 1 + projects.length) % projects.length;
            updateProjectSlide();
        });
        nextBtn.addEventListener('click', function() {
            currentProject = (currentProject + 1) % projects.length;
            updateProjectSlide();
        });
    }
    updateProjectSlide();
}); 