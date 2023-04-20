
//* Mode Choice start

const lightMode = document.querySelector(".lightMode");
const darkMode = document.querySelector(".darkMode");
const systemMode = document.querySelector(".systemMode");
const items = document.querySelectorAll("body");

// Determine user's system preference
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
    document.body.classList.add("dark-mode-active");
    darkMode.checked = true;
} else {
    document.body.classList.remove("dark-mode-active");
    lightMode.checked = true;
}

// function setModeActiveCookie() {
//     const selectedMode = document.querySelector('.modeActive');
//     if (selectedMode) {
//         document.cookie = `modeActive=${selectedMode.classList[0]}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
//     }
// }

// Toggle modes when user clicks on options
darkMode.addEventListener("click", function () {
    items.forEach((item) => item.classList.add("dark-mode-active"));
    document.cookie = "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    darkMode.classList.add('modeActive');
    lightMode.classList.remove('modeActive');
    systemMode.classList.remove('modeActive');
    //toggleDarkMode()
});

lightMode.addEventListener("click", function () {
    items.forEach((item) => item.classList.remove("dark-mode-active"));
    document.cookie = "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    lightMode.classList.add('modeActive');
    darkMode.classList.remove('modeActive');
    systemMode.classList.remove('modeActive');
    //toggleDarkMode()
});

systemMode.addEventListener("click", function () {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
        items.forEach((item) => item.classList.add("dark-mode-active"));
        document.cookie = "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    } else {
        items.forEach((item) => item.classList.remove("dark-mode-active"));
        document.cookie = "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }
    systemMode.classList.add('modeActive');
    lightMode.classList.remove('modeActive');
    darkMode.classList.remove('modeActive');
    window.location.reload();
});

// kullanıcının sistem tercihi 
// const prefersDarkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

// function toggleDarkMode() {
//     const darkModeActive = document.body.classList.contains("dark-mode-active");
//     if (darkModeActive) {
//         document.cookie = "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
//     } else {
//         document.cookie = "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
//     }
//     prefersDarkModeQuery.removeListener(toggleDarkMode);
//     window.location.reload();
// }

// prefersDarkModeQuery.addListener(toggleDarkMode);


// Check if the cookie exists and set the mode accordingly
const modeCookie = document.cookie.split(";").find((c) => c.trim().startsWith("mode="));
if (modeCookie) {
    const mode = modeCookie.split("=")[1];
    if (mode === "dark") {
        items.forEach((item) => item.classList.add("dark-mode-active"));
        darkMode.checked = true;
    } else if (mode === "light") {
        items.forEach((item) => item.classList.remove("dark-mode-active"));
        lightMode.checked = true;
    }
}

//* Mode Choice end