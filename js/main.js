let submitButton = document.getElementById('submit');
let fullname = document.getElementById('fn');
let email = document.getElementById('email');
let message = document.getElementById('msg');

// Declare variable that will store regular expression for email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    event.preventDefault();
    let form_data = {};
    let error = [];

    if (fullname.value.trim() !== '') {
        form_data.fullname = fullname.value.trim();
    } else {
        error.push('Full name is required.');
    }

    if (email.value.trim() !== '') {
        if (emailRegex.test(email.value.trim())) {
            form_data.email = email.value.trim();
        } else {
            error.push('Invalid email address.');
        }
    } else {
        error.push('Email is required.');
    }

    if (message.value.trim() !== '') {
        form_data.message = message.value.trim();
    } else {
        error.push('Message is required.');
    }

    if (error.length > 0) {
        console.error('Form errors:', error );
    } else {
        console.log('Form data:', form_data);
        fullname.value = '';
        email.value = '';
        message.value = '';

    }
}


// Register your form to "click" event.
submitButton.addEventListener('click', validateForm);