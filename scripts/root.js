



// SCREEN MODE SWITCHER

function changeMode() {
    let bodyEle = document.body;
    let modeSwitcherButton = document.getElementById("mode-changer");

    // Check the current mode
    if (bodyEle.classList.contains('light-mode')) {
        // Switch for dark mode
        bodyEle.classList.remove('light-mode');
        bodyEle.classList.add('dark-mode');
        modeSwitcherButton.innerText = "GO LIGHT";
    } else {
        // Switch for light mode
        bodyEle.classList.remove('dark-mode');
        bodyEle.classList.add('light-mode');
        modeSwitcherButton.innerText = "GO DARK";
    }
}