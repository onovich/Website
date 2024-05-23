document.addEventListener('DOMContentLoaded', () => {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        const sidebarContent = `
            <div class="sidebar">
                <h2><a href="index.html">Onovich</a></h2>
                <a href="codes.html" class="sidebar-link" data-page="codes">CODES</a>
                <a href="games.html" class="sidebar-link" data-page="games">GAMES</a>
                <a href="pixel-arts.html" class="sidebar-link" data-page="pixel-arts">PIXEL ARTS</a>
                <a href="illustrations.html" class="sidebar-link" data-page="illustrations">ILLUSTRATIONS</a>
                <a href="gifs.html" class="sidebar-link" data-page="gifs">GIFS</a>
                <a href="graphic-designs.html" class="sidebar-link" data-page="graphic-designs">GRAPHIC DESIGNS</a>
                <a href="photos.html" class="sidebar-link" data-page="photos">PHOTOS</a>
                <a href="poems.html" class="sidebar-link" data-page="poems">POEMS</a>
                <a href="sns.html" class="sidebar-link" data-page="sns">SNS</a>
                <a href="message.html" class="sidebar-link" data-page="message">MESSAGE</a>
            </div>
        `;
        sidebarPlaceholder.innerHTML = sidebarContent;

        const currentPage = sidebarPlaceholder.getAttribute('data-page');
        if (currentPage) {
            const activeLink = document.querySelector(`.sidebar-link[data-page="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    } else {
        console.error('Sidebar placeholder not found');
    }
});