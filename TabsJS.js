document.addEventListener("DOMContentLoaded", function() {
    let tabs = document.querySelectorAll('.tab');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(t) {
                t.classList.remove('tab-active');
            });

            let tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            tab.classList.add('tab-active');
            if (tab.classList.contains('tab-coding')) {
                document.getElementById('coding-content').classList.add('active');
            } else if (tab.classList.contains('tab-jv')) {
                document.getElementById('jv-content').classList.add('active');
            } else if (tab.classList.contains('tab-design')) {
                document.getElementById('design-content').classList.add('active');
            } else if (tab.classList.contains('tab-3d')) {
                document.getElementById('3d-content').classList.add('active');
            } else if (tab.classList.contains('tab-marketing')) {
                document.getElementById('marketing-content').classList.add('active');
            }
        });
    });
});
