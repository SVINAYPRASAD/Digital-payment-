const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const paymentMethodForm = document.getElementById('payment-method-form');
const addPaymentMethodButton = document.getElementById('add-payment-method-button');
const transactionHistoryTable = document.getElementById('transaction-history-table');
const transactionHistoryTbody = document.getElementById('transaction-history-tbody');
const paymentForm = document.getElementById('payment-form');
const makePaymentButton = document.getElementById('make-payment-button');
const paymentMethodOptions = document.getElementById('payment-method-options');
const paymentMethodDetailsTable = document.getElementById('payment-method-details-table');
const paymentMethodDetailsTbody = document.getElementById('payment-method-details-tbody');

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

addPaymentMethodButton.addEventListener('click', (e) => {
  e.preventDefault();
  const paymentMethod = document.getElementById('payment-method').value;
  // Call the backend API to add the payment method
  fetch('/api/payment-methods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ paymentMethod })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Payment method added successfully
      alert('Payment method added successfully');
    } else {
      // Error adding payment method
      alert('Error adding payment method');
    }
  })
  .catch((error) => console.error(error));
});

makePaymentButton.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  const paymentMethod = document.getElementById('payment-method').value;
  // Call the backend API to make the payment
  fetch('/api/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount, paymentMethod })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Payment made successfully
      alert('Payment made successfully');
    } else {
      // Error making payment
      alert('Error making payment');
    }
  })
  .catch((error) => console.error(error));
});

// Call the backend API to get the transaction history
fetch('/api/transactions', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then((response) => response.json())
.then((data) => {
  // Loop through the transactions and add them to the table
  data.transactions.forEach((transaction) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.paymentMethod}</td>
    `;
    transactionHistoryTbody.appendChild(row);
  });
})
.catch((error) => console.error(error));
// ... (rest of the code remains the same)

const paymentMethodUpdateForm = document.getElementById('payment-method-update-form');
const updatePaymentMethodButton = document.getElementById('update-payment-method-button');

updatePaymentMethodButton.addEventListener('click', (e) => {
  e.preventDefault();
  const paymentMethod = document.getElementById('payment-method').value;
  const cardNumber = document.getElementById('card-number').value;
  const expirationDate = document.getElementById('expiration-date').value;
  const cvv = document.getElementById('cvv').value;
  // Call the backend API to update the payment method
  fetch('/api/payment-methods/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ paymentMethod, cardNumber, expirationDate, cvv })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Payment method updated successfully
      alert('Payment method updated successfully');
    } else {
      // Error updating payment method
      alert('Error updating payment method');
    }
  })
  .catch((error) => console.error(error));
});