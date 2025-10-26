document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Example: hardcoded credentials for demonstration ONLY
  const demoUsername = 'admin';
  const demoPassword = 'password123';

  if (username === demoUsername && password === demoPassword) {
    alert('Login successful!');
    // Redirect to dashboard or next page
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password.');
  }
});
