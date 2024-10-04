document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    // Toggle the collapsed class for both sidebar and main content
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');

    // Adjust the toggle button position when the sidebar is collapsed
    if (sidebar.classList.contains('collapsed')) {
        this.style.left = '10px';
    } else {
        this.style.left = '260px';
    }
});
