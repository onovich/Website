document.addEventListener('DOMContentLoaded', () => {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        const sidebarContent = `
            <div class="sidebar">
                <h2><a href="/index.html">Onovich</a></h2>
                <a href="#" class="active">CODES</a>
                <a href="#">GAMES</a>
                <a href="#">PIXEL ARTS</a>
                <a href="#">ILLUSTRATIONS</a>
                <a href="#">GIFS</a>
                <a href="#">GRAPHIC DESIGNS</a>
                <a href="#">PHOTOS</a>
                <a href="#">POEMS</a>
                <a href="#">SNS</a>
                <a href="#">MESSAGE</a>
            </div>
        `;
        sidebarPlaceholder.innerHTML = sidebarContent;
    } else {
        console.error('Sidebar placeholder not found');
    }
});