const projects = [
    { title: 'Ninja Ming', description: '开发中 (协助开发)', link: 'https://github.com/onovich/Swing', img: 'images/codes/codecover_compass.png', imgLink: 'https://example.com/ninja' },
    { title: 'Oshi', description: '2024 研发中', img: 'images/codes/codecover_compass.png' },
    { title: 'Alter', description: '2024 研发中', img: 'images/codes/codecover_compass.png' },
    { title: 'Leap', description: '2024 研发中', img: 'images/codes/codecover_compass.png' },
    { title: 'Zangeki60s', description: '2024 研发中', img: 'images/codes/codecover_compass.png' },
    { title: 'Ping', description: '2024.3', link: 'https://new-link.com/ping', img: 'images/codes/codecover_compass.png', imgLink: 'https://example.com/ping' },
    { title: 'FrogVillage', description: '已推出 (合作开发)', link: 'https://new-link.com/frogvillage', img: 'images/codes/codecover_compass.png' },
    { title: 'VillageTD', description: '已推出 (协助开发)', link: 'https://new-link.com/villagetd', img: 'images/codes/codecover_compass.png' },
    { title: 'Narrow', description: '已推出', img: 'images/codes/codecover_compass.png' },
];

const projectContainer = document.getElementById('projects');
const overlay = document.getElementById('overlay');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const imgLinkAttribute = project.imgLink ? `data-img-link="${project.imgLink}"` : '';
    projectElement.innerHTML = `
        <img src="${project.img}" alt="${project.title}" ${imgLinkAttribute}>
        <h3><b>${project.title}</b></h3>
        <p>${project.description}</p>
        ${project.link ? `<a href="${project.link}" target="_blank">Github</a>` : ''}
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