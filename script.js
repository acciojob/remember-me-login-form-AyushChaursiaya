document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const rememberCheckbox = document.getElementById('checkbox');
        const submitButton = document.getElementById('submit');

        // Check if there are saved details
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (savedUsername && savedPassword) {
            const existingButton = document.createElement('button');
            existingButton.id = 'existing';
            existingButton.textContent = 'Login as existing user';
            form.appendChild(existingButton);
        }

        // Function to handle form submission
        function handleSubmit(event) {
            event.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (rememberCheckbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert('Logged in as ' + username);
        }

        // Function to handle login as existing user
        function handleExistingLogin() {
            const savedUsername = localStorage.getItem('username');
            alert('Logged in as ' + savedUsername);
        }

        // Event listeners
        form.addEventListener('submit', handleSubmit);
        
        if (savedUsername && savedPassword) {
            const existingButton = document.getElementById('existing');
            existingButton.addEventListener('click', handleExistingLogin);
        }
    });