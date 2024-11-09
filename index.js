function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.style.animation = 'fadeOut 0.3s ease-out';
        project.style.opacity = 0;

        setTimeout(() => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
                project.style.animation = 'fadeInUp 0.5s ease-in-out';
                project.style.opacity = 1;
            } else {
                project.style.display = 'none';
            }
        }, 300);
    });
}

function saveContactData(event) {
    event.preventDefault();
    const name = document.querySelector('#contactForm input[type="text"]').value;
    const email = document.querySelector('#contactForm input[type="email"]').value;
    const message = document.querySelector('#contactForm textarea').value;

    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);
    
    alert('Your message has been saved!');
}

function loadContactData() {
    const savedName = localStorage.getItem('contactName');
    const savedEmail = localStorage.getItem('contactEmail');
    const savedMessage = localStorage.getItem('contactMessage');
    
    if (savedName) {
        document.querySelector('#contactForm input[type="text"]').value = savedName;
    }
    if (savedEmail) {
        document.querySelector('#contactForm input[type="email"]').value = savedEmail;
    }
    if (savedMessage) {
        document.querySelector('#contactForm textarea').value = savedMessage;
    }
}

window.addEventListener('load', () => {
    loadContactData();
    document.querySelector('#contactForm').reset();
    localStorage.removeItem('contactName');
    localStorage.removeItem('contactEmail');
    localStorage.removeItem('contactMessage');
});

document.querySelector('#contactForm').addEventListener('submit', saveContactData);
