const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Call the backend API to authenticate the user
  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // User is authenticated, redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      // User is not authenticated, display error message
      alert('Invalid username or password');
    }
  })
  .catch((error) => console.error(error));
});

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  // Call the backend API to logout the user
  fetch('/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // User is logged out, redirect to login page
      window.location.href = '/login';
    } else {
      // User is not logged out, display error message
      alert('Error logging out');
    }
  })
  .catch((error) => console.error(error));
});