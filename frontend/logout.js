const logoutButton = document.getElementById('logout-button');

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