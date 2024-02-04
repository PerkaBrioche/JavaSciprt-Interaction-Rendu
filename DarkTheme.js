document.addEventListener("DOMContentLoaded", function() {
    let darkModeButton = document.getElementById('darkModeButton');
    let isDarkMode = false;

    darkModeButton.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        toggleDarkMode(isDarkMode);
    });

    function toggleDarkMode(isDark) {
        let sunIcon = document.getElementById('sunIcon');
        let moonIcon = document.getElementById('moonIcon');

        if (isDark) {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#fff';
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
            darkModeButton.classList.remove('light-mode');
            darkModeButton.classList.add('dark-mode');
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
            darkModeButton.classList.remove('dark-mode');
            darkModeButton.classList.add('light-mode');
        }
    }


});
