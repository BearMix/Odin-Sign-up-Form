document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    let formIsValid = true;

    const firstName = document.getElementById('first-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('password-confirm');

    document.querySelectorAll('.error').forEach(function (errorDiv) {
      errorDiv.textContent = '';
    });

    if (firstName.value.trim() === '') {
      formIsValid = false;
      const errorDiv = document.querySelector('#first-name ~ .error');
      errorDiv.textContent = 'Name is required';
      errorDiv.style.color = 'red';
      firstName.classList.add('invalid');
    } else {
      firstName.classList.remove('invalid');
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      formIsValid = false;
      const errorDiv = document.querySelector('#email ~ .error');
      errorDiv.textContent = 'Please enter a valid email address';
      errorDiv.style.color = 'red';
      email.classList.add('invalid');
    } else {
      email.classList.remove('invalid');
    }

    if (password.value !== confirmPassword.value) {
      formIsValid = false;
      const errorDiv = document.querySelector('#password-confirm ~ .error');
      errorDiv.textContent = 'Passwords do not match';
      errorDiv.style.color = 'red';
      confirmPassword.classList.add('invalid');
    } else {
      confirmPassword.classList.remove('invalid');
    }

    if (!formIsValid) {
      event.preventDefault();
    }
  });
