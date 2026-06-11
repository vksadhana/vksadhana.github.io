function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    document.getElementById('moon-icon').style.display = isDark ? 'block' : 'none';
    document.getElementById('sun-icon').style.display = isDark ? 'none' : 'block';
}

// apply saved theme on load
(function() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    if (saved === 'dark') {
        const moon = document.getElementById('moon-icon');
        const sun = document.getElementById('sun-icon');
        if (moon) moon.style.display = 'none';
        if (sun) sun.style.display = 'block';
    }
})();
