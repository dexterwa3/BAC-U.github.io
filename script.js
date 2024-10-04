document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    console.log("Toggle Button:", toggleBtn);
    console.log("Sidebar:", sidebar);
    console.log("Main Content:", mainContent);

    if (toggleBtn && sidebar && mainContent) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('collapsed');
        });
    } else {
        console.error("One or more elements were not found!");
    }
    //js
});
