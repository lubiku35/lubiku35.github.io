
let modeSwitcherButton = window.document.getElementById("mode-changer");


// SCREEN MODE USER LOOKUP

window.document.addEventListener('DOMContentLoaded', function() {
    let userStoredMode = localStorage.getItem('mode');
    let bodyEle = document.body;
    
    // Check the current mode
    if (userStoredMode === 'dark') {
        // Switch for dark mode
        bodyEle.classList.remove('light-mode');
        bodyEle.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
        modeSwitcherButton.innerText = "GO LIGHT";
    } else {
        // Switch for light mode
        bodyEle.classList.remove('dark-mode');
        bodyEle.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
        modeSwitcherButton.innerText = "GO DARK";
    }
})


// SCREEN MODE SWITCHER

modeSwitcherButton.addEventListener('click', function changeMode() {
    let bodyEle = document.body;

    // Check the current mode
    if (bodyEle.classList.contains('light-mode')) {
        // Switch for dark mode
        bodyEle.classList.remove('light-mode');
        bodyEle.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
        modeSwitcherButton.innerText = "GO LIGHT";
    } else {
        // Switch for light mode
        bodyEle.classList.remove('dark-mode');
        bodyEle.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
        modeSwitcherButton.innerText = "GO DARK";
    }
})


