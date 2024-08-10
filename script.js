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
