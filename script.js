function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Both fields are required!");
    } else {
        alert(`Welcome, ${username}!`);
    }
}
