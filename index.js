let toggle = document.querySelector('.toggle-theme');

function toggleTheme(e) {
    e.preventDefault();

    if (document.body.classList.contains('fall-theme')) {
        document.body.classList.remove('fall-theme');
        toggle.innerText = '🎃 Make it Fall 🎃';
    } else {
        document.body.classList.add('fall-theme');
        toggle.innerText = 'Flamingo Time';
    }
};

toggle.addEventListener('click', toggleTheme);