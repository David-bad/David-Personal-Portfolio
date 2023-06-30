// script.js
function changeText() {
    var paragraph = document.querySelector('p');
    paragraph.textContent = 'Button clicked!';
}

// script.js

// Gallery section functionality
function shuffleGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const gridItems = Array.from(galleryGrid.getElementsByClassName('grid-item'));
    gridItems.forEach(item => {
        item.style.order = Math.floor(Math.random() * gridItems.length).toString();
    });
}

// Projects section functionality
function showDetails(projectId) {
    const projectDetails = document.getElementById('project-details');

    // Clear previous details
    projectDetails.innerHTML = '';

    // Create and populate the project details
    const details = document.createElement('div');
    details.innerHTML = `
        <h4>Details of ${projectId}</h4>
        //<p>Additional details about the project ${projectId} can be displayed here.</p>
        <p>The tertiary management system is a desktop based development project which was developed using netbeans
        IDE and Java as the High Level Programming Language. The Design is user-friendly and adaptive.</>

    `;

    projectDetails.appendChild(details);
}
