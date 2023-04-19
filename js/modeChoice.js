
//* Mode Choice start

const lightMode = document.querySelector(".light-mode-choice-i");
const darkMode = document.querySelector(".dark-mode-choice-i");
const systemMode = document.querySelector(".system-mode-choice-i");
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

// Toggle modes when user clicks on options
darkMode.addEventListener("click", function () {
    items.forEach((item) => item.classList.add("dark-mode-active"));
    document.cookie = "mode=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
});

lightMode.addEventListener("click", function () {
    items.forEach((item) => item.classList.remove("dark-mode-active"));
    document.cookie = "mode=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
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
    window.location.reload();
});

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






// const lightMode = document.querySelector(".light-mode-choice-i");
// const darkMode = document.querySelector(".dark-mode-choice-i");
// const items = document.querySelectorAll("body");

// darkMode.addEventListener("click", function () {
//     items.forEach((item) => item.classList.toggle("dark-mode-active"));
//     if (document.body.classList.contains("dark-mode-active")) {
//         document.cookie = "dark-mode=on; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
//     } else {
//         document.cookie = "dark-mode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//     }
// });

// lightMode.addEventListener("click", function () {
//     items.forEach((item) => item.classList.remove("dark-mode-active"));
//     document.cookie = "dark-mode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
// });

// // Check if the cookie exists and set the dark mode accordingly
// const darkModeCookie = document.cookie.split(";").find((c) => c.trim().startsWith("dark-mode="));
// if (darkModeCookie && darkModeCookie.split("=")[1] === "on") {
//     document.body.classList.add("dark-mode-active");
// };





//* Mode Choice end