function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.innerHTML = "&#128275;"; // Unlocked icon
    } else {
        passwordInput.type = "password";
        toggleIcon.innerHTML = "&#128274;"; // Locked icon
    }
}


function handleLogin() {
    // Handle login logic here
}

function removeEyeIcon() {
    const passwordInput = document.getElementById("password");

    // This removes any child elements that may be added to the password field
    Array.from(passwordInput.parentElement.querySelectorAll('input[type="password"]::-ms-reveal, input[type="password"]::-webkit-clear-button')).forEach(el => {
        el.style.display = 'none';
    });

    // General approach to remove any eye icon added by the browser
    passwordInput.addEventListener('input', () => {
        const nextSibling = passwordInput.nextElementSibling;
        if (nextSibling && nextSibling.tagName === "BUTTON") {
            nextSibling.remove();
        }
    });
}

// Call this function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', removeEyeIcon);
