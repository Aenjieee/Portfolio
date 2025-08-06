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
        const projects = window.getSavedProjects();
        if (projects.length > 0) {
            showProjectModal(projects[0]);
        }
    });
}
if (closeProjectModal) {
    closeProjectModal.addEventListener('click', hideProjectModal);
}
window.projectsList.addEventListener('click', function(e) {
    let card = e.target.closest('.project-card-custom.styled');
    if (!card) return;
    const idx = Array.from(window.projectsList.children).indexOf(card);
    const projects = window.getSavedProjects();
    if (projects[idx]) {
        showProjectModal(projects[idx]);
    }
});
projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) hideProjectModal();
}); 