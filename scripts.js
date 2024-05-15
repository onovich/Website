document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('projects');
    const overlay = document.getElementById('overlay');

    const projectElements = document.querySelectorAll('.project');

    projectElements.forEach(projectElement => {
        const title = projectElement.getAttribute('data-title');
        const description = projectElement.getAttribute('data-description');
        const link = projectElement.getAttribute('data-link');
        const linkLabel = projectElement.getAttribute('data-link-label');
        const img = projectElement.getAttribute('data-img');
        const imgLink = projectElement.getAttribute('data-img-link');

        const imgLinkAttribute = imgLink ? `data-img-link="${imgLink}"` : '';
        projectElement.innerHTML = `
            <img src="${img}" alt="${title}" ${imgLinkAttribute}>
            <h3><b>${title}</b></h3>
            <p>${description}</p>
            ${link ? `<a href="${link}" target="_blank">${linkLabel}</a>` : ''}
        `;

        // 点击图片时的处理
        projectElement.querySelector('img').addEventListener('click', () => {
            const imgLink = projectElement.querySelector('img').getAttribute('data-img-link');
            if (imgLink) {
                window.location.href = imgLink;
            } else {
                projectElement.querySelector('img').classList.toggle('expanded');
                overlay.classList.toggle('active');
            }
        });

        projectContainer.appendChild(projectElement);
    });

    overlay.addEventListener('click', () => {
        const expandedImg = document.querySelector('img.expanded');
        if (expandedImg) {
            expandedImg.classList.remove('expanded');
        }
        overlay.classList.remove('active');
    });
});