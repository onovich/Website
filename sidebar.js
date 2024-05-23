document.addEventListener('DOMContentLoaded', () => {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        const sidebarContent = `
            <div class="sidebar">
                <h2><a href="index.html">Onovich</a></h2>
                <a href="codes.html" class="active">CODES</a>
                <a href="games.html">GAMES</a>
                <a href="pixel-arts.html">PIXEL ARTS</a>
                <a href="illustrations.html">ILLUSTRATIONS</a>
                <a href="gifs.html">GIFS</a>
                <a href="graphic-designs.html">GRAPHIC DESIGNS</a>
                <a href="photos.html">PHOTOS</a>
                <a href="poems.html">POEMS</a>
                <a href="sns.html">SNS</a>
                <a href="message.html">MESSAGE</a>
            </div>
        `;
        sidebarPlaceholder.innerHTML = sidebarContent;
    } else {
        console.error('Sidebar placeholder not found');
    }
});