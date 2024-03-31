//your JS code here. If required.

const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');

// Load saved details from local storage (if any)
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
if (savedUsername && savedPassword) {
    const existingButton = document.createElement('button');
    existingButton.id = 'existing';
    existingButton.textContent = 'Login as existing user';
    form.appendChild(existingButton);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberCheckbox.checked) {
        // Save details to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove stored details from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
});

// Handle existing user login
const existingButton = document.getElementById('existing');
if (existingButton) {
    existingButton.addEventListener('click', () => {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    });
}
